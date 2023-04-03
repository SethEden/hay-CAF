/**
 * @file applicationTests.js
 * @module applicationTests
 * @description Contains all client defined application specific integration test commands specific to
 * executing integration tests on application data. The will be many plugins for this application.
 * @requires module:application.command.constants
 * @requires module:application.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/03/30
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as apc from '../../constants/application.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, cmd, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// application.hay-CAF.commands.clientCommands.applicationTests.
const namespacePrefix = wrd.capplication + bas.cDot + apc.cApplicationName + bas.cDot + wrd.ccommands + bas.cDot + wrd.cclient + wrd.cCommands + bas.cDot + baseFileName + bas.cDot;


/**
 * @function validateApplicationConstants
 * @description A command to validate all application specific constants. (There are no plugins for this application.)
 * See the Haystacks testHarness code for how to do this with plugins.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2023/03/30
 */
async function validateApplicationConstants(inputData, inputMetaData) {
  let functionName = validateApplicationConstants.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  await haystacks.enqueueCommand(cmd.cvalidateConstants + bas.cSpace + wrd.cApplication);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function validateApplicationCommandAliases
 * @description A command to validate all application specific command aliases. (There are no plugins for this application.)
 * See the Haystacks testHarness for how to do this with plugins.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2023/03/30
 */
async function validateApplicationCommandAliases(inputData, inputMetaData) {
  let functionName = validateApplicationCommandAliases.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  await haystacks.enqueueCommand(cmd.cvalidateCommandAliases + bas.cSpace + wrd.cApplication);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function validateApplicationWorkflows
 * @description A command to validate all application specific workflows. (There are no plugins for this application.)
 * See the Haystacks testHarness for how to do this with plugins.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2023/03/30
 */
async function validateApplicationWorkflows(inputData, inputMetaData) {
  let functionName = validateApplicationWorkflows.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  await haystacks.enqueueCommand(cmd.cvalidateWorkflows + bas.cSpace + wrd.cApplication);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function allApplicationValidations
 * @description A command to execute all application validations.  (There are no plugins for this application.)
 * See the Haystacks testHarness for how to do this with plugins.
 * This is better to hove here so we can define short name command aliases for this command, rather than having a long workflow name.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2023/03/30
 */
async function allApplicationValidations(inputData, inputMetaData) {
  let functionName = allApplicationValidations.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  await haystacks.enqueueCommand(cmd.crunAllValidations + bas.cSpace + wrd.cApplication);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

export default {
  validateApplicationConstants,
  validateApplicationCommandAliases,
  validateApplicationWorkflows,
  allApplicationValidations
}