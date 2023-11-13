/**
 * @file testRules.js
 * @module testRules
 * @description Contains all client defined business rules for the hay-CAF application.
 * @requires module:application.constants
 * @requires module:application.message.constants
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

const {bas, biz, msg, wrd} = hayConst;
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

export {
    buildArrayOfTestNames
};