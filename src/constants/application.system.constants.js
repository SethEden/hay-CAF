/**
 * @file application.system.constants.js
 * @module application.system.constants
 * @description A file to hold all of the client application system constants.
 * So none of the constants in this file should be generic/system/framework constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2023/03/30
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {bas, gen, phn, wrd} = hayConst;

// hay-CAF system constants

// Constants Validation
export const cresolvedConstantsPath_Application = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cApplication; // resolvedConstantsPath_Application
export const capplicationBusinessConstantsValidation = wrd.capplication + wrd.cBusiness + wrd.cConstants + wrd.cValidation; // applicationBusinessConstantsValidation
export const capplicationCommandConstantsValidation = wrd.capplication + wrd.cCommand + wrd.cConstants + wrd.cValidation; // applicationCommandConstantsValidation
export const capplicationConfigurationConstantsValidation = wrd.capplication + wrd.cConfiguration + wrd.cConstants + wrd.cValidation; // applicationConfigurationConstantsValidation
export const capplicationConstantsValidation = wrd.capplication + wrd.cConstants + wrd.cValidation; // applicationConstantsValidation
export const capplicationMessageConstantsValidation = wrd.capplication + wrd.cMessage + wrd.cConstants + wrd.cValidation; // applicationMessageConstantsValidation
export const capplicationSystemConstantsValidation = wrd.capplication + wrd.cSystem + wrd.cConstants + wrd.cValidation; // applicationSystemConstantsValidation

// Filenames
export const capplication_business_constants_js = wrd.capplication + bas.cDot + wrd.cbusiness + bas.cDot + wrd.cconstants + gen.cDotjs; // application.business.constants.js
export const capplication_command_constants_js = wrd.capplication + bas.cDot + wrd.ccommand + bas.cDot + wrd.cconstants + gen.cDotjs; // application.command.constants.js
export const capplication_configuration_constants_js = wrd.capplication + bas.cDot + wrd.cconfiguration + bas.cDot + wrd.cconstants + gen.cDotjs; // application.configuration.constants.js
export const capplication_constants_js = wrd.capplication + bas.cDot + wrd.cconstants + gen.cDotjs; // application.constants.js
export const capplication_message_constants_js = wrd.capplication + bas.cDot + wrd.cmessage + bas.cDot + wrd.cconstants + gen.cDotjs; // application.message.constants.js
export const capplication_system_constants_js = wrd.capplication + bas.cDot + wrd.csystem + bas.cDot + wrd.cconstants + gen.cDotjs; // application.system.constants.js

// Test Drivers
// NOTE: At some point in the future hay-CAF will transition to using hayD-CAF rather than our current system.
// Then we can call test scripts using Playwright, Cypress, NightwatchJS, WebDriverIO, Appium and TestCafe.
// But for now I'm going to hard-code this to just using testcafe, because it's what we have, and it's what we can use.
// However, we will add them here so the system is ready to support them once we do finally get around to building our next generation test execution framework.
export const ctestcafe = wrd.ctest + wrd.ccafe; // testcafe
export const cplaywright = wrd.cplay + wrd.cwright; // playwright
export const ccypress = wrd.ccypress; // cypress
export const cwebdriver = wrd.cweb + wrd.cdriver; // webdriver
export const cappium = wrd.capp + phn.cium; // appium
export const cnightwatch = wrd.cnight + wrd.cwatch; // nightwatch

export const cvalidExecutionEngines = ctestcafe + bas.cComa + cplaywright + bas.cComa + ccypress + bas.cComa + cwebdriver + bas.cComa + cappium + bas.cComa + cnightwatch; // testcafe,playwright,cypress,webdriver,appium,nightwatch
export const cslowExe = wrd.cslow + gen.cExe; // slowExe
export const ctestName = wrd.ctest + wrd.cName; // testName