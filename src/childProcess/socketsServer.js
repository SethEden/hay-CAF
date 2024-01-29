/**
 * @file socketsServer.js
 * @module socketsServer
 * @description Creates a socket server through which clients will communicate.
 * @requires module:application.message.constants
 * @requires {@link https://nodejs.dev/learn/the-nodejs-process-module|process}
 * @requires {@link https://nodejs.org/api/net|net}
 * @author Karl-Edward F.P. Jean-Mehu
 * @date 2023/12/29
 * @copyright Copyright © 2023-… by Karl-Edward F.P. Jean-Mehu. All rights reserved.
 */

// Internal imports
import * as app_msg from '../constants/application.message.constants.js';
// External imports
import hayConst from '@haystacks/constants';
import process from 'process';
import { Server } from 'net';

const { bas, biz, gen, msg, num, sys, wrd } = hayConst;

// Host and port to which the socket connection will be listening to.
const SOCKET = {
  host: num.c127 + bas.cDot + num.c0 + bas.cDot + num.c0 + bas.cDot + num.c1, // '127.0.0.1',
  port: 3000,
};

/**
 * @function safeJsonParse
 * @description Safely parses socket chunks into javascript objects.
 * @param {buffer} buffer - The buffer value to be converted.
 * @return {object} A JSON object that is safely parsed from the input JSON string.
 * @author Karl-Edward FP Jean-Mehu
 * @date 2023/12/29
 */
function safeJsonParse(buffer) {
  const functionName = safeJsonParse.name;
  // console.log('BEGIN childProcess.shells.socketsServer.safeJsonParse function');
  // console.log(`buffer is: ${buffer}`);
  let obj;

  try {
    obj = JSON.parse(buffer);
  } catch (e) {
    obj = JSON.parse(JSON.stringify(buffer));
  }
  // console.log(`obj is: ${obj}`);
  // console.log('END childProcess.shells.socketsServer.safeJsonParse function');
  return obj;
}

/**
 * @function socketsServer
 * @description manages the socket connection and communication.
 * @author Karl-Edward FP Jean-Mehu
 * @date 2023/12/29
 */
export default function socketsServer() {
  // console.log('BEGIN childProcess.shells.socketsServer.socketsServer function');

  try {
    // Creates server instance
    const server = Server({});

    // Flag to check if there is an active connection
    let isConnected = false;

    // Test result from client
    let testResult = false;

    // Handles actions taken when an error occurs on the server.
    server.on(wrd.cerror, (error) => {
      // console.log('BEGIN childProcess.shells.socketsServer.error event');
      // console.log(`message is: ${message}`);
      if (error.code === 'EADDRINUSE' && !isConnected){
        return;
      } else {
        console.error(`Error on socket server: ${error.message}`);
        // console.log('END childProcess.shells.socketsServer.error event');
      }
    });

    // Handles actions to take when server begins to listen for connections from clients.
    server.on(wrd.clistening, () => {
      // console.log('BEGIN childProcess.shells.socketsServer.listening event');
      // console.log(`message is: ${message}`);
      console.log(bas.cCarRetNewLin + wrd.cListening + bas.cDot.repeat(3));
      // console.log('END childProcess.shells.socketsServer.listening event');
    });

    // Handles actions to take when a client is connected.
    server.on(wrd.cconnection, (client) => {
      // console.log('BEGIN childProcess.shells.socketsServer.connection event');
      isConnected = true;
      console.log(bas.cCarRetNewLin + app_msg.cServerConnected);

      // Handles action to take when an error occurs during socket connection.
      client.on(wrd.cerror, ({message}) => {
        // console.log('BEGIN childProcess.shells.socketsServer.connection.error event');
        // console.log(`message is: ${message}`);
        if (message !== 'read ECONNRESET') {
          console.log(`\r\n>Error on socket server: ${message}`);
        }
        process.stdout.write(bas.cGreaterThan);
        return testResult;
        // console.log('END childProcess.shells.socketsServer.connection.error event'); 
      });

      // Handles incoming messages as they come in from a socket client.
      client.on(wrd.cdata, (chunk) => {
        // console.log('BEGIN childProcess.shells.socketsServer.connection.data event');
        // console.log(`chunk is: ${safeJsonParse( chunk )}`);
        try {
          const json = safeJsonParse(chunk);

          // Ensure the message property exists
          if (!json[wrd.cdata]) {

            // Internal commands
            if (json['testResult']) {
              testResult = json['testResult'];
            }

            if (json[wrd.cmessage]){
                const { message, timestamp } = json;

                console.log(`${timestamp}: ${message}`);

                // Terminates child processes 
                // if "end" message is received
                const str = message.split(bas.cSpace)[0].toLowerCase();
                if (str === wrd.cend) {
                  // console.log('Sending termination cmd to clients...')
                  // client.write('should be closing now....')
                }
            }
          }
        } catch ({ message }) {
          console.log(`\r\nFailed retrieving data from client: ${message}`);
        }
        // console.log('END childProcess.shells.socketsServer.connection.data event');
      });

      // Handles actions to take at the end of the socket connection.
      client.on(wrd.cend, () => {
        // console.log('BEGIN childProcess.shells.socketsServer.connection.end event');
        isConnected = false;
        console.log('\r\nServer connection has ended!');
        process.stdout.write('>');
        return testResult;
      });
      // console.log('END childProcess.shells.socketsServer.connection.end event');
    });

    // Handles actions to take when the connection closes.
    server.on(wrd.cclose, (code, signal) => {
      // console.log('BEGIN childProcess.shells.socketsServer.close event');
      // console.log(`code is: ${code}`);
      // console.log(`signal is: ${signal}`);

      isConnected = false;

      // Show error only if connection did not close successfully
      if (code !== 0) {
        console.log(
          `\r\nSocket server exited with code, ${code}, and signal, ${signal}`,
        );
      } else {
        // console.log('END childProcess.shells.socketsServer.close event');
        process.exit();
      }
    });

    // Gracefully exits process, when user attempts a "q" (quit) / ctrl-c.
    process.on('SIGINT', () => {
      isConnected = false;
      // console.log('BEGIN childProcess.shells.socketsServer.sigint event');
      console.log('\r\nDisconnecting gracefully');
      // console.log('END childProcess.shells.socketsServer.sigint event');
      process.exit();
    });

    // Start listening for connections
    this.connect = () => {
      // console.log('BEGIN childProcess.shells.socketsServer.socketsServer.connect function');
      if (!isConnected) { 
        server.listen(SOCKET.port, SOCKET.host);
      // console.log('END childProcess.shells.socketsServer.socketsServer.connect function');
      }
    }

    // Stop listening and close connection
    this.disconnect = () => {
      // console.log('BEGIN childProcess.shells.socketsServer.socketsServer.disconnect function');
      if (isConnected){
        isConnected = false;
        // console.log('END childProcess.shells.socketsServer.socketsServer.disconnect function');
        server.disconnect()
      }
    }

  } catch ({ message }) {
    console.log(`\r\nSocket server failed: ${message}`);
  }
  // console.log('END childProcess.shells.socketsServer.socketsServer function');
}
