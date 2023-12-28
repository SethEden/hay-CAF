/**
 * @file testRules.js
 * @module testRules
 * @description Contains all client defined business rules for the hay-CAF application.
 * @requires module:application.constants
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
import * as apc from '../../constants/application.constants.js';
import * as app_msg from '../../constants/application.message.constants.js';
import * as app_sys from '../../constants/application.system.constants.js';
import * as app_cfg from '../../constants/application.configuration.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';
import process from 'process';
import { fork } from 'child_process';
import com_server from '../../childProcess/com_protocol_server.js';

const { bas, biz, msg, sys, wrd } = hayConst;
const baseFileName = path.basename(
  import.meta.url,
  path.extname(import.meta.url),
);

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const SpawnProcess = `${__dirname}/../../childProcess/SpawnProcess.js`;

// application.hay-CAF.businessRules.clientRules.testRules.
const namespacePrefix =
  wrd.capplication +
  bas.cDot +
  apc.cApplicationName +
  bas.cDot +
  wrd.cbusiness +
  wrd.cRules +
  bas.cDot +
  wrd.cclient +
  wrd.cRules +
  bas.cDot +
  baseFileName +
  bas.cDot;

/**
 * @function buildArrayOfTestNames
 * @description Takes a test workflow file name, parses the file name to get the test name, and adds the test name to an array of test names and returns the modified array.
 * @param {string} inputData The file name and path of the test workflow data file.
 * @param {array<string>} inputMetaData The array that the test name should be added to once it has been parsed, and if it fulfills the qualification as a valid test workflow file name.
 * @return {array<string>} A modified string array that contains the test name if it is a valid test file name.
 * @author Seth Hollingsead
 * @date 2023/11/09
 */
async function buildArrayOfTestNames(inputData, inputMetaData) {
  // let functionName = buildarrayoftestnames.name;
  // await haystacks.consolelog(namespaceprefix,functionName,msg.cbegin_function,);
  // await haystacks.consolelog(namespaceprefix,functionName,msg.cinputdatais + json.stringify(inputdata),);
  // await haystacks.consolelog(namespaceprefix,functionName,msg.cinputmetadatais + inputmetadata,);
  let returnData = inputMetaData;
  let testfilename = await haystacks.executeBusinessRules(
    [inputData, ''],
    [biz.cgetFileNameFromPath, biz.cremoveFileExtensionFromFileName],
  );

  // testFileName is:
  // await haystacks.consoleLog(namespacePrefix,functionName,'testFileName is: ' + testFileName);
  // Now the test file name should have a prefix "Test_", lets make sure we only parse files with this prefix, otherwise they are not properly formatted tests,
  // and the testing framework would have trouble executing them anyway!
  if (testfilename.includes(wrd.cTest + bas.cUnderscore) === true) {
    let testFileNameArray = testfilename.split(bas.cUnderscore); // Split the filename into an array so we can remove the prefix "Test_".
    // testFileNameArray is:
    // await haystacks.consoleLog(namespace,functionName,'testFileNameArray is: ' + JSON.stringify(testFileNameArray));
    testFileNameArray.shift(); // Remove the "Test" prefix, this means we now just have the test name, not the file name.
    returnData.push(testFileNameArray[0]); // Ad the test name to the array of tests to execute.
    // await haystacks.consoleLog(names,functionName,msg.creturnDataIs + JSON.stringify(returnData));
  } // End-if (testFileName.includes(wrd.cTest + bas.cUnderscore) === true)
  // await haystacks.consoleLog(namespacePrefix,functionName,msg.creturnDataIs + JSON.stringify(returnData));
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function executeTestCommand
 * @description Takes a command string and executes it on a CLI Windows CMD, BASH or PowerShell interface as a child process.
 * @param {string} inputData The command string that should be executed in the child process.
 * @param {string} inputMetaData This is not used in this business rule.
 * @return {boolean} True or False to indicate if the test passed successfully or not.
 * @author Seth Hollingsead
 * @date 2023/11/14
 */
async function executeTestCommand(inputData, inputMetaData = '') {
  // let functionName = executetestcommand.name;
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // await haystacks.consoleLog(namespacePre , functionName, msg.cinputDataIs + JSON.stringify(inputData));
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = false;
  const platform = process.platform.toLowerCase();
  const supportedPlatforms = ['darwin', 'win32', 'linux'];

  // Returned test result from spawnCmdProcess
  let testResult = false;

  if (supportedPlatforms.includes(platform)) {
    if (inputData) {
      inputMetaData = inputMetaData.toLowerCase();

      // Check options for Win32
      // This will be ignored on other platforms for now
      if (
        platform === 'win32' &&
        !app_sys.cvalidCommandTypes.split(',').includes(inputMetaData)
      ) {
        // ERROR: You must specify a test type to execute. Command type is:
        console.log(
          'ERROR: You must specify a test command to execute. Command is: ' +
            inputMetaData,
        );
        // Valid command types are:
        console.log('Valid command types are: ' + app_sys.cvalidCommandTypes);
      } else {
        // Spawns child process using appropriate shell (based on detected OS) and executes input command
        // TODO: Return True or False based on the test passing or failing.
        testResult = spawnCmdProcess(inputData, inputMetaData).then((r) => r);
      }
    } else {
      console.log(
        `ERROR: You must specify a test command to execute. Command is: ${inputMetaData}`,
      );
    }
  } else {
    console.log(`ERROR: You're system is not yet supported!`);
  }
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function spawnCmdProcess
 * @description Detects the OS and creates a temporary shell script which executes the given command string in a child process's terminal
 * @param {string} inputData The command string that should be executed in the child process.
 * @param {string} inputMetaData This is not used in this business rule.
 * @return {string} The string that exceuted command result
 * @author Karl-Edward Jean-Mehu
 * @date 2023/12/03
 */
async function spawnCmdProcess(inputData, inputMetaData) {
  try {
    const functionName = spawnCmdProcess.name;

    // Start communication protocol Server
    com_server();

    // Main / grandparent process PID
    const grandParentPid = process.pid;

    const _rootPath = await haystacks.getConfigurationSetting(
      wrd.csystem,
      app_cfg.crootTestFolderPath,
    );

    const normalizedPath = path.normalize(_rootPath);
    const directories = normalizedPath.split(path.sep);
    const targetIndex = directories.indexOf('CAFfeinated') + 1;
    const CAFfeinatedPath = directories.slice(0, targetIndex).join('/');
    const childProcess = fork(SpawnProcess, [
      inputData,
      { CAFfeinatedPath, grandParentPid },
      { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] },
    ]);

    childProcess.on('data', (chunk) => {
      const message = chunk.toString();
      console.log(`Message from child: ${message}`);
      // haystacks.consoleLog(namespacePrefix, functionName, `msg is: ${message}`);
    });

    childProcess.on('error', (error) => {
      console.log(`Error: ${error}`);
      // haystacks.consoleLog(namespacePrefix, functionName, `msg is: ${message}`);
    });

    // Child process exited
    childProcess.on('exit', (code, signal) => {
      // Display only unsuccessful exit codes
      if (code !== 0) {
        console.log(`Exited with code, ${code}, and signal ${signal}!`);
      }
    });
  } catch (e) {
    console.log(e);
  }
}

export { executeTestCommand, buildArrayOfTestNames, spawnCmdProcess };
