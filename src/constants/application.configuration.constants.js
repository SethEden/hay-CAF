/**
 * @file application.configuration.constants.js
 * @module application.configuration.constants
 * @description A file to hold all of the client configuration constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2023/03/30
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {sys, wrd} = hayConst;

export const cboilerPlateTestPathAndFileName = wrd.cboiler + wrd.cPlate + wrd.cTest + wrd.cPath + wrd.cAnd + wrd.cFileName; // boilerPlateTestPathAndFileName
export const crootTestFolderPath = wrd.croot + wrd.cTest + wrd.cFolder + wrd.cPath; // rootTestFolderPath
export const cdefaultRunAllTests = wrd.cdefault + wrd.cRun + wrd.cAll + wrd.cTests; // defaultRunAllTests
export const cslowExecution = wrd.cslow + wrd.cExecution; // slowExecution
export const cmultiTestExecution = wrd.cmulti + wrd.cTest + wrd.cExecution; // multiTestExecution
export const clistOfBrowsers = wrd.clist + wrd.cOf + wrd.cBrowsers; // listOfBrowsers
export const cexecutionDriverEngine = wrd.cexecution + wrd.cDriver + wrd.cEngine; // executionDriverEngine
export const cenableReporter = wrd.cenable + wrd.cReporter; // enableReporter
export const creportPath = wrd.creport + wrd.cPath; // reportPath
export const cchildProcessLimitTime = wrd.cchild + wrd.cProcess + wrd.cLimit + wrd.cTime; // childProcessLimitTime
export const ccmdType = sys.ccmd + wrd.cType; // cmdType
export const cforwardCompatibilityMode = wrd.cforward + wrd.cCompatibility + wrd.cMode; // forwardCompatibilityMode
export const ctestScriptFileName = wrd.ctest + wrd.cScript + wrd.cFileName; // testScriptFileName