/**
 * @file application.system.constants.validation.js
 * @module application.system.constants.validation
 * @description Contains all validations for application system constants.
 * @requires module:application.system.constants
 * @author Seth Hollingsead
 * @date 2022/04/05
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_sys from '../../constants/application.system.constants.js';

/**
 * @function applicationSystemConstantsValidation
 * @description Initializes the application system constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/04/05
 */
export const applicationSystemConstantsValidation = [
  {Name: 'cresolvedConstantsPath_Application', Actual: app_sys.cresolvedConstantsPath_Application, Expected: 'resolvedConstantsPath_Application'},
  {Name: 'capplicationBusinessConstantsValidation', Actual: app_sys.capplicationBusinessConstantsValidation, Expected: 'applicationBusinessConstantsValidation'},
  {Name: 'capplicationCommandConstantsValidation', Actual: app_sys.capplicationCommandConstantsValidation, Expected: 'applicationCommandConstantsValidation'},
  {Name: 'capplicationConfigurationConstantsValidation', Actual: app_sys.capplicationConfigurationConstantsValidation, Expected: 'applicationConfigurationConstantsValidation'},
  {Name: 'capplicationConstantsValidation', Actual: app_sys.capplicationConstantsValidation, Expected: 'applicationConstantsValidation'},
  {Name: 'capplicationMessageConstantsValidation', Actual: app_sys.capplicationMessageConstantsValidation, Expected: 'applicationMessageConstantsValidation'},
  {Name: 'capplicationSystemConstantsValidation', Actual: app_sys.capplicationSystemConstantsValidation, Expected: 'applicationSystemConstantsValidation'},

  // Filenames
  {Name: 'capplication_business_constants_js', Actual: app_sys.capplication_business_constants_js, Expected: 'application.business.constants.js'},
  {Name: 'capplication_command_constants_js', Actual: app_sys.capplication_command_constants_js, Expected: 'application.command.constants.js'},
  {Name: 'capplication_configuration_constants_js', Actual: app_sys.capplication_configuration_constants_js, Expected: 'application.configuration.constants.js'},
  {Name: 'capplication_constants_js', Actual: app_sys.capplication_constants_js, Expected: 'application.constants.js'},
  {Name: 'capplication_message_constants_js', Actual: app_sys.capplication_message_constants_js, Expected: 'application.message.constants.js'},
  {Name: 'capplication_system_constants_js', Actual: app_sys.capplication_system_constants_js, Expected: 'application.system.constants.js'}
];
