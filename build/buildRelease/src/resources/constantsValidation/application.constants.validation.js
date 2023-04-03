/**
 * @file application.constants.validation.js
 * @module application.constants.validation
 * @description Contains all validations for named application constants.
 * @requires module:application-constants
 * @date 2022/04/05
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as apc from '../../constants/application.constants.js';

/**
 * @function applicationConstantsValidation
 * @description Initializes the application constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/04/05
 */
export const applicationConstantsValidation = [
  {Name: 'cExpectedActualFrameworkDevName', Actual: apc.cExpectedActualFrameworkDevName, Expected: 'haystacks-async'},
  {Name: 'cExpectedActualFrameworkProdName', Actual: apc.cExpectedActualFrameworkProdName, Expected: '@haystacks/async'},
  {Name: 'cApplicationName', Actual: apc.cApplicationName, Expected: 'buildRelease'},
  {Name: 'cAppDevPath', Actual: apc.cAppDevPath, Expected: '/src/'},
  {Name: 'cAppProdPath', Actual: apc.cAppProdPath, Expected: '/bin/'},
  {Name: 'cResourcesCommonPath', Actual: apc.cResourcesCommonPath, Expected: 'resources/'},
  {Name: 'cCommandsCommonPath', Actual: apc.cCommandsCommonPath, Expected: 'commands/'},
  {Name: 'cConstantsPath', Actual: apc.cConstantsPath, Expected: 'constants/'},
  {Name: 'cConfigurationCommonPath', Actual: apc.cConfigurationCommonPath, Expected: 'configuration/'},
  {Name: 'cWorkflowsCommonPath', Actual: apc.cWorkflowsCommonPath, Expected: 'workflows/'},
  {Name: 'cReleasePath', Actual: apc.cReleasePath, Expected: '/release/'},
  {Name: 'cForwardSlashPackageDotJson', Actual: apc.cForwardSlashPackageDotJson, Expected: '/package.json'},

  // Full Dev Paths
  {Name: 'cFullDevResourcesPath', Actual: apc.cFullDevResourcesPath, Expected: '/src/resources/'},
  {Name: 'cFullDevCommandsPath', Actual: apc.cFullDevCommandsPath, Expected: '/src/resources/commands/'},
  {Name: 'cFullDevConstantsPath', Actual: apc.cFullDevConstantsPath, Expected: '/src/constants/'},
  {Name: 'cFullDevConfigurationPath', Actual: apc.cFullDevConfigurationPath, Expected: '/src/resources/configuration/'},
  {Name: 'cFullDevWorkflowsPath', Actual: apc.cFullDevWorkflowsPath, Expected: '/src/resources/workflows/'},
  {Name: 'cmetaDataDevPath', Actual: apc.cmetaDataDevPath, Expected: '/src/resources/metaData.json'},

  // Full Prod Paths
  {Name: 'cFullProdResourcesPath', Actual: apc.cFullProdResourcesPath, Expected: '/bin/resources/'},
  {Name: 'cFullProdCommandsPath', Actual: apc.cFullProdCommandsPath, Expected: '/bin/resources/commands/'},
  {Name: 'cFullProdConstantsPath', Actual: apc.cFullProdConstantsPath, Expected: '/bin/constants/'},
  {Name: 'cFullProdConfigurationPath', Actual: apc.cFullProdConfigurationPath, Expected: '/bin/resources/configuration/'},
  {Name: 'cFullProdWorkflowsPath', Actual: apc.cFullProdWorkflowsPath, Expected: '/bin/resources/workflows/'},
  {Name: 'cmetaDataProdPath', Actual: apc.cmetaDataProdPath, Expected: '/bin/resources/metaData.json'}
];
