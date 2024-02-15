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
import { createServer } from 'net';
// import { Buffer } from 'buffer';

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
async function safeJsonParse(buffer) {
  const functionName = safeJsonParse.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cbufferIs + buffer);
  let returnData;
  try {
    returnData = JSON.parse(buffer);
  } catch (e) {
    returnData = JSON.parse(JSON.stringify(buffer));
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

// Messages queue
const createMessageQueue = (state = { items: [] }) => ({
    items: state.items || [],

    async enqueue(item) {
      return new Promise(resolve => {
        this.items = [...this.items, item];
        resolve();
      })
    },

    async dequeue() {
      const [item, ...rest] = this.items;
      this.items = rest;
      return new Promise(resolve => resolve(item || null));
    },

    async isEmpty() {
      return new Promise(resolve => resolve(this.items.length === 0));
    },

    async size() {
      return new Promise(resolve => resolve(this.items.length));
    }
});

/**
 * @function socketsServer
 * @description manages the socket connection and communication.
 * @author Karl-Edward FP Jean-Mehu
 * @date 2023/12/29
 */
export default function socketsServer() {
  const functionName = socketsServer.name;
  haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);

  let server = null;

  try {
    // Flag to check if there is an active connection
    let isConnected = false;

    // Test result from client
    let testResult = null;

    // Check wether result was retrieved
    let testResultRetrieved = false;

    // Message queue
    let messageQueue = createMessageQueue();

    // Async proscess write
    const processWriteAsync = async (msg) => new Promise(resolve => {
      process.stdout.write(msg);
      resolve();
    });

    // const BUFFER_SIZE = 1024 * 1024; // 1MB
    // const HIGH_WATER_MARK = 50 // 0.8 * BUFFER_SIZE;
    // const LOW_WATER_MARK = 20 // 0.2 * BUFFER_SIZE;

    // Initial buffer size
    // let testBuffer = Buffer.alloc(BUFFER_SIZE); // 1 MB
    // let testBufferUsed = 0;

    // Banner log
    const bannerLog = async (eventName, cb) => {
      console.log('\r\n');
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);
      await cb();
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
      console.log('\r\n');
    }

    // Handles actions taken when an error occurs on the server.
    const handleError = async (error, socket) => {
      const eventName = bas.cDot + wrd.cerror;
      await bannerLog(eventName, async () => {
        await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cerrorIs + error);
        if (error['code'] === gen.cEADDRINUSE && !isConnected){
          await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
          return;
        } else if (error['code'] !== 'ECONNRESET') {
          // Error on socket server:
          console.error(app_msg.cErrorSocketServerMessage01 + error.message);
        } else if (error['code'] === 'ECONNRESET') {
          console.log('ECONNRESET!!!!')
          socket.end();
          socket.destroy();
        }
      });
      return;
    };

    // Handles actions to take when server begins to listen for connections from clients.
    const handleListening = async () => {
      const eventName = bas.cDot + wrd.clistening;
      await bannerLog(eventName, async () => {
        console.log(bas.cCarRetNewLin + wrd.cListening + bas.cDot.repeat(3) + bas.cCarRetNewLin);
      });
    };

    // Handles actions to take when a client is connected.
    const handleConnection = async () => {
      const eventName = bas.cDot + wrd.cconnection;
      await bannerLog(eventName, async () => {
        isConnected = true;
        console.log(bas.cCarRetNewLin + app_msg.cServerConnected + bas.cCarRetNewLin );
      });
    };

    const test = async (json, childEventName) => {
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
          if (!testResultRetrieved) {
            console.log("\r\nTest failed prematurely!\r\n");
            server.close();
          }
        }
      }
    }

    // Handles incoming messages as they come in from a socket client.
    const handleData = async (chunk, socket = null) => {
      const eventName = bas.cDot + wrd.cdata;
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, app_msg.cchunkIs + JSON.stringify(chunk));
      try {
        const json = await safeJsonParse(chunk);

        // Ensure the message property exists
        if (!json[wrd.cdata]) {
          if (json[app_msg.ctestResult]) {
            testResult = json[app_msg.ctestResult];
          }

          if (json[wrd.cmessage]){
            // Enqueue messages
            await messageQueue.enqueue(json);
          }

          if (!await messageQueue.isEmpty()) {
            console.log(await messageQueue.dequeue());
          }

        }
      } catch ({ message }) {
        // Failed retrieving data from client:
        console.log(bas.cCarRetNewLin + app_msg.cErrorSocketServerMessage02 + message);
      }
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
    };

    // Handle drain
    const handleDrain = async (socket) => {
      if (!messageQueue.isEmpty()) {
        const eventName = bas.cDot + wrd.cdrain;
        await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);
        const json = await messageQueue.dequeue();
        await test(json, eventName);
        await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
        socket.resume();
      }
    }

    // Handles actions to take when the connection closes.
    const handleClose = async () => {
      const eventName = bas.cDot + wrd.cclose;
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);

      isConnected = false;

      // Show error only if connection did not close successfully
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
      await processWriteAsync(bas.cGreaterThan);
    };

    // Gracefully exits process, when user attempts a "q" (quit) / ctrl-c.
    process.on(gen.cSIGINT, async () => {
      const eventName = bas.cDot + gen.csigint;
       await bannerLog(eventName, () => {
        isConnected = false;

        // Disconnecting gracefully
        console.log(bas.cCarRetNewLin + app_msg.cDisconnectingGracefully + bas.cCarRetNewLin);
      });
      process.exit();
    });

    // Start listening for connections
    const handleConnect = async () => {
      const eventName = bas.cDot + wrd.cconnect;
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);

      testResultRetrieved = false;

      if (!isConnected) { 
        server.listen(SOCKET.port, SOCKET.host, handleListening);
      }
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
    }

    // Stop listening and close connection
    const handleDisconnect = async () => {
      const eventName = bas.cDot + wrd.cdisconnect;
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event);
      if (isConnected){
        isConnected = false;
        haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
      }
      await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event);
    }

    // Indicates the end of ther server connection and properly closes server to enable smooth re-runs
    const handleEnd = async (serverInstance) => {
      const eventName = bas.cDot + wrd.cend;
      await bannerLog(eventName, async () => {
        isConnected = false;
        // Server connection has ended!
        console.log(bas.cCarRetNewLin + app_msg.cErrorSocketServerMessage03 + bas.cCarRetNewLin);
      });
      // await processWriteAsync(bas.cGreaterThan);
      // ! IMPORTANT allow re-runs
      serverInstance.close();
    }

    // After retrieving testResult
    // Ends test after a number of seconds if it has not
    // already ended
    const beginEndOfScriptCountDown = async (allottedTimeInSeconds = 20) => {
      if (testResultRetrieved) {
        await new Promise(resolve => {
          setTimeout(() => {
            console.log('Closing...Timeout reached for end of script!');
            server.close();
          }, allottedTimeInSeconds * 1000);
        })
      }
    }

    // Keep checking during the given allotted time for the test result. 
    // If no value is provided or time has passed send error.
    const getTestResult = async (allottedTimeInSeconds) => {
      // let time = allottedTimeInSeconds;
      // console.log('calling getTestResult');
      return await new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
          reject('Error: The alotted time to retrieve the test result has passed. Try again later.');
        }, allottedTimeInSeconds * 1000);

        const checkResult = () => {
          // time -= 100;
          // console.log({allottedTimeInSeconds: time})
          
          if (typeof testResult === 'string' && testResult.length){
            clearTimeout(timeoutId);
            testResultRetrieved = true;
            beginEndOfScriptCountDown();
            resolve(testResult);
          } else {
            setTimeout(checkResult, 100);
          }
        }
      
        // Restart test.
        checkResult();
      });
    }

    // Return server instance
    server = createServer(async socket => {
      handleConnection(); // good
      socket.on(wrd.cdata, async chunk => { 
        socket.emit('disconnect');

        // implement buffering
        // if (testBufferUsed + chunk.length > BUFFER_SIZE) {
          // console.log('Buffer is full.');
          // chunk = chunk.slice(testBufferUsed + chunk.length - BUFFER_SIZE)
        // }

        // append data to buffer
        // chunk.copy(testBuffer, testBufferUsed);
        // testBufferUsed += chunk.length;

         // If buffer is full, pause client
        // if (testBufferUsed >= HIGH_WATER_MARK) {
          // socket.pause();
          // console.log('Buffer full, pausing client');
        // }

        // Process data while possible
        // while (testBufferUsed > 0 && !socket.isPaused()) {
          // chunk = testBuffer.slice(0, testBufferUsed);
          // testBufferUsed = 0; // resets buffer

          await handleData(chunk, socket);
        // }

        // Resume client if buffer is below low water mark and data remains
        // if (testBufferUsed < LOW_WATER_MARK && chunk.length > 0) {
          // socket.resume();
          // console.log('Buffer drained partially, resuming client');
        // }

        // if (testBufferUsed === 0 && socket.listeners(wrd.cdrain).length > 0) {
          // socket.emit(wrd.cdrain);
        // }

      }); 
      socket.on(wrd.cerror, async (error) => { await handleError(error, socket); }); 
      socket.on(wrd.cdisconnect, handleDisconnect);
      socket.on(wrd.cclose, async () => { await handleClose(); }); 
      socket.on(wrd.cend, async () => { await handleEnd(server) }); 
      socket.on(wrd.cdrain, async () => { await handleDrain(socket) }); 
      socket.on('pause', () => {
        console.log('Client has paused due to backpressure');
      }); 
    });

    server.getTestResult = getTestResult;
    server.connect = handleConnect;
    server.terminate = async () => {
      await new Promise(resolve => {
        server.close();
        resolve();
      });
    }; 

    return server;
  } catch ({ code, message }) {
    if (code == gen.cEADDRINUSE ) {
      console.log('already in use...');
    } else {
      // Socket server failed:
      console.log(bas.cCarRetNewLin + app_msg.cSocketServerFailed + message);
    }
  }
  haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
}
