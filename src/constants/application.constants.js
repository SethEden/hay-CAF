/**
 * @file application.constants.js
 * @module application.constants
 * @description Contains many re-usable application constants.
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2023/03/30
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// External imports
import hayConst from '@haystacks/constants';
const {bas, gen, sys, wrd} = hayConst;

export const cExpectedActualFrameworkDevName = wrd.chay + wrd.cstacks + bas.cDash + wrd.casync; // haystacks-async
export const cExpectedActualFrameworkProdName = bas.cAt + wrd.chay + wrd.cstacks + bas.cForwardSlash + wrd.casync; // @haystacks/async
export const cApplicationName = wrd.chay + bas.cDash + bas.cCA + bas.cF; // hay-CAF
export const cAppDevPath = bas.cForwardSlash + wrd.csrc + bas.cForwardSlash; // /src/
export const cAppProdPath = bas.cForwardSlash + wrd.cbin + bas.cForwardSlash; // /bin/
export const cResourcesCommonPath = wrd.cresources + bas.cForwardSlash; // resources/
export const cCommandsCommonPath = wrd.ccommands + bas.cForwardSlash; // commands/
export const cConstantsPath = wrd.cconstants + bas.cForwardSlash; // constants/
export const cConfigurationCommonPath = wrd.cconfiguration + bas.cForwardSlash; // configuration/
export const cPluginsRegistryCommonPath = wrd.cplugins + bas.cForwardSlash + wrd.cplugins + gen.cDotjson; // plugins/plugins.json
export const cWorkflowsCommonPath = wrd.cworkflows + bas.cForwardSlash; // workflows/
export const cThemesCommonPath = wrd.cthemes + bas.cForwardSlash; // themes/
export const cReleasePath = wrd.crelease + bas.cForwardSlash; // release/
export const cchrome = wrd.cchrome; // chrome
export const cChrome = wrd.cChrome; // Chrome
export const cedge = wrd.cedge; // edge
export const cEdge = wrd.cEdge; // Edge
export const cfirefox = wrd.cfirefox; // firefox
export const cFirefox = wrd.cFireFox; // Firefox
export const copera = wrd.copera; // opera
export const cOpera = wrd.cOpera; // Opera
export const csafari = wrd.csafari; // safari
export const cSafari = wrd.cSafari; // Safari

// Full Dev paths
export const cFullDevResourcesPath = cAppDevPath + cResourcesCommonPath; // /src/resources/
export const cFullDevCommandsPath = cFullDevResourcesPath + cCommandsCommonPath; // /src/resources/commands/
export const cFullDevConstantsPath = cAppDevPath + cConstantsPath; // /src/constants/
export const cFullDevConfigurationPath = cFullDevResourcesPath + cConfigurationCommonPath; // /src/resources/configuration/
export const cFullDevPluginsRegistryPath = cFullDevResourcesPath + cPluginsRegistryCommonPath; // /src/resources/plugins/plugins.json
export const cFullDevWorkflowsPath = cFullDevResourcesPath + cWorkflowsCommonPath; // /src/resources/workflows/
export const cFullDevThemesPath = cFullDevResourcesPath + cThemesCommonPath; // /src/resources/themes/
export const cmetaDataDevPath = cFullDevResourcesPath + sys.cmetaDatadotJson; // /src/resources/metaData.json

// Full Prod paths
export const cFullProdResourcesPath = cAppProdPath + cResourcesCommonPath; // /bin/resources/
export const cFullProdCommandsPath = cFullProdResourcesPath + cCommandsCommonPath; // /bin/resources/commands/
export const cFullProdConstantsPath = cAppProdPath + cConstantsPath; // /bin/constants/
export const cFullProdConfigurationPath = cFullProdResourcesPath + cConfigurationCommonPath; // /bin/resources/configuration/
export const cFullProdPluginsRegistryPath = cFullProdResourcesPath + cPluginsRegistryCommonPath; // /bin/resources/plugins/plugins.json
export const cFullProdWorkflowsPath = cFullProdResourcesPath + cWorkflowsCommonPath; // /bin/resources/workflows/
export const cFullProdThemesPath = cFullProdResourcesPath + cThemesCommonPath; // /bin/resources/themes/
export const cmetaDataProdPath = cFullProdResourcesPath + sys.cmetaDatadotJson; // /bin/resources/metaData.json