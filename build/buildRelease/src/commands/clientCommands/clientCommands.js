/**
 * @file clientCommands.js
 * @module clientCommands
 * @description Contains all client defined  commands for execution client actions with various operations.
 * @requires module:application.business.constants
 * @requires module:application.configuration.constants
 * @requires module:application.constants
 * @requires module:application.message.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/figlet|figlet}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/03/13
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_biz from '../../constants/application.business.constants.js';
import * as app_cfg from '../../constants/application.configuration.constants.js';
import * as apc from '../../constants/application.constants.js';
import * as app_msg from '../../constants/application.message.constants.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import figlet from 'figlet';
import path from 'path';

const {bas, biz, cfg, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// buildRelease.commands.clientCommands.clientCommands.
const namespacePrefix = apc.cApplicationName + bas.cDot + wrd.ccommands + bas.cDot + wrd.cclient + wrd.cCommands + bas.cDot + baseFileName + bas.cDot;

/**
 * @function customEchoCommand
 * @description A quick command to validate that the new
 * dynamic data storage technique for client commands is working.
 * @param {string} inputData The string input data.
 * @param {string} inputMetaData The string of input meta-data.
 * @return {string} An echo of the input Data with some hard-coded modifier.
 * @author Seth Hollingsead
 * @date 2022/03/13
 */
async function customEchoCommand(inputData, inputMetaData) {
  let functionName = customEchoCommand.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [false, false];
  returnData[1] = inputData + app_msg.cclientStringParsingDotCustomEcho;
  console.log(returnData[1]);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function resolveAppPath
 * @description Resolves the app path, based on the root path of the build-release app path.
 * @param {array<string>} inputData An array of strings that contain the name of the command being executed,
 * and the root path for the build-release application.
 * inputData[0] = 'resolveAppPath' - The name of this command.
 * inputData[1] = 'C:/HaystacksTT/build/buildRelease/' - The path for the build release application.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean|boolean>}
 * @author Seth Hollingsead
 * @date 2023/03/16
 */
async function resolveAppPath(inputData, inputMetaData) {
  let functionName = resolveAppPath.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  let buildReleaseRootPathArray = [];
  let pathSeparator = '';
  if (inputData && Array.isArray(inputData) && inputData.length === 2) {
    let buildReleaseRootPath = inputData[1];
    // buildReleaseRootPath is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cbuildReleaseRootPathIs + buildReleaseRootPath);
    if (buildReleaseRootPath.includes(bas.cForwardSlash)) {
      pathSeparator = bas.cForwardSlash;
      buildReleaseRootPathArray = buildReleaseRootPath.split(bas.cForwardSlash);
    } else if (buildReleaseRootPath.includes(bas.cBackSlash)) {
      pathSeparator = bas.cBackSlash;
      buildReleaseRootPathArray = buildReleaseRootPath.split(bas.cBackSlash);
    }
    
    // buildReleaseRootPathArray is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cbuildReleaseRootPathArrayIs + JSON.stringify(buildReleaseRootPathArray));
    await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cpathSeparator, pathSeparator);
    buildReleaseRootPathArray.pop();
    buildReleaseRootPathArray.pop();
    let appRootPath = buildReleaseRootPathArray.join(pathSeparator);
    // appRootPath is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cappRootPathIs + appRootPath);
    await haystacks.setConfigurationSetting(wrd.csystem, cfg.cappRootPath, appRootPath);
    returnData[1] = appRootPath;
  } // End-if (inputData && Array.isArray(inputData) && inputData.length === 2)
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function rectifyAppMetaData
 * @description Works out the details of the application meta-data, path and loading of the file, parsing,
 * processing and printing of info to the console log.
 * @param {string} inputData Not used for this command.
 * @param {string} inputMetaData Not used for this command.
 * @return {array<boolean,string|integer|boolean|object|array>} An array with a boolean True or False value to
 * indicate if the application should exit or not exit, followed by the command output.
 */
async function rectifyAppMetaData(inputData, inputMetaData) {
  let functionName = rectifyAppMetaData.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  // apc.cFullDevResourcesPath
  let appRootPath = await haystacks.getConfigurationSetting(wrd.csystem, cfg.cappRootPath);
  // appRootPath is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cappRootPathIs + appRootPath);
  let appResourcesRootPath = appRootPath + apc.cFullDevResourcesPath;
  // appResourcesRootPath is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cappResourcesRootPathIs + appResourcesRootPath);
  await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cappResourcesRootPath, appResourcesRootPath)
  await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.csourcePath, apc.cAppDevPath);
  await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cdestinationPath, apc.cAppProdPath);
  await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.csourceResourcesPath, apc.cAppDevPath + apc.cResourcesCommonPath);
  await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cdestinationResourcesPath, apc.cAppProdPath + apc.cResourcesCommonPath);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function deployMetaData
 * @description Copies application meta-data from the source to the destination.
 * @param {object} inputData The data that should be transferred to the output file & path.
 * @param {string} inputMetaData The path the data should be written out to.
 * @return {boolean} A True or False value to indicate if the data was copied successfully or not.
 * @author Seth Hollingsead
 * @date 2022/03/14 Happy Pi day!! 3.141562653589793238462643383279502884197169399
 */
async function deployMetaData(inputData, inputMetaData) {
  let functionName = deployMetaData.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];

  // inputData.shift(); // Remove the first element of the array, because that is what is used to call this command.
  // @Reference: {@Link https://stackoverflow.com/questions/9153571/is-there-a-way-to-get-version-from-package-json-in-nodejs-code}
  let applicationMetaDataPathAndFilename = await haystacks.getConfigurationSetting(wrd.csystem, cfg.cappRootPath);
  applicationMetaDataPathAndFilename = applicationMetaDataPathAndFilename + bas.cForwardSlash + sys.cpackageDotJson;
  applicationMetaDataPathAndFilename = path.resolve(applicationMetaDataPathAndFilename);
  // applicationMetaDataPathAndFilename is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMetaDataPathAndFilenameIs + applicationMetaDataPathAndFilename);
  let applicationMetaData = await haystacks.executeBusinessRules([applicationMetaDataPathAndFilename, false], [biz.cloadDataFile]);
  let applicationName = applicationMetaData[wrd.cname];
  let applicationVersion = applicationMetaData[wrd.cversion];
  let applicationDescription = applicationMetaData[wrd.cdescription];
  let metaDataOutput = {};
  let figletFont = '';
  figletFont = await haystacks.getConfigurationSetting(wrd.csystem, cfg.cfigletFont);
  console.log(figlet.textSync(applicationName, {font: figletFont, horizontalLayout: wrd.cfull}))
  console.log(msg.ccurrentVersionIs + applicationVersion);
  console.log(msg.cApplicationDescriptionIs + applicationDescription);
  metaDataOutput = {
    Name: applicationName,
    Version: applicationVersion,
    Description: applicationDescription
  }

  // Update all these generic fields that come from the metaData.json file.
  await haystacks.setConfigurationSetting(wrd.csystem, sys.cFrameworkVersionNumber, applicationVersion);
  await haystacks.setConfigurationSetting(wrd.csystem, sys.cFrameworkName, applicationName);
  await haystacks.setConfigurationSetting(wrd.csystem, sys.cFrameworkDescription, applicationDescription);

  let metaDataPathAndFilename = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cappResourcesRootPath);
  metaDataPathAndFilename = path.resolve(metaDataPathAndFilename + sys.cmetaDatadotJson);
  // metaDataPathAndFilename is:
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cmetaDataPathAndFilenameIs + metaDataPathAndFilename);
  // metaDataOutput is:
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cmetaDataOutputIs + JSON.stringify(metaDataOutput));
  returnData[1] = await haystacks.executeBusinessRules([metaDataPathAndFilename, metaDataOutput], [biz.csaveDataFile]);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function deployApplication
 * @description Executes the deployment of the application, part of the build-deploy-release cycle.
 * This command copies the non-source code files from the src folder structure to the bin folder structure.
 * @param {string} inputData The path the non-code files should be copied from. (SOURCE)
 * @param {string} inputMetaData The path the non-code files should be copied to. (DESTINATION)
 * @return {boolean} a True or False value to indicate if the deployment was successful or not.
 * @author Seth Hollingsead
 * @date 2022/04/05
 */
async function deployApplication(inputData, inputMetaData) {
  let functionName = deployApplication.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  let passAllConstantsValidation = await haystacks.getConfigurationSetting(wrd.csystem, cfg.cpassAllConstantsValidation);
  let passAllCommandAliasesDuplicateChecks = await haystacks.getConfigurationSetting(wrd.csystem, cfg.cpassedAllCommandAliasesDuplicateChecks);
  let passAllWorkflowDuplicateChecks = await haystacks.getConfigurationSetting(wrd.csystem, cfg.cpassedAllWorkflowDuplicateChecks);

  if (passAllConstantsValidation === true && passAllCommandAliasesDuplicateChecks === true && passAllWorkflowDuplicateChecks === true) {
    // DEPLOY APPLICATION
    console.log(msg.cDEPLOY_APPLICATION);
    let appRootPath = await haystacks.getConfigurationSetting(wrd.csystem, cfg.cappRootPath);
    // appRootPath is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cappRootPathIs + appRootPath);
    let sourcePath = appRootPath + await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.csourcePath);
    let destinationPath = appRootPath + await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cdestinationPath);
    // sourcePath is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.csourcePathIs + sourcePath);
    // destinationPath is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cdestinationPathIs + destinationPath);
    let deploymentStatus = await haystacks.executeBusinessRules([[sourcePath, destinationPath], []], [biz.ccopyAllFilesAndFoldersFromFolderToFolder]);
    if (deploymentStatus === true) {
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cDeploymentWasCompleted + true);
      await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cdeploymentCompleted, true);
      returnData[1] = true;
    } else {
      await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cDeploymentFailed);
    }
  } else {
    if (passAllConstantsValidation === false) {
      // ERROR: Release failed because of a failure in the constants validation system. Please fix ASAP before attempting another deployment.
      console.log(app_msg.cdeployApplicationMessage1a + app_msg.cdeployApplicationMessage2a);
    } // End-if (passAllConstantsValidation === false)
    if (passAllCommandAliasesDuplicateChecks === false) {
      // ERROR: Release failed because of a failure in the commands alias validation system. Please fix ASAP before attempting another deployment.
      console.log(app_msg.cdeployApplicationMessage1b + app_msg.cdeployApplicationMessage2a);
    } // End-if (passAllCommandAliasesDuplicateChecks === false)
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

/**
 * @function releaseApplication
 * @description Executes teh release of the application, part of the build-deploy-release cycle.
 * Scans the specified release folder path and determines if there is a zip file for the current release or not.
 * If there is not, then the system will build a zip file from the bin folder excluding the release folder,
 * and save the resulting archie to the release folder.
 * @param {string} inputData The path or the bin folder where the latest source code will have been deployed. (SOURCE)
 * @param {string} inputMetaData The path for the release folder where the release zip archive file should be saved. (RELEASE)
 * @return {boolean} A True or False value to indicate if the zip archive was created successfully or not.
 * @author Seth Hollingsead
 * @date 2022/04/07
 */
async function releaseApplication(inputData, inputMetaData) {
  let functionName = releaseApplication.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputDataIs + JSON.stringify(inputData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cinputMetaDataIs + inputMetaData);
  let returnData = [true, false];
  let errorMessage = '';
  let passAllConstantsValidation = await haystacks.getConfigurationSetting(wrd.csystem, cfg.cpassAllConstantsValidation);
  let passAllCommandAliasesDuplicateChecks = await haystacks.getConfigurationSetting(wrd.csystem, cfg.cpassedAllCommandAliasesDuplicateChecks);
  let passAllWorkflowDuplicateChecks = await haystacks.getConfigurationSetting(wrd.csystem, cfg.cpassedAllWorkflowDuplicateChecks);
  if (passAllConstantsValidation === true && passAllCommandAliasesDuplicateChecks === true && passAllWorkflowDuplicateChecks === true) {
    // RELEASE APPLICATION
    console.log(msg.cRELEASE_APPLICATION);
    let appRootPath = await haystacks.getConfigurationSetting(wrd.csystem, cfg.cappRootPath)
    // appRootPath is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cappRootPathIs + appRootPath);
    // NOTE: The destinationResourcesPath works out to be the root/bin of the framework, for this next operation that will be our source path.
    // These source and destination paths are for the bin and release folder paths, used by the zip package to package the release.
    let sourcePath = appRootPath + await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cdestinationPath);
    let destinationPath = appRootPath + apc.cReleasePath;

    // sourcePath is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.csourcePathIs + sourcePath);
    // destinationPath is:
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cdestinationPathIs + destinationPath);
    returnData[1] = await haystacks.executeBusinessRules([sourcePath, destinationPath], [app_biz.cbuildReleasePackage]);
  } else {
    // Technically it should never even get here, because this same condition is caught at the deployApplication command.
    // The deployApplication command should be executing before this command.
    if (passAllConstantsValidation === false) {
      // ERROR: Release failed because of a failure in the constants validation system. Please fix ASAP before attempting another deployment.
      errorMessage = app_msg.cdeployApplicationMessage1a + app_msg.cdeployApplicationMessage2a;
      console.log(errorMessage);
      returnData[1] = errorMessage;
    } // End-if (passAllConstantsValidation === false)
    if (passAllCommandAliasesDuplicateChecks === false) {
      // ERROR: Release failed because of a failure in the commands alias validation system. Please fix ASAP before attempting another deployment.
      errorMessage = app_msg.cdeployApplicationMessage1b + app_msg.cdeployApplicationMessage2a;
      console.log(errorMessage);
      returnData[1] = errorMessage;
    } // End-if (passAllCommandAliasesDuplicateChecks === false)
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.creturnDataIs + JSON.stringify(returnData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return returnData;
}

export default {
  customEchoCommand,
  resolveAppPath,
  rectifyAppMetaData,
  deployMetaData,
  deployApplication,
  releaseApplication
};
