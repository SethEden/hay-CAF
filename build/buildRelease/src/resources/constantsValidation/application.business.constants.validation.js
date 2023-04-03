/**
 * @file application.business.constants.validation.js
 * @module application.business.constants.validation
 * @description Contains all validations for named application business rule constants.
 * @requires module:application.business.constants
 * @author Seth Hollingsead
 * @date 2022/04/05
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_biz from '../../constants/application.business.constants.js';

/**
 * @function applicationBusinessConstantsValidation
 * @description Initializes the application busienss rules constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/04/05
 */
export const applicationBusinessConstantsValidation = [
  // Client Business Rules
  {Name: 'cclientEcho', Actual: app_biz.cclientEcho, Expected: 'clientEcho'},

  // ********************************
  // ClientStringParsing rules in order
  // ********************************
  {Name: 'ccustomEcho', Actual: app_biz.ccustomEcho, Expected: 'customEcho'},
  {Name: 'cbuildReleasePackage', Actual: app_biz.cbuildReleasePackage, Expected: 'buildReleasePackage'}
];
