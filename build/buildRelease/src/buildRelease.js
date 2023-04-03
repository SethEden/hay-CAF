#!/usr/bin/env node

/**
 * @file buildRelease.js
 * @module buildRelease
 * @description This is the main init for the buildRelease application.
 * It contains everything to build and deploy the entire npm package.
 * @requires module:clientRules
 * @requires module:clientCommands
 * @requires module:application.command.constants
 * @requires module:application.configuration.constants
 * @requires module:application.constants
 * @requires module:application.function.constants
 * @requires module:application.message.constants
 * @requires module:allApplicationConstantsValidationMetadata
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/url|url}
 * @requires {@link https://www.npmjs.com/package/dotenv|dotenv}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/03/12
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import clientRules from './businessRules/clientRulesLibrary.js';
import clientCommands from './commands/clientCommandsLibrary.js';
import * as app_cmd from './constants/application.command.constants.js';
import * as app_cfg from './constants/application.configuration.constants.js';
import * as apc from './constants/application.constants.js';
import * as app_msg from './constants/application.message.constants.js';
import allAppCV from './resources/constantsValidation/allApplicationConstantsValidationMetadata.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import url from 'url';
import dotenv from 'dotenv';
import path from 'path';

const {bas, cmd, cfg, gen, msg, sys, wrd} = hayConst;
let rootPath = '';
let baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// buildRelease.
let namespacePrefix = baseFileName + bas.cDot;
// eslint-disable-next-line no-undef
global.appRoot = path.resolve(process.cwd());
dotenv.config();
// eslint-disable-next-line no-undef
const {NODE_ENV} = process.env;

/**
 * @function bootStrapApplication
 * @description Setup all the buildRelease application data and configuration settings.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/13
 */
async function bootStrapApplication() {
  // let functionName = bootStrapApplication.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  rootPath = url.fileURLToPath(path.dirname(import.meta.url));
  let rootPathArray = rootPath.split(bas.cBackSlash);
  rootPathArray.pop(); // remove any bin or src folder from the path.
  rootPath = rootPathArray.join(bas.cBackSlash);
  let appConfig = {};
  if (NODE_ENV === wrd.cdevelopment) {
    appConfig = {
      FrameworkName: apc.cExpectedActualFrameworkDevName,
      clientRootPath: rootPath,
      appConfigResourcesPath: rootPath + apc.cFullDevResourcesPath,
      appConfigReferencePath: rootPath + apc.cFullDevConfigurationPath,
      clientMetaDataPath: apc.cmetaDataDevPath,
      clientCommandAliasesPath: rootPath + apc.cFullDevCommandsPath,
      clientConstantsPath: rootPath + apc.cFullDevConstantsPath,
      clientWorkflowsPath: rootPath + apc.cFullDevWorkflowsPath,
      applicationConstantsValidationData: await allAppCV.initializeAllClientConstantsValidationData,
      clientBusinessRules: {},
      clientCommands: {}
    };
  } else if (NODE_ENV === wrd.cproduction) {
    appConfig = {
      FrameworkName: apc.cExpectedActualFrameworkProdName,
      clientRootPath: rootPath,
      appConfigResourcesPath: rootPath + apc.cFullProdResourcesPath,
      appConfigReferencePath: rootPath + apc.cFullProdConfigurationPath,
      clientMetaDataPath: apc.cmetaDataProdPath,
      clientCommandAliasesPath: rootPath + apc.cFullProdCommandsPath,
      clientConstantsPath: rootPath + apc.cFullProdConstantsPath,
      clientWorkflowsPath: rootPath + apc.cFullProdWorkflowsPath,
      applicationConstantsValidationData: await allAppCV.initializeAllClientConstantsValidationData,
      clientBusinessRules: {},
      clientCommands: {}
    };
  } else {
    // WARNING: NO .env file found! Going to default to the DEVELOPMENT ENVIRONMENT!
    console.log(msg.cApplicationWarningMessage1a + msg.cApplicationWarningMessage1b);
    appConfig = {
      FrameworkName: apc.cExpectedActualFrameworkDevName,
      clientRootPath: rootPath,
      appConfigResourcesPath: rootPath + apc.cFullDevResourcesPath,
      appConfigReferencePath: rootPath + apc.cFullDevConfigurationPath,
      clientMetaDataPath: apc.cmetaDataDevPath,
      clientCommandAliasesPath: rootPath + apc.cFullDevCommandsPath,
      clientConstantsPath: rootPath + apc.cFullDevConstantsPath,
      clientWorkflowsPath: rootPath + apc.cFullDevWorkflowsPath,
      applicationConstantsValidationData: await allAppCV.initializeAllClientConstantsValidationData,
      clientBusinessRules: {},
      clientCommands: {}
    };
  }
  appConfig[sys.cclientBusinessRules] = await clientRules.initClientRulesLibrary();
  appConfig[sys.cclientCommands] = await clientCommands.initClientCommandsLibrary();
  await haystacks.initFramework(appConfig);
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function deployApplication
 * @description This is the main function to deploy the application.
 * The function copies all non-code files from the src/application/<myAppName>/resources/ folder to the
 * bin/<myAppName>/resources/ folder.
 * Finally all the transpiled code and non-code files are packaged together into a zip file,
 * with the date-time stamp and version number. This forms either a patch or a release.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/13
 */
async function deployApplication() {
  let functionName = deployApplication.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  try {
    let deploymentResult = [];
    // fse.copySync('/src/*', '/bin/*');
    await haystacks.setConfigurationSetting(wrd.csystem, cfg.creleaseCompleted, false);
    await haystacks.setConfigurationSetting(wrd.csystem, cfg.cpassAllConstantsValidation, false);
    await haystacks.setConfigurationSetting(wrd.csystem, cfg.cpassedAllCommandAliasesDuplicateChecks, false);
    let applicationRootPath = await haystacks.getConfigurationSetting(wrd.csystem, cfg.cclientRootPath);

    await haystacks.enqueueCommand(cmd.cStartupWorkflow);
    while (await haystacks.isCommandQueueEmpty() === false) {
      await haystacks.processCommandQueue();
    } // End-while (haystacks.isCommandQueueEmpty() === false)

    // 2nd stage deploy-release process:
    console.log(app_msg.cReleasingFramework);
    console.log(app_msg.cResolvingAppPath)
    await haystacks.enqueueCommand(app_cmd.cresolveAppPath + bas.cSpace + applicationRootPath);
    while (await haystacks.isCommandQueueEmpty() === false) {
      await haystacks.processCommandQueue();
    } // End-while (await haystacks.isCommandQueueEmpty() === false)

    // 3rd stage deploy-release process:
    await haystacks.enqueueCommand(app_cmd.crectifyAppMetaData);
    await haystacks.enqueueCommand(app_cmd.cdeployMetaData);
    while (await haystacks.isCommandQueueEmpty() === false) {
      await haystacks.processCommandQueue();
    } // End-while (haystacks.isCommandQueueEmpty() === false)

    // NOTE: Enable these lines of code to force the test-pass condition and
    // edit the build workflow to remove the testing when debugging this system.
    // await haystacks.setConfigurationSetting(wrd.csystem, cfg.cpassAllConstantsValidation, true);
    // await haystacks.setConfigurationSetting(wrd.csystem, cfg.cpassedAllCommandAliasesDuplicateChecks, true);
    // await haystacks.setConfigurationSetting(wrd.csystem, cfg.cpassedAllWorkflowDuplicateChecks, true);

    // 4th stage deploy-release process:
    await haystacks.enqueueCommand(app_cmd.cBuildWorkflow);
    while (await haystacks.isCommandQueueEmpty() === false) {
      deploymentResult = await haystacks.processCommandQueue();
    } // End-while (haystacks.isCommandQueueEmpty() === false)

    // Deployment verification
    // It seems there is an issue with some kind of asynchronous race condition with how the copy file operations are being processed.
    // I believe this value is getting set after execution has already moved on even though we are using the await statement.
    // Anyway checking the return from the call to processCommandQueue above seems to be working fine.
    // let deploymentResult = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cdeploymentCompleted);
    if (deploymentResult[1] === true) {
      // Deployment was completed:
      console.log(app_msg.cBuildMessage1 + deploymentResult[1]);
    } else {
      console.log(app_msg.cBuildMessage1 + gen.cFalse);
      await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cdeploymentCompleted, false);
    }
  } catch (err) {
    console.error(err);
    // deploymentCompleted
    await haystacks.setConfigurationSetting(wrd.csystem, app_cfg.cdeploymentCompleted, false);
  }
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
}

await bootStrapApplication();
await deployApplication();
