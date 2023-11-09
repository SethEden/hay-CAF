/**
 * @file application.business.constants.validation.js
 * @module application.business.constants.validation
 * @description Contains all validations for named application business rule constants.
 * @requires module:application.business.constants
 * @author Seth Hollingsead
 * @date 2023/03/30
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_biz from '../../constants/application.business.constants.js';

/**
 * @function applicationBusinessConstantsValidation
 * @description Initializes the application business constants validation data objects array.
 * @return {array<object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Seth Hollingsead
 * @date 2023/03/30
 */
export const applicationBusinessConstantsValidation = [
  // ********************************
  // test rules in order
  // ********************************
  {Name: 'cbuildArrayOfTestNames', Actual: app_biz.cbuildArrayOfTestNames, Expected: 'buildArrayOfTestNames'}
];