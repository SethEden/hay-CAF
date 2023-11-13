/**
 * @file application.message.constants.validation.js
 * @module application.message.constants.validation
 * @description Contains all validations for named application message constants.
 * @requires module:application.message.constants
 * @author Seth Hollingsead
 * @date 2023/03/30
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_msg from '../../constants/application.message.constants.js';

/**
 * @function applicationMessageConstantsValidation
 * @description Initializes the application message constants validation data objects array.
 * @return {array<object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Seth Hollingsead
 * @date 2023/03/30
 */
export const applicationMessageConstantsValidation = [
  // General application messages

  // Application messages
  {Name: 'cinstructionsMessage00', Actual: app_msg.cinstructionsMessage00, Expected: 'Instructions to end user:'},

  // Constants Validation
  {Name: 'callClientConstantsValidationDataIs', Actual: app_msg.callClientConstantsValidationDataIs, Expected: 'allClientConstantsValidationData is: '},
  {Name: 'cresolvedConstantsPath_ApplicationBusinessIs', Actual: app_msg.cresolvedConstantsPath_ApplicationBusinessIs, Expected: 'resolvedConstantsPath_ApplicationBusiness is: '},
  {Name: 'cresolvedConstantsPath_ApplicationCommandIs', Actual: app_msg.cresolvedConstantsPath_ApplicationCommandIs, Expected: 'resolvedConstantsPath_ApplicationCommand is: '},
  {Name: 'cresolvedConstantsPath_ApplicationConfigurationIs', Actual: app_msg.cresolvedConstantsPath_ApplicationConfigurationIs, Expected: 'resolvedConstantsPath_ApplicationConfiguration is: '},
  {Name: 'cresolvedConstantsPath_ApplicationConstantIs', Actual: app_msg.cresolvedConstantsPath_ApplicationConstantIs, Expected: 'resolvedConstantsPath_ApplicationConstant is: '},
  {Name: 'cresolvedConstantsPath_ApplicationMessageIs', Actual: app_msg.cresolvedConstantsPath_ApplicationMessageIs, Expected: 'resolvedConstantsPath_ApplicationMessage is: '},
  {Name: 'cresolvedConstantsPath_ApplicationSystemIs', Actual: app_msg.cresolvedConstantsPath_ApplicationSystemIs, Expected: 'resolvedConstantsPath_ApplicationSystem is: '},

  {Name: 'cApplicationBusinessConstantsPhase1Validation', Actual: app_msg.cApplicationBusinessConstantsPhase1Validation, Expected: 'Application Business Constants Phase 1 Validation'},
  {Name: 'cApplicationCommandConstantsPhase1Validation', Actual: app_msg.cApplicationCommandConstantsPhase1Validation, Expected: 'Application Command Constants Phase 1 Validation'},
  {Name: 'cApplicationConfigurationConstantsPhase1Validation', Actual: app_msg.cApplicationConfigurationConstantsPhase1Validation, Expected: 'Application Configuration Constants Phase 1 Validation'},
  {Name: 'cApplicationConstantsPhase1Validation', Actual: app_msg.cApplicationConstantsPhase1Validation, Expected: 'Application Constants Phase 1 Validation'},
  {Name: 'cApplicationMessageConstantsPhase1Validation', Actual: app_msg.cApplicationMessageConstantsPhase1Validation, Expected: 'Application Message Constants Phase 1 Validation'},
  {Name: 'cApplicationSystemConstantsPhase1Validation', Actual: app_msg.cApplicationSystemConstantsPhase1Validation, Expected: 'Application System Constants Phase 1 Validation'},

  {Name: 'cApplicationBusinessConstantsPhase2Validation', Actual: app_msg.cApplicationBusinessConstantsPhase2Validation, Expected: 'Application Business Constants Phase 2 Validation'},
  {Name: 'cApplicationCommandConstantsPhase2Validation', Actual: app_msg.cApplicationCommandConstantsPhase2Validation, Expected: 'Application Command Constants Phase 2 Validation'},
  {Name: 'cApplicationConfigurationConstantsPhase2Validation', Actual: app_msg.cApplicationConfigurationConstantsPhase2Validation, Expected: 'Application Configuration Constants Phase 2 Validation'},
  {Name: 'cApplicationConstantsPhase2Validation', Actual: app_msg.cApplicationConstantsPhase2Validation, Expected: 'Application Constants Phase 2 Validation'},
  {Name: 'cApplicationMessageConstantsPhase2Validation', Actual: app_msg.cApplicationMessageConstantsPhase2Validation, Expected: 'Application Message Constants Phase 2 Validation'},
  {Name: 'cApplicationSystemConstantsPhase2Validation', Actual: app_msg.cApplicationSystemConstantsPhase2Validation, Expected: 'Application System Constants Phase 2 Validation'},

  {Name: 'capplicationMessage01', Actual: app_msg.capplicationMessage01, Expected: 'BEGIN main program loop'},
  {Name: 'capplicationMessage02', Actual: app_msg.capplicationMessage02, Expected: 'BEGIN command parser'},
  {Name: 'capplicationMessage03', Actual: app_msg.capplicationMessage03, Expected: 'END command parser'},
  {Name: 'capplicationMessage04', Actual: app_msg.capplicationMessage04, Expected: 'END main program loop'},
  {Name: 'capplicationMessage05', Actual: app_msg.capplicationMessage05, Expected: 'Exiting Hay-CAF application'},

  {Name: 'csettingKeyIs', Actual: app_msg.csettingKeyIs, Expected: 'settingKey is: '},
  {Name: 'csettingValueIs', Actual: app_msg.csettingValueIs, Expected: 'settingValue is: '},
  {Name: 'crefactoredAppConfigIs', Actual: app_msg.crefactoredAppConfigIs, Expected: 'refactoredAppConfig is: '},
  {Name: 'cappConfigIs', Actual: app_msg.cappConfigIs, Expected: 'appConfig is: '},

  {Name: 'cErrorSetBoilerPlateTestPathAndFileNameMessage', Actual: app_msg.cErrorSetBoilerPlateTestPathAndFileNameMessage, Expected: 'ERROR: Please enter a valid path and filename as input.'},
  {Name: 'cErrorSetRootTestFolderPathMessage', Actual: app_msg.cErrorSetRootTestFolderPathMessage, Expected: 'ERROR: Please enter a valid path as input.'},
  {Name: 'cErrorSetDefaultTestBehaviorMessage', Actual: app_msg.cErrorSetDefaultTestBehaviorMessage, Expected: 'ERROR: Please enter a valid input, true or false.'},
  {Name: 'cErrorSetBrowserListMessage', Actual: app_msg.cErrorSetBrowserListMessage, Expected: 'ERROR: Please enter a valid list of browser names to execute with.'}
];