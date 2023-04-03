/**
 * @file application.business.constants.js
 * @module application.business.constants
 * @description A file to hold all of the client application business rules constants.
 * So none of the constants in this file should be generic/system/framework constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2022/03/13
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {wrd} = hayConst;

// Client Business Rules
export const cclientEcho = wrd.cclient + wrd.cEcho; // clientEcho

// ********************************
// ClientStringParsing rules in order
// ********************************
export const ccustomEcho = wrd.ccustom + wrd.cEcho; // customEcho
export const cbuildReleasePackage = wrd.cbuild + wrd.cRelease + wrd.cPackage; // buildReleasePackage
