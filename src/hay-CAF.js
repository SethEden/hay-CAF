#!/usr/bin/env node
/* eslint-disable no-undef */

/**
 * @file hay-CAF.js
 * @module hay-CAF
 * @description This is the main nit for the hay-CAF Haystacks Cloud Automation Framework application.
 * It contains just enough of the main program loop and basic argument parsing to function as an
 * interactive enterprise testing automation execution framework. Based and build using the Haystacks platform.
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/url|url}
 * @requires {@link https://www.npmjs.com/package/dotenv|dotenv}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/03/29
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import testRules from './businessRules/clientRulesLibrary.js';
import testCommands from './commands/clientCommandsLibrary.js';
import * as app_cmd from './constants/application.command.constants.js';
import * as app_cfg from './constants/application.configuration.constants.js';
import * as apc from './constants/application.constants.js';
import * as app_msg from './constants/application.message.constants.js';
import * as app_sys from './constants/application.system.constants.js';
import allAppCV from './resources/constantsValidation/allApplicationConstantsValidationMetadata.js';
// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import url from 'url';
import dotenv from 'dotenv';
import path from 'path';

const {bas, cmd, cfg, msg, sys, wrd, biz} = hayConst;
let rootPath = '';
let baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// application.hay-CAF
let namespacePrefix = wrd.capplication + bas.cDot + baseFileName + bas.cDot;
// eslint-disable-next-line no-undef
global.appRoot = path.resolve(process.cwd());
dotenv.config();
// eslint-disable-next-line no-undef
const {NODE_ENV} = process.env;
let exitConditionArrayIndex = 0;

/**
 * @function bootStrapApplication
 * @description Setup all the run-time dependencies, execution environment, data, and configuration settings.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2023/03/30
 */
async function bootStrapApplication() {
  // let functionName = bootStrapApplication.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  rootPath = url.fileURLToPath(path.dirname(import.meta.url));
  let rootPathArray = [];
  let pathSeparator = '';
  if (rootPath.includes(bas.cBackSlash) === true) {
    pathSeparator = bas.cBackSlash;
  } else if (rootPath.includes(bas.cForwardSlash) === true) {
    pathSeparator = bas.cForwardSlash;
  }
  rootPathArray = rootPath.split(pathSeparator);
  rootPathArray.pop(); // Remove any bin or src folder from the path.
  rootPath = rootPathArray.join(pathSeparator);
  let appConfig = {};
  if (NODE_ENV === wrd.cdevelopment) {
    appConfig = {
      FrameworkName: apc.cExpectedActualFrameworkDevName,
      clientRootPath: rootPath,
      appConfigResources: rootPath + apc.cFullDevResourcesPath,
      appConfigReferencePath: rootPath + apc.cFullDevConfigurationPath,
      clientMetaDataPath: apc.cmetaDataDevPath,
      clientCommandAliasesPath: rootPath + apc.cFullDevCommandsPath,
      clientConstantsPath: rootPath + apc.cFullDevConstantsPath,
      clientRegisteredPlugins: rootPath + apc.cFullDevPluginsRegistryPath,
      clientWorkflowsPath: rootPath + apc.cFullDevWorkflowsPath,
      clientThemesPath: rootPath + apc.cFullDevThemesPath,
      applicationConstantsValidationData: allAppCV.initializeAllClientConstantsValidationData,
      clientBusinessRules: {},
      clientCommands: {}
    }
  } else if (NODE_ENV === wrd.cproduction) {
    appConfig = {
      FrameworkName: apc.cExpectedActualFrameworkProdName,
      clientRootPath: rootPath,
      appConfigResources: rootPath + apc.cFullProdResourcesPath,
      appConfigReferencePath: rootPath + apc.cFullProdConfigurationPath,
      clientMetaDataPath: apc.cmetaDataDevPath,
      clientCommandAliasesPath: rootPath + apc.cFullProdCommandsPath,
      clientConstantsPath: rootPath + apc.cFullProdConstantsPath,
      clientRegisteredPlugins: rootPath + apc.cFullProdPluginsRegistryPath,
      clientWorkflowsPath: rootPath + apc.cFullProdWorkflowsPath,
      clientThemesPath: rootPath + apc.cFullProdThemesPath,
      applicationConstantsValidationData: allAppCV.initializeAllClientConstantsValidationData,
      clientBusinessRules: {},
      clientCommands: {}
    };
  } else {
    // WARNING: No .env file found! Going to default to the DEVELOPMENT ENVIRONMENT!
    console.log(msg.cApplicationWarningMessage1a + msg.cApplicationWarningMessage1b);
    appConfig = {
      FrameworkName: apc.cExpectedActualFrameworkDevName,
      clientRootPath: rootPath,
      appConfigResources: rootPath + apc.cFullDevResourcesPath,
      appConfigReferencePath: rootPath + apc.cFullDevConfigurationPath,
      clientMetaDataPath: apc.cmetaDataDevPath,
      clientCommandAliasesPath: rootPath + apc.cFullDevCommandsPath,
      clientConstantsPath: rootPath + apc.cFullDevConstantsPath,
      clientRegisteredPlugins: rootPath + apc.cFullDevPluginsRegistryPath,
      clientWorkflowsPath: rootPath + apc.cFullDevWorkflowsPath,
      clientThemesPath: rootPath + apc.cFullDevThemesPath,
      applicationConstantsValidationData: allAppCV.initializeAllClientConstantsValidationData,
      clientBusinessRules: {},
      clientCommands: {}
    };
  }
  appConfig[sys.cclientBusinessRules] = await testRules.initApplicationRulesLibrary();
  appConfig[sys.cclientCommands] = await testCommands.initApplicationCommandsLibrary();
  // console.log('appConfig is: ', appConfig);
  await haystacks.initFramework(appConfig);
  // console.log(`END ${namespacePrefix}${functionName} function`);
}

/**
 * @function application
 * @description This is the main program loop, the init for the hay-CAF application.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2023/03/30
 */
async function application() {
  let functionName = application.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let argumentDrivenInterface = false;
  let commandInput;
  let commandResult;

  argumentDrivenInterface = await haystacks.getConfigurationSetting(wrd.csystem, app_cfg.cargumentDrivenInterface);
  if (argumentDrivenInterface === undefined) {
    argumentDrivenInterface = false;
  }
  // Set this to an empty string at first.
  console.log('setting the configuration setting: system.testScriptFileName to an empty string.');
  await haystacks.setConfigurationSetting(wrd.csystem, 'testScriptFileName', '');
  // argumentDrivenInterface is:
  // await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cargumentDrivenInterfaceIs + argumentDrivenInterface);
  await haystacks.enqueueCommand(app_cmd.cApplicationStartupWorkflow);

  // NOTE: We are processing the argument driven interface first that way even if we are not in an argument driven interface,
  // arguments can still be passed in and they will be executed first, after the startup workflow is complete.
  //
  // We need to strip off any preceding "--" before we try to process it as an actual command.
  // Also need to make sure that the command to execute actually contains the "--" or "/" or "\" or "-".
  let commandToExecute = '';
  // Make sure we execute any and all commands so the command queue is empty before
  // we process the command args and add more commands to the command queue.
  // Really this is about getting out the application name, version and about message.
  while (await haystacks.isCommandQueueEmpty() === false) {
    commandResult = await haystacks.processCommandQueue();
  } // End-while (haystacks.isCommandQueueEmpty() === false)

  // NOW process the command args and add them to the command queue for execution.
  if (Array.isArray(process.argv) && process.argv.length > 2) {
    // Caught the case that some arguments were passed in as input to the function.
    console.log(app_msg.capplicationMessage00);
    if (process.argv[2].includes(bas.cDash) === true ||
    process.argv[2].includes(bas.cForwardSlash) === true ||
    process.argv[2].includes(bas.cBackSlash) === true) {
      commandToExecute = await haystacks.executeBusinessRules([process.argv, ''], [biz.caggregateCommandArguments]);
    } else {
      commandToExecute = await haystacks.executeBusinessRules([process.argv, ''], [biz.caggregateCommandArguments]);
    }
    if (commandToExecute !== '') {
      console.log(msg.ccommandToExecuteIs + commandToExecute);
      await haystacks.enqueueCommand(commandToExecute);
    }
    while (await haystacks.isCommandQueueEmpty() === false) {
      commandResult = await haystacks.processCommandQueue();
    } // End-while (haystacks.isCommandQueueEmpty() === false)
  } // End-if (!process.argv && process.argv.length > 0)

  // NOW the application can continue with the interactive interface fi the flag was set to false.
  if (argumentDrivenInterface === false) {
    // BEGIN main program loop
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage01);

    // BEGIN command parser
    await haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage02);
    while(programRunning === true) {
      let testScriptFileName = '';
      let fileDeleted = false;
      if (await haystacks.isCommandQueueEmpty() === true) {
        // biz.cprompt is some how undefined here, although other biz.c<something-else> do still work.
        // We will use wrd.cprompt here because it is working. No idea what the issue is with biz.prompt.
        commandInput = await haystacks.executeBusinessRules([bas.cGreaterThan, ''], [wrd.cprompt]);
        await haystacks.enqueueCommand(commandInput);
      } // End-if (haystacks.isCommandQueueEmpty() === true)
      commandResult = await haystacks.processCommandQueue();

      // Cleanup any script files from the last command run.
      testScriptFileName = await haystacks.getConfigurationSetting(wrd.csystem, 'testScriptFileName');
      // testScriptFileName is:
      console.log('main.testScriptfileName 2 is: ' + testScriptFileName);
      if (testScriptFileName !== '') {
        let applicationRootPath = await haystacks.getConfigurationSetting(wrd.csystem, cfg.cclientRootPath);
        // applicationRootPath is:
        console.log('main.applicationRootPath 2 is: ' + applicationRootPath);
        // TODO Make sure to apply additional logic for file name and path to make sure it's fully qualifed
        fileDeleted = await haystacks.executeBusinessRules([testScriptFileName, ''], [biz.cdeleteFile]);
        if (fileDeleted === true) {
          await haystacks.setConfigurationSetting(wrd.csystem, 'testScriptFileName', '');
        }
      }

      if (commandResult[exitConditionArrayIndex] === false) {
        // END command parser
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage03);
        programRunning = false;
        // END main program loop
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage04);
        // Exiting TEST HARNESS APPLICATION
        await haystacks.consoleLog(namespacePrefix, functionName, app_msg.capplicationMessage05);
        break;
      } // End-if (commandResult[exitConditionArrayIndex] === false)
    } // End-while (programRunning === true)
  } // End-if (argumentDrivenInterface === false)
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
}

// Launch the application!
let programRunning = false;
await bootStrapApplication();
programRunning = true;
await application();
process.exit();
