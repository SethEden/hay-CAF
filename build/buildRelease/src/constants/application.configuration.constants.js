/**
 * @file application.configuration.constants.js
 * @module application.configuration.constants
 * @description A file to hold all of the cient configuration constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2022/03/13
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {wrd} = hayConst;

export const cargumentDrivenInterface = wrd.cargument + wrd.cDriven + wrd.cInterface; // argumentDrivenInterface
export const cpathSeparator = wrd.cpath + wrd.cSeparator; // pathSeparator
export const csourcePath = wrd.csource + wrd.cPath; // sourcePath
export const cdestinationPath = wrd.cdestination + wrd.cPath; // destinationPath
export const csourceResourcesPath = wrd.csource + wrd.cResources + wrd.cPath; // sourceResourcesPath
export const cdestinationResourcesPath = wrd.cdestination + wrd.cResources + wrd.cPath; // destinationResourcesPath
export const creleasePath = wrd.crelease + wrd.cPath; // releasePath
export const cdeploymentCompleted = wrd.cdeployment + wrd.cCompleted; // deploymentCompleted
export const cappResourcesRootPath = wrd.capp + wrd.cResources + wrd.cRoot + wrd.cPath; // appResourcesRootPath
export const capplicationResourcesPath = wrd.capplication + wrd.cResources + wrd.cPath; // applicationResourcesPath