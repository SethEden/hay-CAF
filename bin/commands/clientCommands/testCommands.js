/**
 * @file testCommands.js
 * @module testCommands
 * @description Contains all client defined commands for execution of client test commands with various kinds of operations,
 * specific for GUI testing, API testing, etc...
 * @requires module:testBroker
 * @requires module:application.command.constants
 * @requires module:application.message.constants
 * @requires module:application.system.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/03/30
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import testBroker from '../../brokers/testBroker.js';
import * as apc from '../../constants/application.constants.js';
import * as app_msg from '../../constants/application.message.constants.js';
import * as app_sys from '../../constants/application.system.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// application.hay-CAF.commands.clientCommands.testCommands.
const namespacePrefix = wrd.capplication + bas.cDot + apc.cApplicationName + bas.cDot + wrd.ccommands + bas.cDot + wrd.cclient + wrd.cCommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function test
 * @description Executes a test, any kind of a test given a path to the input data that will be used to drive the test.
 * @param {array<string>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a list of data elements used to drive the test.
 * inputData[0] === 'test'
 * inputData[1] === test data 1
 * inputData[2] === test data 2
 * inputData[n] === test data n
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,boolean>} An array ith a boolean True or False value to
 * indicate if the application should exit or not exit, followed by a string to report the status of the test, pass, fail, warning.
 * @author Seth Hollingsead
 * @date 2023/03/31
 */
async function test(inputData, inputMetaData) {
  let functionName = test.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ];
  let testStatus = wrd.cFAIL;
  returnData[1] = testStatus;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

export default {
  test  
}