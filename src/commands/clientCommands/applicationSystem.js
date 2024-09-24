/**
 * @file applicationSystem.js
 * @module applicationSystem
 * @description Contains all client application system commands for execution of the client application with basic system operations.
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
import * as app_msg from '../../constants/application.message.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, cmd, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// application.hay-CAF.commands.clientCommands.applicationSystem.
const namespacePrefix = wrd.capplication + bas.cDot + apc.cApplicationName + bas.cDot + wrd.ccommands + bas.cDot + wrd.cclient + wrd.cCommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function instructions
 * @description Provides instructions to the end user on what steps they need to perform to get up and running and interface with the system.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used or this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2023/03/30
 */
async function instructions(inputData, inputMetaData) {
  let functionName = instructions.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];

  // Instructions to end user:
  console.log(app_msg.cinstructionsMessage00)
  // ....More instructions ADD HERE!
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function applicationHelp
 * @description A command to list the application commands. (There are no plugins for this application.)
 * See the Haystacks testHarness code for how to do this with plugins.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array with a boolean True or False value to indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2023/03/30
 */
async function applicationHelp(inputData, inputMetaData) {
  let functionName = applicationHelp.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  await haystacks.enqueueCommand(wrd.chelp + bas.cSpace + wrd.cApplication);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function applicationWorkflowHelp
 * @description A command to list the application workflows. (There are no plugins for this application.)
 * See the Haystacks testHarness code for how to do this with plugins.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string>} An array ith a boolean True or False value to indicate if the application should exit or not exit, followed by an empty string.
 * @author Seth Hollingsead
 * @date 2023/03/30
 */
async function applicationWorkflowHelp(inputData, inputMetaData) {
  let functionName = applicationWorkflowHelp.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + inputData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  await haystacks.enqueueCommand(cmd.cworkflowHelp + bas.cSpace + wrd.cApplication);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function decryptString
 * @description A command to decrypt a string. This is a wrapper for calling the Haystacks-async business rule to decrypt a string.
 * The intended use is for a system administrator to test decryption of test account credentials so that successful extraction of
 * username and password can be independently validated.
 * @param {array<string>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a string to be decrypted first,
 * followed by a private_public key to be used as a seed to decrypt the string.
 * inputData[0] === 'decryptString'
 * inputData[1] === The string to be decrypted.
 * inputData[2] === 'privateKey_publicKey'
 * @param {string} inputMetaData Not used for this command.
 * @return {string} The decrypted string.
 * @author Seth Hollingsead
 * @date 2024/09/24
 */
async function decryptString(inputData, inputMetaData) {
  let functionName = decryptString.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  let validInputData = false;
  let validDecryptString = false;
  let validPublicPrivateKey = false;
  let stringToDecrypt = '';
  let decryptionKey = '';
  let decryptionKeyArray = [];
  let publicKey = '';
  let decryptedString = '';
  let decryptionSuccessful = false;
  if (inputData && Array.isArray(inputData) && inputData.length === 3 &&
  typeof inputData[1] === wrd.cstring && inputData[1] !== '' &&
  typeof inputData[2] === wrd.cstring && inputData[2] !== '' && inputData[2].includes(bas.cUnderscore)) {
    validInputData = true;
    validDecryptString = true;
    validPublicPrivateKey = true;
    stringToDecrypt = inputData[1];
    decryptionKey = inputData[2];
    decryptionKeyArray = inputData[2].split(bas.cUnderscore);
    publicKey = decryptionKeyArray[1];
  } else {
    // Pop some instructions to the user,
    // and we will collect data until we have a valid set of inputs such that we can proceed with the encryption process.
    while (validInputData === false) {
      // WARNING: No valid inputs where provided to the command.
      // This command is intended to be used by the system administrator.
      // The system administrator will have a private key used by the testing framework, to be combined with the public key,
      // This privateKey should be combined with a publicKey that was previously uniquely generated and used for the encryption process.
      // The publicKey should be stored in the testing framework page data according to the instructions in the framework documentation,
      // along side the encrypted string. The testing framework will take these two pieces of data and combine it with the
      // privateKey stored in the testing framework to decrypt the data at the point of use.
      // If you have the privateKey and the publicKey as well as the encrypted string,
      // you can use this function to manually test the decryption process.
      // Make certain that the privateKey you use is the same privateKey used in the testing framework.
      // ***********
      console.log('***********');
      while (validEncryptString === false) {
        // Please enter the string to be encrypted.
        console.log('Please enter the string to be encrypted.');
        stringToEncrypt = await haystacks.executeBusinessRules([bas.cGreaterThan, ''], [biz.cprompt]);
        if (stringToEncrypt !== '') {
          validEncryptString = true;
        }
      }
      while (validPublicPrivateKey === false) {
        // Please enter a privateKey_publicKey to be used as a seed for the encryption process.
        console.log('Please enter a privateKey_publicKey to be used as a seed for the encryption process.');
        encryptionKey = await haystacks.executeBusinessRules([bas.cGreaterThan, ''], [biz.cprompt]);
        if (encryptionKey !== '' && encryptionKey.includes(bas.cUnderscore)) {
          validPublicPrivateKey = true;
          encryptionKeyArray = inputData[2].split(bas.cUnderscore);
          publicKey = encryptionKeyArray[1];
        }
      }
      if (validEncryptString === true && validPublicPrivateKey === true) {
        validInputData = true;
      }
    }
  }
  // At this point the user has entered valid data, now we can proceed with the encryption process.
  if (validInputData === true && validEncryptString === true && validPublicPrivateKey === true) {
    encryptedString = await haystacks.executeBusinessRules([stringToEncrypt, encryptionKey], [biz.cencryptStringAes256]);
    if (encryptedString && typeof encryptString === wrd.cstring && encryptedString !== '') {
      encryptionSuccessful = true;
    }
  }
  if (encryptionSuccessful === true) {
    // encrypted string is:
    console.log('encrypted string is: ' + encryptString);
    await haystacks.consoleLog(namespacePrefix, functionName, 'encrypted string is: ' + encryptedString);
    // publicKey is:
    console.log('publicKey is: ' + publicKey);
    await haystacks.consoleLog(namespacePrefix, functionName, 'publicKey is: ' + publicKey);
    // Make certain you store the encrypted string and the public key in the testing framework page data,
    console.log('Make certain you store the encrypted string and the public key in the testing framework page data,');
    // according to the instructions in the framework documentation.
    console.log('according to the instructions in the framework documentation.');
  } else {
    // ERROR: Failure to encrypt string. Please file a support ticket with the Hay-CAF repo,
    console.log('ERROR: Failure to encrypt string. Please file a support ticket with the Hay-CAF repo,');
    // or contact Haystacks Tech support team, repo link and details are provided in the Hay-CAF product documentation.
    console.log('or contact Haystacks Tech support team, repo link and details are provided in the Hay-CAF product documentation.');
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function encryptString
 * @description A command to encrypt a string. This is a wrapper for calling the Haystacks-async business rule to encrypt a string.
 * The intended use is for a system administrator to encrypt test account credentials so that the username and password can be stored
 * securely in the page data CSV files, and also when the data is used to perform the login action, and those actions are performed
 * on the browser, when those actions get logged the user account credentials will also get obfuscated for the console log and log files.
 * @param {array<string>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a string to be encrypted first,
 * followed by a private_public key to be used as a seed to encrypt the string.
 * inputData[0] === 'encryptString'
 * inputData[1] === The string to be encrypted.
 * inputData[2] === 'privateKey_publicKey'
 * @param {string} inputMetaData Not used for this command.
 * @return {string} The encrypted string.
 * @author Seth Hollingsead
 * @date 2024/09/24
 */
async function encryptString(inputData, inputMetaData) {
  let functionName = encryptString.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ''];
  let validInputData = false;
  let validEncryptString = false;
  let validPublicPrivateKey = false;
  let stringToEncrypt = '';
  let encryptionKey = '';
  let encryptionKeyArray = [];
  let publicKey = '';
  let encryptedString = '';
  let encryptionSuccessful = false;
  if (inputData && Array.isArray(inputData) && inputData.length === 3 &&
  typeof inputData[1] === wrd.cstring && inputData[1] !== '' &&
  typeof inputData[2] === wrd.cstring && inputData[2] !== '' && inputData[2].includes(bas.cUnderscore)) {
    validInputData = true;
    validEncryptString = true;
    validPublicPrivateKey = true;
    stringToEncrypt = inputData[1];
    encryptionKey = inputData[2];
    encryptionKeyArray = inputData[2].split(bas.cUnderscore);
    publicKey = encryptionKeyArray[1];
  } else {
    // Pop some instructions to the user,
    // and we will collect data until we have a valid set of inputs such that we can proceed with the encryption process.
    while (validInputData === false) {
      // WARNING: No valid inputs where provided to the command.
      console.log('WARNING: No valid inputs where provided to the command.');
      // This command is intended to be used by the system administrator.
      console.log('This command is intended to be used by the system administrator.');
      // The system administrator will have a private key used by the testing framework, to be combined with the public key.
      console.log('The system administrator will have a private key used by the testing framework, to be combined with the public key.');
      // This privateKey should be combined with a publicKey uniquely generated for this specific string encryption.
      console.log('This privateKey should be combined with a publicKey uniquely generated for this specific string encryption.');
      // The publicKey should be stored in the testing framework page data according to the instructions in the framework documentation,
      console.log('The publicKey should be stored in the testing framework page data according to the instructions in the framework documentation,');
      // along side the encrypted string. The testing framework will take these two pieces of data and combine it with the
      console.log('along side the encrypted string. The testing framework will take these two pieces of data and combine it with the');
      // privateKey stored in the testing framework to decrypt the data at the point of use.
      console.log('privateKey stored in the testing framework to decrypt the data at the point of use.');
      // This will allow your testing account credentials to remain secure across the entire testing framework.
      console.log('This will allow your testing account credentials to remain secure across the entire testing framework.');
      // Testing account credentials at rest (test page data) as well as in use (execution/debug logs) will remain confidential
      console.log('Testing account credentials at rest (test page data) as well as in use (execution/debug logs) will remain confidential');
      // under all circumstances and usage.
      console.log('under all circumstances and usage.');
      // Make certain that the privateKey you use is the same privateKey used in the testing framework.
      console.log('Make certain that the privateKey you use is the same privateKey used in the testing framework.');
      // ***********
      console.log('***********');
      while (validEncryptString === false) {
        // Please enter the string to be encrypted.
        console.log('Please enter the string to be encrypted.');
        stringToEncrypt = await haystacks.executeBusinessRules([bas.cGreaterThan, ''], [biz.cprompt]);
        if (stringToEncrypt !== '') {
          validEncryptString = true;
        }
      }
      while (validPublicPrivateKey === false) {
        // Please enter a privateKey_publicKey to be used as a seed for the encryption process.
        console.log('Please enter a privateKey_publicKey to be used as a seed for the encryption process.');
        encryptionKey = await haystacks.executeBusinessRules([bas.cGreaterThan, ''], [biz.cprompt]);
        if (encryptionKey !== '' && encryptionKey.includes(bas.cUnderscore)) {
          validPublicPrivateKey = true;
          encryptionKeyArray = inputData[2].split(bas.cUnderscore);
          publicKey = encryptionKeyArray[1];
        }
      }
      if (validEncryptString === true && validPublicPrivateKey === true) {
        validInputData = true;
      }
    }
  }
  // At this point the user has entered valid data, now we can proceed with the encryption process.
  if (validInputData === true && validEncryptString === true && validPublicPrivateKey === true) {
    encryptedString = await haystacks.executeBusinessRules([stringToEncrypt, encryptionKey], [biz.cencryptStringAes256]);
    if (encryptedString && typeof encryptString === wrd.cstring && encryptedString !== '') {
      encryptionSuccessful = true;
    }
  }
  if (encryptionSuccessful === true) {
    // encrypted string is:
    console.log('encrypted string is: ' + encryptString);
    await haystacks.consoleLog(namespacePrefix, functionName, 'encrypted string is: ' + encryptedString);
    // publicKey is:
    console.log('publicKey is: ' + publicKey);
    await haystacks.consoleLog(namespacePrefix, functionName, 'publicKey is: ' + publicKey);
    // Make certain you store the encrypted string and the public key in the testing framework page data,
    console.log('Make certain you store the encrypted string and the public key in the testing framework page data,');
    // according to the instructions in the framework documentation.
    console.log('according to the instructions in the framework documentation.');
  } else {
    // ERROR: Failure to encrypt string. Please file a support ticket with the Hay-CAF repo,
    console.log('ERROR: Failure to encrypt string. Please file a support ticket with the Hay-CAF repo,');
    // or contact Haystacks Tech support team, repo link and details are provided in the Hay-CAF product documentation.
    console.log('or contact Haystacks Tech support team, repo link and details are provided in the Hay-CAF product documentation.');
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + returnData);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}



export default {
  instructions,
  applicationHelp,
  applicationWorkflowHelp,
  encryptString,
  decryptString
};