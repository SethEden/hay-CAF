/**
 * @file application.system.constants.validation.js
 * @module application.system.constants.validation
 * @description Contains all validations for application system constants.
 * @requires module:application.system.constants
 * @author Seth Hollingsead
 * @date 2023/03/30
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_sys from '../../constants/application.system.constants.js';

/**
 * @function applicationSystemConstantsValidation
 * @description Initializes the application system constants validation data objects array.
 * @return {array<object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Seth Hollingsead
 * @date 2023/03/30
 */
export const applicationSystemConstantsValidation = [
  // Hay-CAF system constants


  // Constants Validation
  {Name: 'cresolvedConstantsPath_Application', Actual: app_sys.cresolvedConstantsPath_Application, Expected: 'resolvedConstantsPath_Application'},
  {Name: 'capplicationBusinessConstantsValidation', Actual: app_sys.capplicationBusinessConstantsValidation, Expected: 'applicationBusinessConstantsValidation'},
  {Name: 'capplicationCommandConstantsValidation', Actual: app_sys.capplicationCommandConstantsValidation, Expected: 'applicationCommandConstantsValidation'},
  {Name: 'capplicationConfigurationConstantsValidation', Actual: app_sys.capplicationConfigurationConstantsValidation, Expected: 'applicationConfigurationConstantsValidation'},
  {Name: 'capplicationConstantsValidation', Actual: app_sys.capplicationConstantsValidation, Expected:  'applicationConstantsValidation'},
  {Name: 'capplicationMessageConstantsValidation', Actual: app_sys.capplicationMessageConstantsValidation, Expected: 'applicationMessageConstantsValidation'},
  {Name: 'capplicationSystemConstantsValidation', Actual: app_sys.capplicationSystemConstantsValidation, Expected: 'applicationSystemConstantsValidation'},

  // Filenames
  {Name: 'capplication_business_constants_js', Actual: app_sys.capplication_business_constants_js, Expected: 'application.business.constants.js'},
  {Name: 'capplication_command_constants_js', Actual: app_sys.capplication_command_constants_js, Expected: 'application.command.constants.js'},
  {Name: 'capplication_configuration_constants_js', Actual: app_sys.capplication_configuration_constants_js, Expected: 'application.configuration.constants.js'},
  {Name: 'capplication_constants_js', Actual: app_sys.capplication_constants_js, Expected: 'application.constants.js'},
  {Name: 'capplication_message_constants_js', Actual: app_sys.capplication_message_constants_js, Expected: 'application.message.constants.js'},
  {Name: 'capplication_system_constants_js', Actual: app_sys.capplication_system_constants_js, Expected: 'application.system.constants.js'},

  // Test Drivers
  // NOTE: At some point in the future hay-CAF will transition to using hayD-CAF rather than our current system.
  // Then we can call test scripts using Playwright, Cypress, NightwatchJS, WebDriverIO, Appium and TestCafe.
  // But for now I'm going to hard-code this to just using testcafe, because it's what we have, and it's what we can use.
  // However, we will add them here so the system is ready to support them once we do finally get around to building our next generation test execution framework.
  {Name: 'ctestcafe', Actual: app_sys.ctestcafe, Expected: 'testcafe'},
  {Name: 'cplaywright', Actual: app_sys.cplaywright, Expected: 'playwright'},
  {Name: 'ccypress', Actual: app_sys.ccypress, Expected: 'cypress'},
  {Name: 'cwebdriver', Actual: app_sys.cwebdriver, Expected: 'webdriver'},
  {Name: 'cappium', Actual: app_sys.cappium, Expected: 'appium'},
  {Name: 'cnightwatch', Actual: app_sys.cnightwatch, Expected: 'nightwatch'},
  {Name: 'cvalidExecutionEngines', Actual: app_sys.cvalidExecutionEngines, Expected: 'testcafe,playwright,cypress,webdriver,appium,nightwatch'},
  {Name: 'cslowExe', Actual: app_sys.cslowExe, Expected: 'slowExe'},
  {Name: 'ctestName', Actual: app_sys.ctestName, Expected: 'testName'},

  // Command Types
  {Name: 'cvalidCommandTypes', Actual: app_sys.cvalidCommandTypes, Expected: 'cmd,bash,powershell'}
];