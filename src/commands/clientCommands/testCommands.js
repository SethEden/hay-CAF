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
import * as app_cfg from '../../constants/application.configuration.constants.js';
import * as app_msg from '../../constants/application.message.constants.js';
import * as app_sys from '../../constants/application.system.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, msg, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// application.hay-CAF.commands.clientCommands.testCommands.
const namespacePrefix = wrd.capplication + bas.cDot + apc.cApplicationName + bas.cDot + wrd.ccommands + bas.cDot + wrd.cclient + wrd.cCommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function setBoilerPlateTestPathAndFileName
 * @description Allows the user the specify the boiler plate test path and file name.
 * This is the common test file used to execute all tests. We use the same test file,
 * because all tests are completely data driven from the workflows, keywords, locators and data.
 * So we have 1 (ONE) test, and we just feed it different data,
 * and the test script will dynamically generate the test script on demand from the input data.
 * @param {string} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a path and file name.
 * inputData[0] === 'setBoilerPlateTestPathAndFileName'
 * inputData[1] === 'C:\CAFfeinated\TestBureau\SethEden\Tests\Default.test.js'
 * inputData[n] === test data n (Not valid input, if it is provided, it will not be used.)
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,boolean>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit.
 * @author Seth Hollingsead
 * @date 2023/11/01
 */
async function setBoilerPlateTestPathAndFileName(inputData, inputMetaData) {
  let functionName = setBoilerPlateTestPathAndFileName.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ];
  if (Array.isArray(inputData) && inputData.length >= 2) {
    await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cboilerPlateTestPathAndFileName, inputData[1]);
  } else {
    // ERROR: Please enter a valid path and filename as input.
    console.log(app_msg.cErrorSetBoilerPlateTestPathAndFileNameMessage);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function setRootTestFolderPath
 * @description Allows the user to specify the root path where all the test workflow definitions will be located.
 * This folder could contain many sub-folders, and various kinds of test files, including but not limited to:
 * .feature files
 * .csv files
 * .xls or xlsx files
 * .xml files
 * .js files
 * .json files
 * @param {array<string>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a path and file name.
 * inputData[0] === 'setRootTestFolderPath'
 * inputData[1] === 'C:\CAFfeinated\TestBureau\SethEden\Tests\Workflows\'
 * inputData[n] === test data n (Not valid input, if it is provided, it will not be used.)
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,boolean>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit.
 * @author Seth Hollingsead
 * @date 2023/011/01
 */
async function setRootTestFolderPath(inputData, inputMetaData) {
  let functionName = setBoilerPlateTestPathAndFileName.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ];
  if (Array.isArray(inputData) && inputData.length >= 2) {
    await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.crootTestFolderPath, inputData[1]);
  } else {
    // ERROR: Please enter a valid path as input.
    console.log(app_msg.cErrorSetRootTestFolderPathMessage);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function setDefaultTestBehavior
 * @description Changes a configuration boolean flag that controls if the default test command behavior is to run all tests or not.
 * @param {array<string>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a a true or false to indicate if the default behavior of the test command is to
 * run all the tests or not if no parameters are specified.
 * inputData[0] === 'test'
 * inputData[1] === 'true' or 'false' or some kind of 't' or 'f', 'on' or 'off'.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,boolean>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by a string to report the status of the test, pass, fail, warning.
 * @author Seth Hollingsead
 * @date 2023/11/08
 */
async function setDefaultTestBehavior(inputData, inputMetaData) {
  let functionName = setDefaultTestBehavior.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ];
  if (Array.isArray(inputData) && inputData.length >= 2) {
    if (await haystacks.executeBusinessRules([inputData[1], ''], [biz.cisBoolean]) === true) {
      await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cdefaultRunAllTests, inputData[1]);
    } else {
      // ERROR: Please enter a valid input, true or false.
      console.log(app_msg.cErrorSetDefaultTestBehaviorMessage);
    }
  } else {
    // ERROR: Please enter a valid input, true or false.
    console.log(app_msg.cErrorSetDefaultTestBehaviorMessage);
  }  
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function printApplicationConfiguration
 * @description Prints out the current system.configuration settings in a table format,
 * that is easy to read and triage or debug the configuration by end users.
 * @param {array<string>} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,boolean>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit.
 * @author Seth Hollingsead
 * @date 2023/011/01
 */
async function printApplicationConfiguration(inputData, inputMetaData) {
  let functionName = setBoilerPlateTestPathAndFileName.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ];
  let appConfig = await haystacks.executeBusinessRules([[wrd.cconfiguration, wrd.csystem], false], [biz.cgetNamespacedDataObject]);
  let refactoredAppConfig = [];
  for (let settingKey in appConfig) {
    // settingKey is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.csettingKeyIs + settingKey);
    let settingIsStringValue = false;
    let settingStringValueLength = 0;
    let settingValue = appConfig[settingKey];
    if (!Array.isArray(settingValue)) {
      if (typeof settingValue === wrd.cstring) {
        settingIsStringValue = true;
        settingStringValueLength = settingValue.length;
      }
      if (settingValue && ((settingIsStringValue === true && settingStringValueLength < 100) || settingIsStringValue === false)) {
        // settingValue is:
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.csettingValueIs + settingValue);
        // Now we have eliminated all of the edge cases of long arrays or long strings!
        // We should add the settingKey & settingValue to the refactoredAppConfig array as a new object.
        refactoredAppConfig.push({Name: settingKey, Value: settingValue});
      }
    }
  } // End-for (let settingKey in appConfig)
  // refactoredAppConfig is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.crefactoredAppConfigIs + JSON.stringify(refactoredAppConfig))
  await haystacks.consoleTableLog(namespacePrefix, refactoredAppConfig, [wrd.cName, wrd.cValue]);
  // appConfig is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cappConfigIs + JSON.stringify(appConfig));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

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
 * @return {array<boolean,boolean>} An array with a boolean True or False value to
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
  let arrayOfTestNamesToExecute = [];
  returnData[1] = testStatus;
  // TODO: 
  // Get the paths for: crootTestFolderPath && cboilerPlateTestPathAndFileName DONE
  // rootTestFolderPath, needs to have all the files scanned and loaded into some kind of data structure. DONE
  // parse the array of file paths and file names to get an array of file names without the paths.
  // Take the input from the test and use it as a keyword look-up or try to apply it as a string filter for:
  // selecting an array of tests to execute, or a single test to execute. Whatever list of tests passes the string-filter matching criteria.
  // Build a for-loop that will loop over all the array of tests that need to be executed.
  // for each test in the array of tests, build a CLI command string to execute the test.
  // Spawn a new CMD or BASH child-process with a promise and send the CLI command string to it to execute the test script/workflow.
  // Monitor the child process and determine when the test is done, resolve the promise with the pass-fail.
  // We can set re-run criteria or other rules to determine how to handle the failure.
  // OR move on to the next test.

  let boilerPlateTestPathAndFileName = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cboilerPlateTestPathAndFileName);
  let rootTestFolderPath = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.crootTestFolderPath);
  let defaultTestBehaviorRunAllTests = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cdefaultRunAllTests);
  // boilerPlateTestPathAndFileName is:
  await haystacks.consoleLog(namespacePrefix, functionName, 'boilerPlateTestPathAndFileName is: ' + boilerPlateTestPathAndFileName);
  // rootTestFolderPath is:
  await haystacks.consoleLog(namespacePrefix, functionName, 'rootTestFolderPath is: ' + rootTestFolderPath);
  // defaultTestBehaviorRunAllTests is:
  await haystacks.consoleLog(namespacePrefix, functionName, 'defaultTestBehaviorRunAllTests is: ' + defaultTestBehaviorRunAllTests);

  // commandToExecute = await haystacks.executeBusinessRules([process.argv, ''], [biz.cisBoolean]);
  let testWorkflowFiles = await haystacks.executeBusinessRules([rootTestFolderPath, ''], [biz.creadDirectoryContents]);
  // testWorkflowFiles are:
  await haystacks.consoleLog(namespacePrefix, functionName, 'testWorkflowFiles are: ' + JSON.stringify(testWorkflowFiles));

  // NOTE: So first lets determine what the user entered, if the user has entered a test-term or test-keyword,
  // we should use that keyword as a filter to the file path & file names array.
  // If the user didn't enter anything then we need to check the default behavior setting to determine if we should run all tests or not.
  // After we are done filtering or setting behavior we should have established an array of test names.
  // Then we will iterate over that array to execute the tests.
  if (Array.isArray(inputData) && inputData.length >= 2) {
    // The user has entered something. Try to filter the testWorkflowFiles array based on this input.
    for (let testFileNameKey in testWorkflowFiles) {
      // testFileNameKey is:
      await haystacks.consoleLog(namespacePrefix, functionName, 'testFileNameKey is: ' + testFileNameKey);
      let testFileName = testWorkflowFiles[testFileNameKey];
      // testFileName is:
      await haystacks.consoleLog(namespacePrefix, functionName, 'testFileName is: ' + testFileName);
      // Here we setup the filter search, just do a simple string search for now.
      // We might want to consider allowing for more advanced filter options in the future, like regular expressions, etc...
      // Or even running custom business logic for the filter by using dependency injection.
      if (testFileName.toLowerCase().includes(inputData[1].toLowerCase())) {

        // REFACTOR %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        // REFACTOR %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        let testFileNameWithoutExtension = await haystacks.executeBusinessRules([testFileName, ''], [biz.cgetFileNameFromPath, biz.cremoveFileExtensionFromFileName]);
        // testFileNameWithoutExtension is:
        await haystacks.consoleLog(namespacePrefix, functionName, 'testFileNameWithoutExtension is: ' + testFileNameWithoutExtension);
        // Now the test file name should have a prefix "Test_", lets make sure we only parse files with this prefix, otherwise they are not properly formatted tests,
        // and the testing framework would have trouble executing them anyway!
        if (testFileNameWithoutExtension.includes(wrd.cTest + bas.cUnderscore) === true) {
          let testWorkflowFileNameArray = testFileNameWithoutExtension.split(bas.cUnderscore); // Split the filename into an array so we can remove the prefix "Test_";
          // testWorkflowFileNameArray is:
          await haystacks.consoleLog(namespacePrefix, functionName, 'testWorkflowFileNameArray is: ' + JSON.stringify(testWorkflowFileNameArray));
          testWorkflowFileNameArray.shift(); // Remove the "Test" prefix, this means we now just have the test name, not the file name.
          arrayOfTestNamesToExecute.push(testWorkflowFileNameArray[0]); // Add the test name to the array of tests to execute.
          // arrayOfTestNamesToExecute is:
          await haystacks.consoleLog(namespacePrefix, functionName, 'arrayOfTestNamesToExecute is: ' + JSON.stringify(arrayOfTestNamesToExecute));
        }
        // REFACTOR %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        // REFACTOR %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

      } // End-if (testFileName.includes(inputData[1]))
    } // End-for (let testFileNameKey in testWorkflowFiles)
  } else {
    // The user didn't enter anything, so we will do the default behavior, according to the setting flag.
    // default behavior should either be to execute all the tests or execute no tests.
    if (defaultTestBehaviorRunAllTests === true) {
      // Parse each test workflow file name and file path to just get the file name without the file extension.
      for (let testWorkflowFileNameAndPathKey in testWorkflowFiles) { 
        // testWorkflowFileNameAndPathKey is:
        await haystacks.consoleLog(namespacePrefix, functionName, 'testWorkflowFileNameAndPathKey is: ' + testWorkflowFileNameAndPathKey);
        let testWorkflowFile = testWorkflowFiles[testWorkflowFileNameAndPathKey];
        // testWorkflowFile is:
        await haystacks.consoleLog(namespacePrefix, functionName, 'testWorkflowFile is: ' + testWorkflowFile);

        // REFACTOR %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        // REFACTOR %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        let testWorkflowFileName = await haystacks.executeBusinessRules([testWorkflowFile, ''], [biz.cgetFileNameFromPath, biz.cremoveFileExtensionFromFileName]);
        // testWorkflowFileName is:
        await haystacks.consoleLog(namespacePrefix, functionName, 'testWorkflowFileName is: ' + testWorkflowFileName);
        // Now the test file name should have a prefix "Test_", lets make sure we only parse files with this prefix, otherwise they are not properly formatted tests,
        // and the testing framework would have trouble executing them anyway!
        if (testWorkflowFileName.includes(wrd.cTest + bas.cUnderscore) === true) {
          let testFileNameArray = testWorkflowFileName.split(bas.cUnderscore); // Split the filename into an array so we can remove the prefix "Test_".
          // testFileNameArray is:
          await haystacks.consoleLog(namespacePrefix, functionName, 'testFileNameArray is: ' + JSON.stringify(testFileNameArray));
          testFileNameArray.shift(); // Remove the "Test" prefix, this means we now just have the test name, not the file name.
          arrayOfTestNamesToExecute.push(testFileNameArray[0]); // Add the test name to the array of tests to execute.
          // arrayOfTestNamesToExecute is:
          await haystacks.consoleLog(namespacePrefix, functionName, 'arrayOfTestNamesToExecute is: ' + JSON.stringify(arrayOfTestNamesToExecute));
        } // End-if (testWorkflowFileName.includes(wrd.cTest + bas.cUnderscore) === true)
        // REFACTOR %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        // REFACTOR %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
        
      } // End-for (let testWorkflowFileNameAndPathKey in testWorkflowFiles)
    } // End-if (defaultTestBehaviorRunAllTests === true)
  }

  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

export default {
  setBoilerPlateTestPathAndFileName,
  setRootTestFolderPath,
  setDefaultTestBehavior,
  printApplicationConfiguration,
  test  
}