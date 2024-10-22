/**
 * @file application.command.constants.validation.js
 * @module application.command.constants.validation
 * @description Contains all validations for named application command constants.
 * @requires module:application.command.constants
 * @author Seth Hollingsead
 * @date 2023/03/30
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_cmd from '../../constants/application.command.constants.js';

/**
 * @function applicationCommandConstantsValidation
 * @description Initializes the application command constants validation data objects array.
 * @return {array<object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Seth Hollingsead
 * @date 2023/03/30
 */
export const applicationCommandConstantsValidation = [
  // ********************************
  // ApplicationSystem Commands in order
  // ********************************
  {Name: 'cinstructions', Actual: app_cmd.cinstructions, Expected: 'instructions'},
  {Name: 'capplicationHelp', Actual: app_cmd.capplicationHelp, Expected: 'applicationHelp'},
  {Name: 'capplicationWorkflowHelp', Actual: app_cmd.capplicationWorkflowHelp, Expected: 'applicationWorkflowHelp'},
  {Name: 'cencryptString', Actual: app_cmd.cencryptString, Expected: 'encryptString'},
  {Name: 'cdecryptString', Actual: app_cmd.cdecryptString, Expected: 'decryptString'},

  // ********************************
  // ApplicationTest Commands in order
  // ********************************
  {Name: 'cvalidateApplicationConstants', Actual: app_cmd.cvalidateApplicationConstants, Expected: 'validateApplicationConstants'},
  {Name: 'cvalidateApplicationCommandAliases', Actual: app_cmd.cvalidateApplicationCommandAliases, Expected: 'validateApplicationCommandAliases'},
  {Name: 'cvalidateApplicationWorkflows', Actual: app_cmd.cvalidateApplicationWorkflows, Expected: 'validateApplicationWorkflows'},
  {Name: 'callApplicationValidations', Actual: app_cmd.callApplicationValidations, Expected: 'allApplicationValidations'},

  // ********************************
  // test Commands in order
  // ********************************
  {Name: 'csetBoilerPlateTestPathAndFileName', Actual: app_cmd.csetBoilerPlateTestPathAndFileName, Expected: 'setBoilerPlateTestPathAndFileName'},
  {Name: 'csetRootTestFolderPath', Actual: app_cmd.csetRootTestFolderPath, Expected: 'setRootTestFolderPath'},
  {Name: 'csetDefaultTestBehavior', Actual: app_cmd.csetDefaultTestBehavior, Expected: 'setDefaultTestBehavior'},
  {Name: 'csetSlowExecutionConfiguration', Actual: app_cmd.csetSlowExecutionConfiguration, Expected: 'setSlowExecutionConfiguration'},
  {Name: 'csetMultiTestExecutionConfiguration', Actual: app_cmd.csetMultiTestExecutionConfiguration, Expected: 'setMultiTestExecutionConfiguration'},
  {Name: 'csetBrowsersList', Actual: app_cmd.csetBrowsersList, Expected: 'setBrowsersList'},
  {Name: 'csetExecutionEngine', Actual: app_cmd.csetExecutionEngine, Expected: 'setExecutionEngine'},
  {Name: 'csetEnableReporterConfiguration', Actual: app_cmd.csetEnableReporterConfiguration, Expected: 'setEnableReporterConfiguration'},
  {Name: 'csetReportPathConfiguration', Actual: app_cmd.csetReportPathConfiguration, Expected: 'setReportPathConfiguration'},
  {Name: 'csetChildProcessLimitTime', Actual: app_cmd.csetChildProcessLimitTime, Expected: 'setChildProcessLimitTime'},
  {Name: 'csetCmdType', Actual: app_cmd.csetCmdType, Expected: 'setCmdType'},
  {Name: 'csetForwardCompatibilityMode', Actual: app_cmd.csetForwardCompatibilityMode, Expected: 'setForwardCompatibilityMode'},
  {Name: 'cprintApplicationConfiguration', Actual: app_cmd.cprintApplicationConfiguration, Expected: 'printApplicationConfiguration'},
  {Name: 'ctest', Actual: app_cmd.ctest, Expected: 'test'},
  
  // ********************************
  // Application Workflows in order
  // ********************************
  {Name: 'cApplicationStartupWorkflow', Actual: app_cmd.cApplicationStartupWorkflow, Expected: 'Workflow applicationStartup'}
];