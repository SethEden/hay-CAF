/**
 * @file socketsServer.js
 * @module socketsServer
 * @description Creates a socket server through which clients will communicate.
 * TODO: broken @requires {@link https://nodejs.dev/learn/the-nodejs-process-module|process}
 * TODO: verify @requires {@link https://nodejs.org/api/net|net}
 * @author Karl-Edward F.P. Jean-Mehu
 * @date 2023/12/29
 * @copyright Copyright © 2023-… by Karl-Edward F.P. Jean-Mehu. All rights reserved.
 */

// Internal imports
// External imports
import process from 'process';
import { Server } from 'net';

// Host and port to which the socket
// connection will be listening to
const SOCKET = {
  host: '127.0.0.1',
  port: 3000,
};

/**
 * @function safeJsonParse
 * @description Safely parses socket chunks into javascript objects.
 * @param {buffer} buffer - The buffer value to be converted.
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

    // Flag to check if there is 
    // an active connection
    let isConnected = false;

    // Handles actions taken when an
    // error occurs on the server.
    server.on('error', (error) => {
      // console.log('BEGIN childProcess.shells.socketsServer.error event');
      // console.log(`message is: ${message}`);
      if (error.code === 'EADDRINUSE' && !isConnected){
        return;
      } else {
        console.error(`Error on socket server: ${error.message}`);
        // console.log('END childProcess.shells.socketsServer.error event');
      }
    });

    // Handles actions to take when server
    // begins to listen for connections from clients.
    server.on('listening', () => {
      // console.log('BEGIN childProcess.shells.socketsServer.listening event');
      // console.log(`message is: ${message}`);
      console.log('\r\nListening...');
      // console.log('END childProcess.shells.socketsServer.listening event');
    });

    // Handles actions to take
    // when a client is connected.
    server.on('connection', (client) => {
      // console.log('BEGIN childProcess.shells.socketsServer.connection event');
      isConnected = true;
      console.log('\r\nServer connected!');

      // Handles action to take
      // when an error occurs during socker connection.
      client.on('error', ({message}) => {
        // console.log('BEGIN childProcess.shells.socketsServer.connection.error event');
        // console.log(`message is: ${message}`);
        console.log(`\r\n>1Error on socket server: ${message}`);
        // console.log('END childProcess.shells.socketsServer.connection.error event'); 
      });

      // Handles incomming messages as they
      // come in from a socket client.
      client.on('data', (chunk) => {
        // console.log('BEGIN childProcess.shells.socketsServer.connection.data event');
        // console.log(`chunk is: ${safeJsonParse( chunk )}`);
        try {
          const json = safeJsonParse(chunk);

          // Ensure the message property exists
          if (!json['data'] && json['message']) {
            const { message, timestamp } = json;

            console.log(`${timestamp}: ${message}`);
          }
        } catch ({ message }) {
          console.log(`\r\nFailed retrieving data from client: ${message}`);
        }
        // console.log('END childProcess.shells.socketsServer.connection.data event');
      });

      // Handles actions to take at the end
      // of the socket connection.
      client.on('end', () => {
        // console.log('BEGIN childProcess.shells.socketsServer.connection.end event');
        isConnected = false;
        console.log('\r\nServer connection has ended!');
      });
      // console.log('END childProcess.shells.socketsServer.connection.end event');
    });

    // Handles actions to when
    // the connection closes.
    server.on('close', (code, signal) => {
      // console.log('BEGIN childProcess.shells.socketsServer.close event');
      // console.log(`code is: ${code}`);
      // console.log(`signal is: ${signal}`);

      isConnected = false;

      // Show error only if connection
      // did not close successfully
      if (code !== 0) {
        console.log(
          `\r\nSocket server exited with code, ${code}, and signal, ${signal}`,
        );
      } else {
        // console.log('END childProcess.shells.socketsServer.close event');
        process.exit();
      }
    });

    // Gracefully exits process
    // when user attemps a "q" (quit) / ctrl-c.
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
