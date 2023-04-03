/**
 * @file application.system.constants.js
 * @module application.system.constants
 * @description A file to hold all of the client application system constants.
 * So none of the constants in this file should be generic/system/framework constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2022/04/05
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {bas, gen, wrd} = hayConst;

// Constants Validation
export const cresolvedConstantsPath_Application = wrd.cresolved + wrd.cConstants + wrd.cPath + bas.cUnderscore + wrd.cApplication; // resolvedConstantsPath_Application
export const capplicationBusinessConstantsValidation = wrd.capplication + wrd.cBusiness + wrd.cConstants + wrd.cValidation; // applicationBusinessConstantsValidation
export const capplicationCommandConstantsValidation = wrd.capplication + wrd.cCommand + wrd.cConstants + wrd.cValidation; // applicationCommandConstantsValidation
export const capplicationConfigurationConstantsValidation = wrd.capplication + wrd.cConfiguration + wrd.cConstants + wrd.cValidation; // applicationConfigurationConstantsValidation
export const capplicationConstantsValidation = wrd.capplication + wrd.cConstants + wrd.cValidation; // applicationConstantsValidation
export const capplicationMessageConstantsValidation = wrd.capplication + wrd.cMessage + wrd.cConstants + wrd.cValidation; // applicationMessageConstantsValidation
export const capplicationSystemConstantsValidation = wrd.capplication + wrd.cSystem + wrd.cConstants + wrd.cValidation; // applicationSystemConstantsValidation

// Filenames
export const capplication_business_constants_js = wrd.capplication + bas.cDot + wrd.cbusiness + bas.cDot + wrd.cconstants + gen.cDotjs; // application.busienss.constants.js
export const capplication_command_constants_js = wrd.capplication + bas.cDot + wrd.ccommand + bas.cDot + wrd.cconstants + gen.cDotjs; // application.command.constants.js
export const capplication_configuration_constants_js = wrd.capplication + bas.cDot + wrd.cconfiguration + bas.cDot + wrd.cconstants + gen.cDotjs; // application.configuration.constants.js
export const capplication_constants_js = wrd.capplication + bas.cDot + wrd.cconstants + gen.cDotjs; // application.constants.js
export const capplication_message_constants_js = wrd.capplication + bas.cDot + wrd.cmessage + bas.cDot + wrd.cconstants + gen.cDotjs; // application.message.constants.js
export const capplication_system_constants_js = wrd.capplication + bas.cDot + wrd.csystem + bas.cDot + wrd.cconstants + gen.cDotjs; // application.system.constants.js
