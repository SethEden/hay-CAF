/**
 * @file application.command.constants.validation.js
 * @module application.command.constants.validation
 * @description Contains all validations for named application command constants.
 * @requires module:application.command.constants
 * @author Seth Hollingsead
 * @date 2022/04/05
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_cmd from '../../constants/application.command.constants.js';

/**
 * @function applicationCommandConstantsValidation
 * @description Initializes the application command constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/04/05
 */
export const applicationCommandConstantsValidation = [
  // ********************************
  // Client Commands in order
  // ********************************
  {Name: 'ccustomEchoCommand', Actual: app_cmd.ccustomEchoCommand, Expected: 'customEchoCommand'},
  {Name: 'cresolveAppPath', Actual: app_cmd.cresolveAppPath, Expected: 'resolveAppPath'},
  {Name: 'crectifyAppMetaData', Actual: app_cmd.crectifyAppMetaData, Expected: 'rectifyAppMetaData'},
  {Name: 'cdeployMetaData', Actual: app_cmd.cdeployMetaData, Expected: 'deployMetaData'},
  {Name: 'cdeployApplication', Actual: app_cmd.cdeployApplication, Expected: 'deployApplication'},
  {Name: 'creleaseApplication', Actual: app_cmd.creleaseApplication, Expected: 'releaseApplication'},

  // ********************************
  // Client Workflows in order
  // ********************************
  {Name: 'cBuildWorkflow', Actual: app_cmd.cBuildWorkflow, Expected: 'Workflow build'},
  {Name: 'cReleaseWorkflow', Actual: app_cmd.cReleaseWorkflow, Expected: 'Workflow release'}
];
