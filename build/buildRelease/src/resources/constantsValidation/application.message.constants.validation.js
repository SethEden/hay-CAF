/**
 * @file application.message.constants.validation.js
 * @module application.message.constants.validation
 * @description Contains all validations for named application message constants.
 * @requires module:application.message.constants
 * @author Seth Hollingsead
 * @date 2022/04/05
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_msg from '../../constants/application.message.constants.js';

/**
 * @function applicationMessageConstantsValidation
 * @description Initializes the application message constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/04/05
 */
export const applicationMessageConstantsValidation = [
  // Client String Parsing
  {Name: 'cclientStringParsingDotCustomEcho', Actual: app_msg.cclientStringParsingDotCustomEcho, Expected: 'clientStringParsing.customEcho'},

  // Messages
  {Name: 'cBuildMessage1', Actual: app_msg.cBuildMessage1, Expected: 'Deployment was completed: '},
  {Name: 'csourcePathIs', Actual: app_msg.csourcePathIs, Expected: 'sourcePath is: '},
  {Name: 'cdestinationPathIs', Actual: app_msg.cdestinationPathIs, Expected: 'destinationPath is: '},
  {Name: 'cDeploymentWasCompleted', Actual: app_msg.cDeploymentWasCompleted, Expected: 'Deployment was completed: '},
  {Name: 'cDeploymentFailed', Actual: app_msg.cDeploymentFailed, Expected: 'Deployment failed'},
  // ERROR: Release failed because of a failure in the constants validation system. Please fix ASAP before attempting another deployment.
  {Name: 'cdeployApplicationMessage1a', Actual: app_msg.cdeployApplicationMessage1a, Expected: 'ERROR: Release failed because of a failure in the constants validation system. '},
  {Name: 'cdeployApplicationMessage2a', Actual: app_msg.cdeployApplicationMessage2a, Expected: 'Please fix ASAP before attempting another deployment.'},
  // ERROR: Release failed because of a failure in the commands alias validation system. Please fix ASAP before attempting another deployment.
  {Name: 'cdeployApplicationMessage1b', Actual: app_msg.cdeployApplicationMessage1b, Expected: 'ERROR: Release failed because of a failure in the commands alias validation system. '},
  {Name: 'cReleasingFramework', Actual: app_msg.cReleasingFramework, Expected: 'Releasing Framework:'},
  {Name: 'cResolvingAppPath', Actual: app_msg.cResolvingAppPath, Expected: 'Resolving application path'},
  {Name: 'cbuildReleaseRootPathIs', Actual: app_msg.cbuildReleaseRootPathIs, Expected: 'buildReleaseRootPath is: '},
  {Name: 'cbuildReleaseRootPathArrayIs', Actual: app_msg.cbuildReleaseRootPathArrayIs, Expected: 'buildReleaseRootPathArray is: '},
  {Name: 'cappRootPathIs', Actual: app_msg.cappRootPathIs, Expected: 'appRootPath is: '},
  {Name: 'cappResourcesRootPathIs', Actual: app_msg.cappResourcesRootPathIs, Expected: 'appResourcesRootPath is: '},
  {Name: 'capplicationMetaDataPathAndFilenameIs', Actual: app_msg.capplicationMetaDataPathAndFilenameIs, Expected: 'applicationMetaDataPathAndFilename is: '},
  {Name: 'coriginalSourceIs', Actual: app_msg.coriginalSourceIs, Expected: 'originalSource is: '},
  {Name: 'coriginalDestinationIs', Actual: app_msg.coriginalDestinationIs, Expected: 'originalDestination is: '},
  {Name: 'cfullReleasePathIs', Actual: app_msg.cfullReleasePathIs, Expected: 'fullReleasePath is: '},

  // Constants Validation
  {Name: 'callClientConstantsValidationDataIs', Actual: app_msg.callClientConstantsValidationDataIs, Expected: 'allClientConstantsValidationData is: '},
  {Name: 'cresolvedConstantsPath_ApplicationBusinessIs', Actual: app_msg.cresolvedConstantsPath_ApplicationBusinessIs, Expected: 'resolvedConstantsPath_ApplicationBusiness is: '},
  {Name: 'cresolvedConstantsPath_ApplicationCommandIs', Actual: app_msg.cresolvedConstantsPath_ApplicationCommandIs, Expected: 'resolvedConstantsPath_ApplicationCommand is: '},
  {Name: 'cresolvedConstantsPath_ApplicationConfigurationIs', Actual: app_msg.cresolvedConstantsPath_ApplicationConfigurationIs, Expected: 'resolvedConstantsPath_ApplicationConfiguration is: '},
  {Name: 'cresolvedConstantsPath_ApplicationConstantsIs', Actual: app_msg.cresolvedConstantsPath_ApplicationConstantsIs, Expected: 'resolvedConstantsPath_ApplicationConstants is: '},
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
];
