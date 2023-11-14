/**
 * @file testCommands.js
 * @module testCommands
 * @description Contains all client defined commands for execution of client test commands with various kinds of operations,
 * specific for GUI testing, API testing, etc...
 * @requires module:testBroker
 * @requires module:application.business.constants
 * @requires module:application.configuration.constants
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
import testBroker from '../../brokers/testBroker.js';
import * as app_biz from '../../constants/application.business.constants.js';
import * as app_cfg from '../../constants/application.configuration.constants.js';
import * as apc from '../../constants/application.constants.js';
import * as app_msg from '../../constants/application.message.constants.js';
import * as app_sys from '../../constants/application.system.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, biz, gen, msg, wrd} = hayConst;
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
 * @function setSlowExecutionConfiguration
 * @description Sets a configuration flag that will enable or disable the slow execution of scripts when
 * the test command is generated and executed.
 * @param {array<string>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a a true or false to indicate if the slow execution should be enabled or disabled.
 * inputData[0] === 'setSlowExecutionConfiguration'
 * inputData[1] === 'true' or 'false' or some kind of 't' or 'f', 'on' or 'off'.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,boolean>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit.
 * @author Seth Hollingsead
 * @date 2023/11/10
 */
async function setSlowExecutionConfiguration(inputData, inputMetaData) {
  let functionName = setSlowExecutionConfiguration.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ];
  if (Array.isArray(inputData) && inputData.length >= 2) {
    if (await haystacks.executeBusinessRules([inputData[1], ''], [biz.cisBoolean]) === true) {
      await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cslowExecution, inputData[1]);
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
 * @function setMultiTestExecutionConfiguration
 * @description Sets a configuration flag that determines if the tests from the test command after
 * being filtered according to the user input, are issued to the test framework as a single test command where the names are comma delimited list,
 * OR individual test commands are generated and issued to the test framework.
 * @param {array<string>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a true or false to indicate if tests should be executed all as a single test call,
 * or as multiple test calls.
 * inputData[0] === 'setMultiTestExecutionConfiguration'
 * inputData[1] === 'true' or 'false' or some kind of 't' or 'f', 'on' or 'off'.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,boolean>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit.
 * @author Seth Hollingsead
 * @date 2023/11/10
 */
async function setMultiTestExecutionConfiguration(inputData, inputMetaData) {
  let functionName = setMultiTestExecutionConfiguration.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ];
  if (Array.isArray(inputData) && inputData.length >= 2) {
    if (await haystacks.executeBusinessRules([inputData[1], ''], [biz.cisBoolean]) === true) {
      await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cmultiTestExecution, inputData[1]);
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
 * @function setBrowsersList
 * @description Persists the user entered list of supported browsers to the system configuration setting used to generate the test command(s).
 * @param {array<string>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a list of browser names, or a coma-separated list of browser names.
 * inputData[0] === 'setBrowsersList'
 * inputData[1] === 'chrome' or 'chrome,edge,firefox,safari,opera'
 * inputData[n] === 'edge'...
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,boolean>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit.
 * @author Seth Hollingsead
 * @date 2023/11/13
 */
async function setBrowsersList(inputData, inputMetaData) {
  let functionName = setBrowsersList.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ];
  let browserList = '';
  if (Array.isArray(inputData) && inputData.length >= 2) {
    if (inputData[1].includes(bas.cComa) === true) {
      browserList = inputData[1];
    } else {
      // The user has either entered only a single browser, or they have entered multiple browsers separated by spaces.
      // In either case we just take the contents of the array, minus the first entry, and join them together as a coma-separated list.
      // Then set this as the configuration setting.
      inputData.shift();
      browserList = inputData.join(bas.cComa);
    }
    await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.clistOfBrowsers, browserList);
  } else {
    // ERROR: Please enter a valid list of browser names to execute with.
    console.log(app_msg.cErrorSetBrowserListMessage);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function setExecutionEngine
 * @description Changes the configuration setting that allows the user to change or specify the test execution engine.
 * In the future, driver engines supported may be: testCafe, Playwright, Cypress, WebDriverIO, Appium, NightwatchJS.
 * However, this command is supplied to future proof the system so that when our next generation system becomes available,
 * then we can easily support these extra driver engines. For now there is a filter in this function that forces the
 * system to only accept the testcafe input, and as such testcafe is hard-coded in here, and a message will inform the user as such.
 * @param {array<string>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a name of a test driver engine, such as testcafe, Playwright, Cypress, Webdriver, appium, nightwatch.
 * However, we actually force & hard-code the value to testcafe and pop a message as described above.
 * inputData[0] === 'setExecutionEngine'
 * inputData[1] === 'testcafe', 'cypress', 'playwright', 'nightwatch', 'webdriver', 'appium'
 * @param {string} inputMetaData Not used for this command.
 * @author Seth Hollingsead
 * @date 2023/11/13
 */
async function setExecutionEngine(inputData, inputMetaData) {
  let functionName = setExecutionEngine.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ];
  if (Array.isArray(inputData) && inputData.length >= 2) {
    if (app_sys.cvalidExecutionEngines.includes(inputData[1])) {
      // WARNING: All valid execution engines are not currently supported by our testing engine.
      console.log('WARNING: All valid execution engines are not currently supported by our testing engine.');
      // WARNING: Only testcafe is supported as a testing engine, until we can finish building our next generation system.
      console.log('WARNING: Only testcafe is supported as a testing engine, until we can finish building our next generation system.');
      // WARNING: The execution engine will be hard coded to testcafe for now.
      console.log('WARNING: The execution engine will be hard coded to testcafe for now.');
      // TODO: Change the below app_sys.ctestcafe to be dynamic once the new testing framework is implemented.
      await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cexecutionDriverEngine, app_sys.ctestcafe);
    } else {
      // ERROR: Please enter a valid execution engine such as:
      console.log('ERROR: Please enter a valid execution engine such as: ' + app_sys.cvalidExecutionEngines);
    }
  } else {
    // ERROR: Please enter a valid execution engine such as:
    console.log('ERROR: Please enter a valid execution engine such as: ' + app_sys.cvalidExecutionEngines);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function setEnableReporterConfiguration
 * @description Sets the configuration flag to enable or disable the test reporter setting.
 * @param {string<array>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a true or false to indicate if tests should execute the test with a reporter string or not.
 * inputData[0] === 'setEnableReporterConfiguration'
 * inputData[1] === 'true' or 'false' or some kind of 't' or 'f', 'on' or 'off'.
 * @param {string} inputMetaData Not used for this command.
 * @author Seth Hollingsead
 * @date 2023/11/13
 */
async function setEnableReporterConfiguration(inputData, inputMetaData) {
  let functionName = setEnableReporterConfiguration.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ];
  if (Array.isArray(inputData) && inputData.length >= 2) {
    if (await haystacks.executeBusinessRules([inputData[1], ''], [biz.cisBoolean]) === true) {
      await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cenableReporter, inputData[1]);
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
 * @function setReportPathConfiguration
 * @description Sets the test report output path in the system configuration settings.
 * @param {string<array>} inputData An array that could actually contain anything,
 * depending on what the user entered. But the function filters all of that internally and
 * extracts the case the user has entered a string to the path on their local system where
 * they want the test reports to be saved to when the test is finished executing.
 * inputData[0] === 'setReportPathConfiguration'
 * inputData[1] === 'C:/CAFfeinated/results/SethEden/reports/'
 * @param {string} inputMetaData Not used for this command.
 * @author Seth Hollingsead
 * @date 2023/11/13
 */
async function setReportPathConfiguration(inputData, inputMetaData) {
  let functionName = setEnableReporterConfiguration.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, ];
  if (Array.isArray(inputData) && inputData.length >= 2) {
    await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.creportPath, inputData[1]);
  } else {
    // ERROR: Please enter a valid system path.
    console.log('ERROR: Please enter a valid system path.');
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
 * @date 2023/11/01
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
  // parse the array of file paths and file names to get an array of file names without the paths. DONE
  // Take the input from the test and use it as a keyword look-up or try to apply it as a string filter for: DONE
  // selecting an array of tests to execute, or a single test to execute. Whatever list of tests passes the string-filter matching criteria. DONE
  // Build a for-loop that will loop over all the array of tests that need to be executed. DONE
  // for each test in the array of tests, build a CLI command string to execute the test.
  // Spawn a new CMD or BASH child-process with a promise and send the CLI command string to it to execute the test script/workflow.
  // Monitor the child process and determine when the test is done, resolve the promise with the pass-fail.
  // We can set re-run criteria or other rules to determine how to handle the failure.
  // OR move on to the next test.

  // New TODO:
  // TODO:
  // Add a configuration setting, and configuration command to enable for slow execution. DONE
  // Add a configuration setting, and configuration command to enable multi-test execution as input to a single test call, DONE
  // or as part of the test runner driver-loop. DONE

  let boilerPlateTestPathAndFileName = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cboilerPlateTestPathAndFileName);
  let rootTestFolderPath = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.crootTestFolderPath);
  let defaultTestBehaviorRunAllTests = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cdefaultRunAllTests);
  let slowExecution = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cslowExecution);
  let multiTestExecution = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cmultiTestExecution);
  let listOfBrowsers = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.clistOfBrowsers);
  let executionEngine = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cexecutionDriverEngine);
  let reportEnabled = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cenableReporter);
  let reportPath = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.creportPath);
  let testCommandString = '';
  let testReporterCommandString = '';
  let validTestParameters = false;

  // TODO: Remove this hard-coded filter ONLY once we have completed the implementation of our NEW testing framework that supports multiple testing engines (playright, cypress, webdriver, appium, testcafe).
  // NOTE: I am going to hard-code the execution engine to testcafe, so even if the user changed it to something else, we are going to force-change and hard-code it here.
  // We will also pop a message to inform the user that the only supported test execution engine is testcafe.
  if (executionEngine !== app_sys.ctestcafe) {
    // WARNING: All valid execution engines are not currently supported by our testing engine.
    console.log('WARNING: All valid execution engines are not currently supported by our testing engine.');
    // WARNING: Only testcafe is supported as a testing engine, until we can finish building our next generation system.
    console.log('WARNING: Only testcafe is supported as a testing engine, until we can finish building our next generation system.');
    // WARNING: The execution engine will be hard coded to testcafe for now.
    console.log('WARNING: The execution engine will be hard coded to testcafe for now.');
    executionEngine = app_sys.ctestcafe;
  }

  // boilerPlateTestPathAndFileName is:
  await haystacks.consoleLog(namespacePrefix, functionName, 'boilerPlateTestPathAndFileName is: ' + boilerPlateTestPathAndFileName);
  // rootTestFolderPath is:
  await haystacks.consoleLog(namespacePrefix, functionName, 'rootTestFolderPath is: ' + rootTestFolderPath);
  // defaultTestBehaviorRunAllTests is:
  await haystacks.consoleLog(namespacePrefix, functionName, 'defaultTestBehaviorRunAllTests is: ' + defaultTestBehaviorRunAllTests);
  // slowExecution is:
  await haystacks.consoleLog(namespacePrefix, functionName, 'slowExecution is: ' + slowExecution);
  // multiTestExecution is:
  await haystacks.consoleLog(namespacePrefix, functionName, 'multiTestExecution is: ' + multiTestExecution);
  // listOfBrowsers is:
  await haystacks.consoleLog(namespacePrefix, functionName, 'listOfBrowsers is: ' + listOfBrowsers);
  // executionEngine is:
  await haystacks.consoleLog(namespacePrefix, functionName, 'executionEngine is: ' + executionEngine);

  if (rootTestFolderPath !== '') {
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
          // ****************************************************************************************************************
          // NOTE: The below call to executeBusinessRules, is failing for unknown reason, we are working on trying to figure out why.
          // We are working to understand this and prevent it from becoming a bigger problem.
          // ****************************************************************************************************************
          arrayOfTestNamesToExecute = await haystacks.executeBusinessRules([testFileName, arrayOfTestNamesToExecute], [app_biz.cbuildArrayOfTestNames]);
          // arrayOfTestNamesToExecute is:
          await haystacks.consoleLog(namespacePrefix, functionName, 'arrayOfTestNamesToExecute is: ' + JSON.stringify(arrayOfTestNamesToExecute));
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
          // ****************************************************************************************************************
          // NOTE: The below call to executeBusinessRules, is failing for unknown reason, we are working on trying to figure out why.
          // We are working to understand this and prevent it from becoming a bigger problem.
          // ****************************************************************************************************************
          arrayOfTestNamesToExecute = await haystacks.executeBusinessRules([testWorkflowFile, arrayOfTestNamesToExecute], [app_biz.cbuildArrayOfTestNames]);
        } // End-for (let testWorkflowFileNameAndPathKey in testWorkflowFiles)
      } // End-if (defaultTestBehaviorRunAllTests === true)
    }

    // The CMD CLI command format to use for executing a single test:
    // testcafe chrome ./TestBureau/SethEden/Tests/Default.test.js slowExe=true --reporter html:results/SethEden/reports/20231108.html testName=Writings 

    // boilerPlateTestPathAndFileName
    // rootTestFolderPath
    // slowExecution
    // multiTestExecution
    // listOfBrowsers

    if (executionEngine !== '' && listOfBrowsers !== '' && boilerPlateTestPathAndFileName !== '' && (reportEnabled === true && reportPath !== '')) {
      validTestParameters = true;
    } else {
      if (listOfBrowsers === '') {
        // ERROR: No browsers specified. Please set the list of browsers in the configuration setting:
        console.log('ERROR: No browsers specified. Please set the list of browsers in the configuration setting: ' + app_cfg.clistOfBrowsers);
      }
      if (executionEngine === '') {
        // ERROR: No execution engine is specified. Please set the execution engine in the configuration setting:
        console.log('ERROR: No execution engine is specified. Please set the execution engine in the configuration setting: ' + app_cfg.cexecutionDriverEngine);
      }
      if (boilerPlateTestPathAndFileName === '') {
        // ERROR: No boiler plate test path and file name were specified. Please set the boiler plate test path and file name in the configuration setting:
        console.log('ERROR: No boiler plate test path and file name were specified. Please set the boiler plate test path and file name in the configuration setting: ' + app_cfg.cboilerPlateTestPathAndFileName);
      }
      if (reportEnabled === true && reportPath === '') {
        // ERROR: No report path specified. Please set the report path in the configuration setting:
        console.log('ERROR: No report path specified. Please set the report path in the configuration setting: ' + app_cfg.creportPath);
      }
    }

    if (validTestParameters === true) {
      // NOTE: At some point in the future hay-CAF will transition to using hayD-CAF rather than our current system.
      // Then we can call test scripts using Playwright, Cypress, NightwatchJS, WebDriverIO, Appium and TestCafe.
      // But for now I'm going to hard-code this to just using testcafe, because it's what we have, and it's what we can use.
      testCommandString = executionEngine + bas.cSpace + listOfBrowsers + bas.cSpace + boilerPlateTestPathAndFileName + bas.cSpace;

      if (reportEnabled === true) {
        // NOTE: In the future we might want to enhance this to allow for different report types such as XML or JSON.
        // For now we are hard-coding it to html.
        testReporterCommandString = bas.cDoubleDash + wrd.creporter + bas.cSpace + wrd.chtml + bas.cColon + reportPath;
        // Now we need to generate the test file name using a time stamp for the NOW moment.
        let currentTimeStamp = await haystacks.executeBusinessRules([gen.cYYYYMMDD_HHmmss_SSS, ''], [biz.cgetNowMoment]);
        // let currentTimeStamp = await haystacks.executeBusinessRules([currentTimeStampRaw, gen.cYYYYMMDD_HHmmss_SSS], [biz.creformatDeltaTime]);
        // currentTimeStamp is:
        await haystacks.consoleLog(namespacePrefix, functionName, 'currentTimeStamp is: ' + currentTimeStamp);
        if (!testReporterCommandString.indexOf(bas.cForwardSlash, testReporterCommandString.length)) {
          testReporterCommandString = testReporterCommandString + bas.cForwardSlash;
        }
        testReporterCommandString = testReporterCommandString + currentTimeStamp;
        // NOTE: We want to add the test name as part of the report, but we will need to this below when we are generating the final test command.
        // testReporterCommandString is:
        await haystacks.consoleLog(namespacePrefix, functionName, 'testReporterCommandString is: ' + testReporterCommandString);
      }
      if (slowExecution === true) {
        testCommandString = testCommandString + app_sys.cslowExe + bas.cEqual + gen.ctrue + bas.cSpace;
      }

      if (multiTestExecution === true) {
        // Just join the arrayOfTestNamesToExecute into a coma separated list, easy-peazy
        let listOfTestNamesToExecute = arrayOfTestNamesToExecute.join(bas.cComa);
        // listOfTestNamesToExecute is:
        await haystacks.consoleLog(namespacePrefix, functionName, 'listOfTestNamesToExecute is: ' + listOfTestNamesToExecute);
        if (reportEnabled === true) {
          // NOTE: Here we cannot make the list of test names to execute as part of the report filename, because the list could be long, and the file name cannot be too long.
          // So just append the file extension.
          // NOTE: In the future we might want to enhance this to allow for different report types such as XML or JSON.
          // For now we are hard-coding it to html.
          testReporterCommandString = testReporterCommandString + bas.cDot + wrd.chtml;
          // testReporterCommandString is:
          await haystacks.consoleLog(namespacePrefix, functionName, 'testReporterCommandString is: ' + testReporterCommandString);
          testCommandString = testCommandString + bas.cSpace + testReporterCommandString + bas.cSpace;
          // testCommandString is:
          await haystacks.consoleLog(namespacePrefix, functionName, 'testCommandString is: ' + testCommandString);
        }
        testCommandString = testCommandString + app_sys.ctestName + bas.cEqual + listOfTestNamesToExecute;
        // testCommandString is:
        await haystacks.consoleLog(namespacePrefix, functionName, 'testCommandString is: ' + testCommandString);
      } else {
        // We are going to execute each test individually in a loop.
        for (let testNameKey in arrayOfTestNamesToExecute) {
          // testNameKey is:
          await haystacks.consoleLog(namespacePrefix, functionName, 'testNameKey is: ' + testNameKey);
          let testName = arrayOfTestNamesToExecute[testNameKey];
          // testName is:
          await haystacks.consoleLog(namespacePrefix, functionName, 'testName is: ' + testName);
          if (reportEnabled === true) {
            // NOTE: In the future we might want to enhance this to allow for different report types such as XML or JSON.
            // For now we are hard-coding it to html.
            testReporterCommandString = testReporterCommandString + bas.cUnderscore + testName + bas.cDot + wrd.chtml;
            // testReporterCommandString is:
            await haystacks.consoleLog(namespacePrefix, functionName, 'testReporterCommandString is: ' + testReporterCommandString);
            testCommandString = testCommandString + bas.cSpace + testReporterCommandString + bas.cSpace;
            // testCommandString is:
            await haystacks.consoleLog(namespacePrefix, functionName, 'testCommandString is: ' + testCommandString);
          }
          testCommandString = testCommandString + app_sys.ctestName + bas.cEqual + testName;
          // testCommandString is:
          await haystacks.consoleLog(namespacePrefix, functionName, 'testCommandString is: ' + testCommandString);
        } // End-for (let testNameKey in arrayOfTestNamesToExecute)
      }
    }
  } else {
    // ERROR: No test root path specified. Please set the path in the configuration setting:
    console.log('ERROR: No test root path specified. Please set the path in the configuration setting: ' + app_cfg.crootTestFolderPath);
  }
  
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

export default {
  setBoilerPlateTestPathAndFileName,
  setRootTestFolderPath,
  setDefaultTestBehavior,
  setSlowExecutionConfiguration,
  setMultiTestExecutionConfiguration,
  setBrowsersList,
  setExecutionEngine,
  setEnableReporterConfiguration,
  setReportPathConfiguration,
  printApplicationConfiguration,
  test  
}
