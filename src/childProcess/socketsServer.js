/**
 * @file socketsServer.js
 * @module socketsServer
 * @description Creates a socket server through which clients will communicate.
 * @requires module:application.constants
 * @requires module:application.message.constants
 * @requires module:application.system.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @requires {@link https://nodejs.dev/learn/the-nodejs-process-module|process}
 * @requires {@link https://nodejs.org/api/net|net}
 * @author Karl-Edward F.P. Jean-Mehu
 * @date 2023/12/29
 * @copyright Copyright © 2023-… by Karl-Edward F.P. Jean-Mehu. All rights reserved.
 */

// Internal imports
import * as apc from '../constants/application.constants.js';
import * as app_msg from '../constants/application.message.constants.js';
import * as app_sys from '../constants/application.system.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';
import process from 'process';
import { Server } from 'net';
import {promisify} from 'util';

const { bas, gen, msg, num, wrd } = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));

// application.hay-CAF.childProcess.socketsServer.
const namespacePrefix = wrd.capplication + bas.cDot + apc.cApplicationName + bas.cDot + app_sys.cchildProcess + bas.cDot + baseFileName + bas.cDot;

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
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cbufferIs + buffer);
  let returnData;
  try {
    returnData = JSON.parse(buffer);
  } catch (e) {
    returnData = JSON.parse(JSON.stringify(buffer));
  }
  haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function socketsServer
 * @description manages the socket connection and communication.
 * @author Karl-Edward FP Jean-Mehu
 * @date 2023/12/29
 */
export default function socketsServer() {
  const functionName = socketsServer.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);

  try {
  // Creates server instance
  const server = Server({});

  // Flag to check if there is an active connection
  let isConnected = false;

  // Test result from client
  let testResult = false;

  // Handles actions taken when an error occurs on the server.
  server.on(wrd.cerror, (error) => {
    const eventName = bas.cDot + wrd.cerror;
    haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);
    haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cerrorIs + error);
    if (error.code === gen.cEADDRINUSE && !isConnected){
      haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
      return;
    } else {
      // Error on socket server:
      console.error(app_msg.cErrorSocketServerMessage01 + error.message);
    }
    haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
  });

  // Handles actions to take when server begins to listen for connections from clients.
  server.on(wrd.clistening, () => {
    const eventName = bas.cDot + wrd.clistening;
    haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);
    console.log(bas.cCarRetNewLin + wrd.cListening + bas.cDot.repeat(3));
    haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
  });

  // Handles actions to take when a client is connected.
  server.on(wrd.cconnection, (client) => {
    const eventName = bas.cDot + wrd.cconnection;
    haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);
    isConnected = true;
    console.log(bas.cCarRetNewLin + app_msg.cServerConnected);

    // Handles action to take when an error occurs during socket connection.
    client.on(wrd.cerror, ({message}) => {
      const childEventName = eventName + bas.cDot + wrd.cerror;
      haystacks.consoleLog(namespacePrefix, functionName + childEventName, msg.cBEGIN_Event);
      haystacks.consoleLog(namespacePrefix, functionName + childEventName, msg.cmessageIs + message);
      // read ECONNRESET
      if (message !== msg.creadECONNRESET) {
        // Error on socket server:
        console.log(bas.cCarRetNewLin + app_msg.cErrorSocketServerMessage01 + message);
      }
      process.stdout.write(bas.cGreaterThan);
      haystacks.consoleLog(namespacePrefix, functionName + childEventName, msg.cEND_Event);
      return testResult;
    });

    // Handles incoming messages as they come in from a socket client.
    client.on(wrd.cdata, (chunk) => {
      const childEventName = eventName + bas.cDot + wrd.cdata;
      haystacks.consoleLog(namespacePrefix, functionName + childEventName, msg.cBEGIN_Event);
      haystacks.consoleLog(namespacePrefix, functionName + childEventName, app_msg.cchunkIs + JSON.stringify(chunk));
      try {
        const json = safeJsonParse(chunk);

        // Ensure the message property exists
        if (!json[wrd.cdata]) {
          // Internal commands
          if (json[app_msg.ctestResult]) {
            testResult = json[app_msg.ctestResult];
          }

          if (json[wrd.cmessage]){
            const { message, timestamp } = json;

            // This is the ECHO from the testing framework back to the hay-CAF window.
            let logMessage = timestamp + bas.cColon + bas.cSpace + message;
            console.log(logMessage);
            // Again echo this to the haystacks.consoleLog, because it can be logged to the log file from there.
            haystacks.consoleLog(namespacePrefix, functionName + childEventName, logMessage);

            // Terminates child processes if the "end" message is received
            const str = message.split(bas.cSpace)[0].toLowerCase();
            if (str === wrd.cend) {
              // Sending termination cmd to clients...
              haystacks.consoleLog(namespacePrefix, functionName + childEventName, app_msg.csendingTerminationCmdToClients);
              // client.write('should be closing now....')
            }
          }
        }
      } catch ({ message }) {
        // Failed retrieving data from client:
        console.log(bas.cCarRetNewLin + app_msg.cErrorSocketServerMessage02 + message);
      }
      haystacks.consoleLog(namespacePrefix, functionName + childEventName, msg.cEND_Event);
    });

    // Handles actions to take at the end of the socket connection.
    client.on(wrd.cend, () => {
      const childEventName = eventName + bas.cDot + wrd.cend;
      haystacks.consoleLog(namespacePrefix, functionName + childEventName, msg.cBEGIN_Event);
      isConnected = false;
      // Server connection has ended!
      console.log(bas.cCarRetNewLin + app_msg.cErrorSocketServerMessage03);
      haystacks.consoleLog(namespacePrefix, functionName + childEventName, msg.cEND_Event);
      process.stdout.write(bas.cGreaterThan);
      return testResult;
    });
    haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
  });

  // Handles actions to take when the connection closes.
  server.on(wrd.cclose, (code, signal) => {
    const eventName = bas.cDot + wrd.cclose;
    haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);
    haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.ccodeIs + code);
    haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.csignalIs + signal);

    isConnected = false;

    // Show error only if connection did not close successfully
    if (code !== 0) {
      // Socket server Exited with code:
      // , and signal:
      console.log(bas.cCarRetNewLin + app_msg.cSocketServer + msg.cexitedWithCode + code + msg.candSignal + signal);
    } else {
      haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
      process.exit();
    }
    haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
  });

  // Gracefully exits process, when user attempts a "q" (quit) / ctrl-c.
  process.on(gen.cSIGINT, () => {
    const eventName = bas.cDot + gen.csigint;
    isConnected = false;
    haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);
    // Disconnecting gracefully
    console.log(bas.cCarRetNewLin + app_msg.cDisconnectingGracefully);
    haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
    process.exit();
  });

  // Start listening for connections
  server.connect = () => {
    const eventName = bas.cDot + wrd.cconnect;
    haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);
    if (!isConnected) { 
      server.listen(SOCKET.port, SOCKET.host)
    }
    haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
  }

  // Stop listening and close connection
  server.disconnect = () => {
    const eventName = bas.cDot + wrd.cdisconnect;
    haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);
    if (isConnected){
      isConnected = false;
      haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
      server.disconnect();
    }
    haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
  }

  return server;
  } catch ({ message }) {
    // Socket server failed:
    console.log(bas.cCarRetNewLin + app_msg.cSocketServerFailed + message);
  }
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
}
