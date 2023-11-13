/**
 * @file application.configuration.constants.validation.js
 * @module application.configuration.constants.validation
 * @description Contains all validations for named application configuration constants.
 * @requires module:application.configuration.constants
 * @author Seth Hollingsead
 * @date 2023/03/30
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_cfg from '../../constants/application.configuration.constants.js';

/**
 * @function applicationConfigurationConstantsValidation
 * @description Initializes the application configuration constants validation data objects array.
 * @return {array<object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Seth Hollingsead
 * @date 2023/03/30
 */
export const applicationConfigurationConstantsValidation = [
  {Name: 'cboilerPlateTestPathAndFileName', Actual: app_cfg.cboilerPlateTestPathAndFileName, Expected: 'boilerPlateTestPathAndFileName'},
  {Name: 'crootTestFolderPath', Actual: app_cfg.crootTestFolderPath, Expected: 'rootTestFolderPath'},
  {Name: 'cdefaultRunAllTests', Actual: app_cfg.cdefaultRunAllTests, Expected: 'defaultRunAllTests'},
  {Name: 'cslowExecution', Actual: app_cfg.cslowExecution, Expected: 'slowExecution'},
  {Name: 'cmultiTestExecution', Actual: app_cfg.cmultiTestExecution, Expected: 'multiTestExecution'},
  {Name: 'clistOfBrowsers', Actual: app_cfg.clistOfBrowsers, Expected: 'listOfBrowsers'},
  {Name: 'cexecutionDriverEngine', Actual: app_cfg.cexecutionDriverEngine, Expected: 'executionDriverEngine'},
  {Name: 'cenableReporter', Actual: app_cfg.cenableReporter, Expected: 'enableReporter'}
];