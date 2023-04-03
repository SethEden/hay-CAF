/**
 * @file application.cmmand.constants.js
 * @module application.command.constants
 * @description A file to hold all of the client application command constants.
 * So non of the constants in this file should be generic/system/framework constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2022/03/13
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {bas, wrd} = hayConst;

// ********************************
// Client Commands in order
// ********************************
export const ccustomEchoCommand = wrd.ccustom + wrd.cEcho + wrd.cCommand; // customEchoCommand
export const cresolveAppPath = wrd.cresolve + wrd.cApp + wrd.cPath; // resolveAppPath
export const crectifyAppMetaData = wrd.crectify + wrd.cApp + wrd.cMetaData; // rectifyAppMetaData
export const cdeployMetaData = wrd.cdeploy + wrd.cMetaData; // deployMetaData
export const cdeployApplication = wrd.cdeploy + wrd.cApplication; // deployApplication
export const creleaseApplication = wrd.crelease + wrd.cApplication; // releaseApplication

// ********************************
// Client Workflows in order
// ********************************
export const cBuildWorkflow = wrd.cWorkflow + bas.cSpace + wrd.cbuild; // Workflow build
export const cReleaseWorkflow = wrd.cWorkflow + bas.cSpace + wrd.crelease; // Workflow release
