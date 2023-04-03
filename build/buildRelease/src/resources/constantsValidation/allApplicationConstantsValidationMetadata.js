/**
 * @file allApplicationConstantsValidationMetadata.js
 * @module allApplicationConstantsValidationMetadata
 * @description Contains all validation data for all client application constants.
 * @requires module:application.constants
 * @requires module:application.message.constants
 * @requires module:application.system.constants
 * @requires module:application.business.constants.validation
 * @requires module:application.command.constants.validation
 * @requires module:application.configuration.constants.validation
 * @requires module:application.constants.validation
 * @requires module:application.message.constants.validation
 * @requires module:application.system.constants.validation
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2022/04/05
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as apc from '../../constants/application.constants.js';
import * as app_msg from '../../constants/application.message.constants.js';
import * as app_sys from '../../constants/application.system.constants.js';
import * as app_biz_cv from './application.business.constants.validation.js';
import * as app_cmd_cv from './application.command.constants.validation.js';
import * as app_cfg_cv from './application.configuration.constants.validation.js';
import * as apc_cv from './application.constants.validation.js';
import * as app_msg_cv from './application.message.constants.validation.js';
import * as app_sys_cv from './application.system.constants.validation.js';

// External imports
import haystacks from '@haystacks/async';
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, cfg, gen, msg, sys, wrd} = hayConst;
let baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// buildRelease.resources.constantsVaidation.allApplicationConstantsValidation.
let namespacePrefix = apc.cApplicationName + bas.cDot + wrd.cresources + bas.cDot + wrd.cconstants + wrd.cValidation + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initializeAllClientConstantsValidationData
 * @description Initializes all of the client constants validation data so that it can be used to validate all of the constants.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/04/05
 */
async function initializeAllClientConstantsValidationData() {
  let functionName = initializeAllClientConstantsValidationData.name;
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  let constantsPath = await haystacks.getConfigurationSetting(wrd.csystem, cfg.capplicationConstantsPath);
  // constantsPath is:
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cconstantsPathIs + constantsPath);

  let allClientConstantsValidationData = {};
  allClientConstantsValidationData[sys.cConstantsValidationData] = {};
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames] = {};
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames] = {};
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix] = {};
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths] = {};
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages] = {};
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages] = {};
  allClientConstantsValidationData[sys.cConstantsValidationData][app_sys.capplicationBusinessConstantsValidation] = [];
  allClientConstantsValidationData[sys.cConstantsValidationData][app_sys.capplicationCommandConstantsValidation] = [];
  allClientConstantsValidationData[sys.cConstantsValidationData][app_sys.capplicationConfigurationConstantsValidation] = [];
  allClientConstantsValidationData[sys.cConstantsValidationData][app_sys.capplicationConstantsValidation] = [];
  allClientConstantsValidationData[sys.cConstantsValidationData][app_sys.capplicationMessageConstantsValidation] = [];
  allClientConstantsValidationData[sys.cConstantsValidationData][app_sys.capplicationSystemConstantsValidation] = [];

  allClientConstantsValidationData[sys.cConstantsValidationData][app_sys.capplicationBusinessConstantsValidation] = app_biz_cv.applicationBusinessConstantsValidation;
  allClientConstantsValidationData[sys.cConstantsValidationData][app_sys.capplicationCommandConstantsValidation] = app_cmd_cv.applicationCommandConstantsValidation;
  allClientConstantsValidationData[sys.cConstantsValidationData][app_sys.capplicationConfigurationConstantsValidation] = app_cfg_cv.applicationConfigurationConstantsValidation;
  allClientConstantsValidationData[sys.cConstantsValidationData][app_sys.capplicationConstantsValidation] = apc_cv.applicationConstantsValidation;
  allClientConstantsValidationData[sys.cConstantsValidationData][app_sys.capplicationMessageConstantsValidation] = app_msg_cv.applicationMessageConstantsValidation;
  allClientConstantsValidationData[sys.cConstantsValidationData][app_sys.capplicationSystemConstantsValidation] = app_sys_cv.applicationSystemConstantsValidation;

  // Setup all the paths to the constants files.
  let resolvedConstantsPath_ApplicationBusiness = path.resolve(constantsPath + bas.cForwardSlash + app_sys.capplication_business_constants_js);
  let resolvedConstantsPath_ApplicationCommand = path.resolve(constantsPath + bas.cForwardSlash + app_sys.capplication_command_constants_js);
  let resolvedConstantsPath_ApplicationConfiguration = path.resolve(constantsPath + bas.cForwardSlash + app_sys.capplication_configuration_constants_js);
  let resolvedConstantsPath_ApplicationConstant = path.resolve(constantsPath + bas.cForwardSlash + app_sys.capplication_constants_js);
  let resolvedConstantsPath_ApplicationMessage = path.resolve(constantsPath + bas.cForwardSlash + app_sys.capplication_message_constants_js);
  let resolvedConstantsPath_ApplicationSystem = path.resolve(constantsPath + bas.cForwardSlash + app_sys.capplication_system_constants_js);

  // resolvedConstantsPath_ApplicationBusiness is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cresolvedConstantsPath_ApplicationBusinessIs + resolvedConstantsPath_ApplicationBusiness);
  // resolvedConstantsPath_ApplicationCommand is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cresolvedConstantsPath_ApplicationCommandIs + resolvedConstantsPath_ApplicationCommand);
  // resolvedConstantsPath_ApplicationConfiguration is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cresolvedConstantsPath_ApplicationConfigurationIs + resolvedConstantsPath_ApplicationConfiguration);
  // resolvedConstantsPath_ApplicationConstant is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cresolvedConstantsPath_ApplicationConstantIs + resolvedConstantsPath_ApplicationConstant);
  // resolvedConstantsPath_ApplicationMessage is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cresolvedConstantsPath_ApplicationMessageIs + resolvedConstantsPath_ApplicationMessage);
  // resolvedConstantsPath_ApplicationSystem is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cresolvedConstantsPath_ApplicationSystemIs + resolvedConstantsPath_ApplicationSystem);

  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][app_sys.capplicationBusinessConstantsValidation] = resolvedConstantsPath_ApplicationBusiness;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][app_sys.capplicationCommandConstantsValidation] = resolvedConstantsPath_ApplicationCommand;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][app_sys.capplicationConfigurationConstantsValidation] = resolvedConstantsPath_ApplicationConfiguration;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][app_sys.capplicationConstantsValidation] = resolvedConstantsPath_ApplicationConstant;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][app_sys.capplicationMessageConstantsValidation] = resolvedConstantsPath_ApplicationMessage;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFilePaths][app_sys.capplicationSystemConstantsValidation] = resolvedConstantsPath_ApplicationSystem;

  // Application Business Constants Phase 1 Validation
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][app_sys.capplicationBusinessConstantsValidation] = app_msg.cApplicationBusinessConstantsPhase1Validation;
  // Application Command Constants Phase 1 Validation
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][app_sys.capplicationCommandConstantsValidation] = app_msg.cApplicationCommandConstantsPhase1Validation;
  // Application Configuration Constants Phase 1 Validation
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][app_sys.capplicationConfigurationConstantsValidation] = app_msg.cApplicationConfigurationConstantsPhase1Validation;
  // Application Constants Phase 1 Validation
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][app_sys.capplicationConstantsValidation] = app_msg.cApplicationConstantsPhase1Validation;
  // Application Message Constants Phase 1 Validation
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][app_sys.capplicationMessageConstantsValidation] = app_msg.cApplicationMessageConstantsPhase1Validation;
  // Application System Constants Phase 1 Validation
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase1ValidationMessages][app_sys.capplicationSystemConstantsValidation] = app_msg.cApplicationSystemConstantsPhase1Validation;

  // Application Business Constants Phase 2 Validation
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][app_sys.capplicationBusinessConstantsValidation] = app_msg.cApplicationBusinessConstantsPhase2Validation;
  // Application Command Constants Phase 2 Validation
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][app_sys.capplicationCommandConstantsValidation] = app_msg.cApplicationCommandConstantsPhase2Validation;
  // Application Configuration Constants Phase 2 Validation
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][app_sys.capplicationConfigurationConstantsValidation] = app_msg.cApplicationConfigurationConstantsPhase2Validation;
  // Application Constants Phase 2 Validation
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][app_sys.capplicationConstantsValidation] = app_msg.cApplicationConstantsPhase2Validation;
  // Application Message Constants Phase 2 Validation
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][app_sys.capplicationMessageConstantsValidation] = app_msg.cApplicationMessageConstantsPhase2Validation;
  // Application System Constants Phase 2 Validation
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPhase2ValidationMessages][app_sys.capplicationSystemConstantsValidation] = app_msg.cApplicationSystemConstantsPhase2Validation;

  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][app_sys.capplicationBusinessConstantsValidation] = gen.capp + bas.cUnderscore + gen.cbiz;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][app_sys.capplicationCommandConstantsValidation] = gen.capp + bas.cUnderscore + gen.ccmd;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][app_sys.capplicationConfigurationConstantsValidation] = gen.capp + bas.cUnderscore + gen.ccfg;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][app_sys.capplicationConstantsValidation] = gen.capc;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][app_sys.capplicationMessageConstantsValidation] = gen.capp + bas.cUnderscore + gen.cmsg;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsShortNames][app_sys.capplicationSystemConstantsValidation] = gen.capp + bas.cUnderscore + gen.csys;

  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][app_sys.capplicationBusinessConstantsValidation] = app_sys.capplication_business_constants_js;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][app_sys.capplicationCommandConstantsValidation] = app_sys.capplication_command_constants_js;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][app_sys.capplicationConfigurationConstantsValidation] = app_sys.capplication_configuration_constants_js;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][app_sys.capplicationConstantsValidation] = app_sys.capplication_constants_js;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][app_sys.capplicationMessageConstantsValidation] = app_sys.capplication_message_constants_js;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsFileNames][app_sys.capplicationSystemConstantsValidation] = app_sys.capplication_system_constants_js;

  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][app_sys.capplicationBusinessConstantsValidation] = gen.capp + bas.cUnderscore + gen.cbiz + bas.cDot;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][app_sys.capplicationCommandConstantsValidation] = gen.capp + bas.cUnderscore + gen.ccmd + bas.cDot;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][app_sys.capplicationConfigurationConstantsValidation] = gen.capp + bas.cUnderscore + gen.ccfg + bas.cDot;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][app_sys.capplicationConstantsValidation] = gen.capc + bas.cDot;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][app_sys.capplicationMessageConstantsValidation] = gen.capp + bas.cUnderscore + gen.cmsg + bas.cDot;
  allClientConstantsValidationData[sys.cConstantsValidationData][sys.cConstantsPrefix][app_sys.capplicationSystemConstantsValidation] = gen.capp + bas.cUnderscore + gen.csys + bas.cDot;

  // allClientConstantsValidationData is:
  await haystacks.consoleLog(namespacePrefix, functionName, app_msg.callClientConstantsValidationDataIs + JSON.stringify(allClientConstantsValidationData));
  await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function);
  return allClientConstantsValidationData;
}

export default {
  initializeAllClientConstantsValidationData
};
