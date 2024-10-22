/**
 * @file application.command.constants.js
 * @module application.command.constants
 * @description A file to hold all of the client application command constants.
 * So none of the constants in this file should be generic/system/framework constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2023/03/30
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports

// External imports
import hayConst from '@haystacks/constants';
const {bas, gen, wrd} = hayConst;

// ********************************
// ApplicationSystem Commands in order
// ********************************
export const cinstructions = wrd.cinstructions; // instructions
export const capplicationHelp = wrd.capplication + wrd.cHelp; // applicationHelp
export const capplicationWorkflowHelp = wrd.capplication + wrd.cWorkflow + wrd.cHelp; // applicationWorkflowHelp
export const cencryptString = wrd.cencrypt + wrd.cString; // encryptString
export const cdecryptString = wrd.cdecrypt + wrd.cString; // decryptString

// ********************************
// ApplicationTest Commands in order
// ********************************
export const cvalidateApplicationConstants = wrd.cvalidate + wrd.cApplication + wrd.cConstants; // validateApplicationConstants
export const cvalidateApplicationCommandAliases = wrd.cvalidate + wrd.cApplication + wrd.cCommand + wrd.cAliases; // validateApplicationCommandAliases
export const cvalidateApplicationWorkflows = wrd.cvalidate + wrd.cApplication + wrd.cWorkflows; // validateApplicationWorkflows
export const callApplicationValidations = wrd.call + wrd.cApplication + wrd.cValidations; // allApplicationValidations

// ********************************
// hay-CAF Commands in order
// ********************************
export const csetBoilerPlateTestPathAndFileName = wrd.cset + wrd.cBoiler + wrd.cPlate + wrd.cTest + wrd.cPath + wrd.cAnd + wrd.cFileName; // setBoilerPlateTestPathAndFileName
export const csetRootTestFolderPath = wrd.cset + wrd.cRoot + wrd.cTest + wrd.cFolder + wrd.cPath; // setRootTestFolderPath
export const csetDefaultTestBehavior = wrd.cset + wrd.cDefault + wrd.cTest + wrd.cBehavior; // setDefaultTestBehavior
export const csetSlowExecutionConfiguration = wrd.cset + wrd.cSlow + wrd.cExecution + wrd.cConfiguration; // setSlowExecutionConfiguration
export const csetMultiTestExecutionConfiguration = wrd.cset + wrd.cMulti + wrd.cTest + wrd.cExecution + wrd.cConfiguration; // setMultiTestExecutionConfiguration
export const csetBrowsersList = wrd.cset + wrd.cBrowsers + wrd.cList; // setBrowsersList
export const csetExecutionEngine = wrd.cset + wrd.cExecution + wrd.cEngine; // setExecutionEngine
export const csetEnableReporterConfiguration = wrd.cset + wrd.cEnable + wrd.cReporter + wrd.cConfiguration; // setEnableReporterConfiguration
export const csetReportPathConfiguration = wrd.cset + wrd.cReport + wrd.cPath + wrd.cConfiguration; // setReportPathConfiguration
export const csetChildProcessLimitTime = wrd.cset + wrd.cChild + wrd.cProcess + wrd.cLimit + wrd.cTime; // setChildProcessLimitTime
export const csetCmdType = wrd.cset + gen.cCmd + wrd.cType; // setCmdType
export const csetForwardCompatibilityMode = wrd.cset + wrd.cForward + wrd.cCompatibility + wrd.cMode; // setForwardCompatibilityMode
export const cprintApplicationConfiguration = wrd.cprint + wrd.cApplication + wrd.cConfiguration; // printApplicationConfiguration
export const ctest = wrd.ctest; // test

// ********************************
// Application Workflows in order
// ********************************
export const cApplicationStartupWorkflow = wrd.cWorkflow + bas.cSpace + wrd.capplication + wrd.cStartup; // Workflow applicationStartup