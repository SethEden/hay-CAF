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
import childProcess from "child_process";

const { bas, biz, msg, sys, wrd } = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// application.hay-CAF.businessRules.clientRules.testRules.
const namespacePrefix = wrd.capplication + bas.cDot + apc.cApplicationName + bas.cDot + wrd.cbusiness + wrd.cRules + bas.cDot + wrd.cclient + wrd.cRules + bas.cDot + baseFileName + bas.cDot;

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
    let functionName = buildArrayOfTestNames.name;
    await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
    await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
    await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
    let returnData = inputMetaData;
    let testFileName = await haystacks.executeBusinessRules([inputData, ''], [biz.cgetFileNameFromPath, biz.cremoveFileExtensionFromFileName]);
    // testFileName is:
    await haystacks.consoleLog(namespacePrefix, functionName, 'testFileName is: ' + testFileName);
    // Now the test file name should have a prefix "Test_", lets make sure we only parse files with this prefix, otherwise they are not properly formatted tests,
    // and the testing framework would have trouble executing them anyway!
    if (testFileName.includes(wrd.cTest + bas.cUnderscore) === true) {
        let testFileNameArray = testFileName.split(bas.cUnderscore); // Split the filename into an array so we can remove the prefix "Test_".
        // testFileNameArray is:
        await haystacks.consoleLog(namespacePrefix, functionName, 'testFileNameArray is: ' + JSON.stringify(testFileNameArray));
        testFileNameArray.shift(); // Remove the "Test" prefix, this means we now just have the test name, not the file name.
        returnData.push(testFileNameArray[0]); // Ad the test name to the array of tests to execute.
        await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
    } // End-if (testFileName.includes(wrd.cTest + bas.cUnderscore) === true)
    await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
    await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
    return returnData;
}

/**
 * @function executeTestCommand
 * @description Takes a command string and executes it on a CLI Windows CMD, BASH or PowerShell interface as a child process.
 * @param {string} inputData The command string that should be executed in the child process.
 * @param {string} inputMetaData The CLI type: Windows CMD, BASH or PowerShell.
 * @return {boolean} True or False to indicate if the test passed successfully or not.
 * @author Seth Hollingsead
 * @date 2023/11/14
 */
async function executeTestCommand(inputData, inputMetaData) {
    let functionName = executeTestCommand.name;
    await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
    await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
    await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
    let returnData = false;
    if (inputData && inputMetaData) {
        let result;
        switch (inputMetaData.toLowerCase()) {
            case sys.ccmd:
                // TODO: Spawn the Windows CMD child process and execute the command against that.
                result = await spawnCmdProcess(inputData, inputMetaData);
                await haystacks.consoleLog(namespacePrefix, functionName, "CMD result is: " + result.toString());
                break;
            case sys.cbash:
                // TODO: Spawn the bash child process and execute the command against that.
                result = await spawnCmdProcess(inputData, inputMetaData);
                await haystacks.consoleLog(namespacePrefix, functionName, "CMD result is: " + result.toString());
                break;
            case sys.cpowershell:
                // TODO: Spawn the powershell child process and execute the command against that.
                result = await spawnCmdProcess(inputData, inputMetaData);
                await haystacks.consoleLog(namespacePrefix, functionName, "CMD result is: " + result.toString());
                break;
            default:
                // ERROR: You must specify a test type to execute. Command type is:
                console.log('ERROR: You must specify a test command to execute. Command is: ' + inputMetaData);
                // Valid command types are:
                console.log('Valid command types are: ' + app_sys.cvalidCommandTypes);
                break;
        }
        // TODO: Return True or False based on the test passing or failing.
    } else {
        if (!inputData) {
            // ERROR: You must specify a test command to execute. Command is:
            console.log('ERROR: You must specify a test command to execute. Command is: ' + inputData);
        }
        if (!inputMetaData) {
            // ERROR: You must specify a test type to execute. Command type is:
            console.log('ERROR: You must specify a test command to execute. Command is: ' + inputMetaData);
            // Valid command types are:
            console.log('Valid command types are: ' + app_sys.cvalidCommandTypes);
        }
    }
    await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
    await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
    return returnData;
}

/**
 * @function spawnCmdProcess 
 * @description Takes a command string and executes it on a CLI Windows CMD, BASH or PowerShell interface as a child process.
 * @param {string} inputData The command string that should be executed in the child process.
 * @param {string} inputMetaData The CLI type: Windows CMD, BASH or PowerShell.
 * @return {string} The string that exceuted command result
 * @author Json Howard
 * @date 2023/11/15
 */
async function spawnCmdProcess(inputData, inputMetaData) {
    let functionName = spawnCmdProcess.name;
    await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
    await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
    await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);

    // Get childProcessLimitTime from configuration.
    let childProcessLimitTime = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cchildProcessLimitTime);
    await haystacks.consoleLog(namespacePrefix, functionName, `childProcessLimitTime: ${childProcessLimitTime}`);

    // Get rootPath of hay-CAF repository.
    let rootPath = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.crootTestFolderPath);
    rootPath = rootPath.slice(0, rootPath.indexOf("CAFfeinated") + 12);

    // Run command with rootPath.
    let command = 'start cmd.exe /c ' + inputData;
    const runCommand = childProcess.exec(command, {
        cwd: rootPath,
    });

    

    return new Promise(async (resolve, reject) => {
        try {
            // Call exitChildProcess function when close command window.
            runCommand.on("close", async (code, signal) => {
                await haystacks.consoleLog(namespacePrefix, functionName, `Code is: ${code}`);
                await haystacks.consoleLog(namespacePrefix, functionName, `Signal is: ${signal}`);
                exitChildProcess();
            });

            // Call exit childProcess when error occurred.
            runCommand.on("error", async () => {
                await haystacks.consoleLog(namespacePrefix, functionName, "Child Process Error.");
                exitChildProcess();
            });

            // End process and Resolve function.
            const exitChildProcess = async () => {
                await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + "true");
                await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
                runCommand.kill();
                runCommand.stdin.end();
                resolve(true);
            }

            // Exit child process when there's no actions while 4 mins.
            setTimeout(() => {
                if (!runCommand.stdin.closed) {
                    console.log('Ending terminal session');
                    exitChildProcess();
                }
            }, childProcessLimitTime);
        } catch (e) {
            reject(e);
        } finally {
            runCommand.kill();
            runCommand.stdin.end();
        }
    });
}

export {
    buildArrayOfTestNames,
    executeTestCommand,
    spawnCmdProcess,
};