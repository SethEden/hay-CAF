/**
 * @file clientCommandsLibrary.js
 * @module clientCommandsLibrary
 * @description Contains all of the client defined commands as a map between function names and function calls.
 * @requires module:applicationSystem
 * @requires module:applicationTests
 * @requires module:testCommands
 * @requires module:application.command.constants
 * @requires module:application.function.constants
 * @author Seth Hollingsead
 * @date 2023/03/30
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import applicationSystem from './clientCommands/applicationSystem.js';
import applicationTests from './clientCommands/applicationTests.js';
import testCommands from './clientCommands/testCommands.js';
import * as app_cmd from '../constants/application.command.constants.js';

/**
 * @function initApplicationCommandsLibrary
 * @description Initializes an object map of client commands and client function calls and returns them.
 * @return {object} A JSON object that contains a list of business rule names and their associated function calls.
 * @author Seth Hollingsead
 * @date 2023/03/30
 * @NOTE Please be aware that the Commands and BusinessRules data fields in the
 * D-data structure are going to display as empty when printing out the D-data structure even when using JSON.stringify().
 * This is because the functions cannot really be serialized in any way. It actually kind of makes sense,
 * but could be really confusing if you are struggling, trying to debug commands or business rules that do not appear to exist.
 */
const initApplicationCommandsLibrary = function() {
  return {
    // Client commands
    // ***********************************************
    // application system commands in order
    // ***********************************************
    [app_cmd.cinstructions]: (inputData, inputMetaData) => applicationSystem.instructions(inputData, inputMetaData),
    [app_cmd.capplicationHelp]: (inputData, inputMetaData) => applicationSystem.applicationHelp(inputData, inputMetaData),
    [app_cmd.capplicationWorkflowHelp]: (inputData, inputMetaData) => applicationSystem.applicationWorkflowHelp(inputData, inputMetaData),

    // ***********************************************
    // application test commands in order
    // ***********************************************
    [app_cmd.cvalidateApplicationConstants]: (inputData, inputMetaData) => applicationTests.validateApplicationConstants(inputData, inputMetaData),
    [app_cmd.cvalidateApplicationCommandAliases]: (inputData, inputMetaData) => applicationTests.validateApplicationCommandAliases(inputData, inputMetaData),
    [app_cmd.cvalidateApplicationWorkflows]: (inputData, inputMetaData) => applicationTests.validateApplicationWorkflows(inputData, inputMetaData),
    [app_cmd.callApplicationValidations]: (inputData, inputMetaData) => applicationTests.allApplicationValidations(inputData, inputMetaData),

    // ***********************************************
    // test commands in order
    // ***********************************************
    
  }
}

export default {
  initApplicationCommandsLibrary
}