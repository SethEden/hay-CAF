/**
 * @file application.message.constants.validation.js
 * @module application.message.constants.validation
 * @description Contains all validations for named application message constants.
 * @requires module:application.message.constants
 * @author Seth Hollingsead
 * @date 2023/03/30
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_msg from '../../constants/application.message.constants.js';

/**
 * @function applicationMessageConstantsValidation
 * @description Initializes the application message constants validation data objects array.
 * @return {array<object<Name,Actual,Expected>>} An array of constants validation data objects.
 * @author Seth Hollingsead
 * @date 2023/03/30
 */
export const applicationMessageConstantsValidation = [
  // General application messages

  // Application messages
  {Name: 'cinstructionsMessage00', Actual: app_msg.cinstructionsMessage00, Expected: 'Instructions to end user:'},

  // Constants Validation
  {Name: 'callClientConstantsValidationDataIs', Actual: app_msg.callClientConstantsValidationDataIs, Expected: 'allClientConstantsValidationData is: '},
  {Name: 'cresolvedConstantsPath_ApplicationBusinessIs', Actual: app_msg.cresolvedConstantsPath_ApplicationBusinessIs, Expected: 'resolvedConstantsPath_ApplicationBusiness is: '},
  {Name: 'cresolvedConstantsPath_ApplicationCommandIs', Actual: app_msg.cresolvedConstantsPath_ApplicationCommandIs, Expected: 'resolvedConstantsPath_ApplicationCommand is: '},
  {Name: 'cresolvedConstantsPath_ApplicationConfigurationIs', Actual: app_msg.cresolvedConstantsPath_ApplicationConfigurationIs, Expected: 'resolvedConstantsPath_ApplicationConfiguration is: '},
  {Name: 'cresolvedConstantsPath_ApplicationConstantIs', Actual: app_msg.cresolvedConstantsPath_ApplicationConstantIs, Expected: 'resolvedConstantsPath_ApplicationConstant is: '},
  {Name: 'cresolvedConstantsPath_ApplicationMessageIs', Actual: app_msg.cresolvedConstantsPath_ApplicationMessageIs, Expected: 'resolvedConstantsPath_ApplicationMessage is: '},
  {Name: 'cresolvedConstantsPath_ApplicationSystemIs', Actual: app_msg.cresolvedConstantsPath_ApplicationSystemIs, Expected: 'resolvedConstantsPath_ApplicationSystem is: '},

  {Name: 'cApplicationBusinessConstantsPhase1Validation', Actual: app_msg.cApplicationBusinessConstantsPhase1Validation, Expected: 'Application Business Constants Phase 1 Validation'},
  {Name: 'cApplicationCommandConstantsPhase1Validation', Actual: app_msg.cApplicationCommandConstantsPhase1Validation, Expected: 'Application Command Constants Phase 1 Validation'},
  {Name: 'cApplicationConfigurationConstantsPhase1Validation', Actual: app_msg.cApplicationConfigurationConstantsPhase1Validation, Expected: 'Application Configuration Constants Phase 1 Validation'},
  {Name: 'cApplicationConstantsPhase1Validation', Actual: app_msg.cApplicationConstantsPhase1Validation, Expected: 'Application Constants Phase 1 Validation'},
  {Name: 'cApplicationMessageConstantsPhase1Validation', Actual: app_msg.cApplicationMessageConstantsPhase1Validation, Expected: 'Application Message Constants Phase 1 Validation'},
  {Name: 'cApplicationSystemConstantsPhase1Validation', Actual: app_msg.cApplicationSystemConstantsPhase1Validation, Expected: 'Application System Constants Phase 1 Validation'},

  {Name: 'cApplicationBusinessConstantsPhase2Validation', Actual: app_msg.cApplicationBusinessConstantsPhase2Validation, Expected: 'Application Business Constants Phase 2 Validation'},
  {Name: 'cApplicationCommandConstantsPhase2Validation', Actual: app_msg.cApplicationCommandConstantsPhase2Validation, Expected: 'Application Command Constants Phase 2 Validation'},
  {Name: 'cApplicationConfigurationConstantsPhase2Validation', Actual: app_msg.cApplicationConfigurationConstantsPhase2Validation, Expected: 'Application Configuration Constants Phase 2 Validation'},
  {Name: 'cApplicationConstantsPhase2Validation', Actual: app_msg.cApplicationConstantsPhase2Validation, Expected: 'Application Constants Phase 2 Validation'},
  {Name: 'cApplicationMessageConstantsPhase2Validation', Actual: app_msg.cApplicationMessageConstantsPhase2Validation, Expected: 'Application Message Constants Phase 2 Validation'},
  {Name: 'cApplicationSystemConstantsPhase2Validation', Actual: app_msg.cApplicationSystemConstantsPhase2Validation, Expected: 'Application System Constants Phase 2 Validation'},

  {Name: 'capplicationMessage01', Actual: app_msg.capplicationMessage01, Expected: 'BEGIN main program loop'},
  {Name: 'capplicationMessage02', Actual: app_msg.capplicationMessage02, Expected: 'BEGIN command parser'},
  {Name: 'capplicationMessage03', Actual: app_msg.capplicationMessage03, Expected: 'END command parser'},
  {Name: 'capplicationMessage04', Actual: app_msg.capplicationMessage04, Expected: 'END main program loop'},
  {Name: 'capplicationMessage05', Actual: app_msg.capplicationMessage05, Expected: 'Exiting Hay-CAF application'},

  {Name: 'csettingKeyIs', Actual: app_msg.csettingKeyIs, Expected: 'settingKey is: '},
  {Name: 'csettingValueIs', Actual: app_msg.csettingValueIs, Expected: 'settingValue is: '},
  {Name: 'crefactoredAppConfigIs', Actual: app_msg.crefactoredAppConfigIs, Expected: 'refactoredAppConfig is: '},
  {Name: 'cappConfigIs', Actual: app_msg.cappConfigIs, Expected: 'appConfig is: '},
  {Name: 'cshellCommandToRunIs', Actual: app_msg.cshellCommandToRunIs, Expected: 'shellCommandToRun is: '},
  {Name: 'coptionsIs', Actual: app_msg.coptionsIs, Expected: 'options is: '},
  {Name: 'cboilerPlateTestPathAndFileNameIs', Actual: app_msg.cboilerPlateTestPathAndFileNameIs, Expected: 'boilerPlateTestPathAndFileName is: '},
  {Name: 'crootTestFolderPathIs', Actual: app_msg.crootTestFolderPathIs, Expected: 'rootTestFolderPath is: '},
  {Name: 'cdefaultTestBehaviorRunAllTestsIs', Actual: app_msg.cdefaultTestBehaviorRunAllTestsIs, Expected: 'defaultTestBehaviorRunAllTests is: '},
  {Name: 'cslowExecutionIs', Actual: app_msg.cslowExecutionIs, Expected: 'slowExecution is: '},
  {Name: 'cmultiTestExecutionIs', Actual: app_msg.cmultiTestExecutionIs, Expected: 'multiTestExecution is: '},
  {Name: 'clistOfBrowsersIs', Actual: app_msg.clistOfBrowsersIs, Expected: 'listOfBrowsers is: '},
  {Name: 'cexecutionEngineIs', Actual: app_msg.cexecutionEngineIs, Expected: 'executionEngine is: '},
  {Name: 'creportEnabledIs', Actual: app_msg.creportEnabledIs, Expected: 'reportEnabled is: '},
  {Name: 'creportPathIs', Actual: app_msg.creportPathIs, Expected: 'reportPath is: '},
  {Name: 'ccommandTypeIs', Actual: app_msg.ccommandTypeIs, Expected: 'commandType is: '},
  {Name: 'ctestWorkflowFilesAre', Actual: app_msg.ctestWorkflowFilesAre, Expected: 'testWorkflowFiles are: '},
  {Name: 'ctestFileNameKeyIs', Actual: app_msg.ctestFileNameKeyIs, Expected: 'testFileNameKey is: '},
  {Name: 'ctestFileNameIs', Actual: app_msg.ctestFileNameIs, Expected: 'testFileName is: '},
  {Name: 'carrayOfTestNamesToExecuteIs', Actual: app_msg.carrayOfTestNamesToExecuteIs, Expected: 'arrayOfTestNamesToExecute is: '},
  {Name: 'ctestWorkflowFileNameAndPathKeyIs', Actual: app_msg.ctestWorkflowFileNameAndPathKeyIs, Expected: 'testWorkflowFileNameAndPathKey is: '},
  {Name: 'ctestWorkflowFileIs', Actual: app_msg.ctestWorkflowFileIs, Expected: 'testWorkflowFile is: '},
  {Name: 'ccurrentTimeStampIs', Actual: app_msg.ccurrentTimeStampIs, Expected: 'currentTimeStamp is: '},
  {Name: 'ctestReporterCommandStringIs', Actual: app_msg.ctestReporterCommandStringIs, Expected: 'testReporterCommandString is: '},
  {Name: 'clistOfTestNamesToExecuteIs', Actual: app_msg.clistOfTestNamesToExecuteIs, Expected: 'listOfTestNamesToExecute is: '},
  {Name: 'ctestCommandStringIs', Actual: app_msg.ctestCommandStringIs, Expected: 'testCommandString is: '},
  {Name: 'ctestNameKeyIs', Actual: app_msg.ctestNameKeyIs, Expected: 'testNameKey is: '},
  {Name: 'ctestNameIs', Actual: app_msg.ctestNameIs, Expected: 'testName is: '},
  {Name: 'ctestFileNameArrayIs', Actual: app_msg.ctestFileNameArrayIs, Expected: 'testFileNameArray is: '},
  {Name: 'cvalidCommandTypesAre', Actual: app_msg.cvalidCommandTypesAre, Expected: 'valid command types are: '},
  {Name: 'cErrorYourSystemColon', Actual: app_msg.cErrorYourSystemColon, Expected: 'ERROR: Your system, '},
  {Name: 'cErrorIsNotYetSupported', Actual: app_msg.cErrorIsNotYetSupported, Expected: ' is not yet supported!'},
  {Name: 'cCAFfeinatedPathIs', Actual: app_msg.cCAFfeinatedPathIs, Expected: 'CAFfeinatedPath is: '},
  {Name: 'cmessageDataIs', Actual: app_msg.cmessageDataIs, Expected: 'messageData is: '},
  {Name: 'ctestScriptFileNameIs', Actual: app_msg.ctestScriptFileNameIs, Expected: 'testScriptFileName is: '},
  {Name: 'cconfigurationTestScriptFileNameIs', Actual: app_msg.cconfigurationTestScriptFileNameIs, Expected: 'configuration testScriptFileName is: '},
  {Name: 'cServerConnected', Actual: app_msg.cServerConnected, Expected: 'Server Connected'},
  {Name: 'ctestResult', Actual: app_msg.ctestResult, Expected: 'testResult'},
  {Name: 'cSocketServer', Actual: app_msg.cSocketServer, Expected: 'Socket server '},
  {Name: 'cDisconnectingGracefully', Actual: app_msg.cDisconnectingGracefully, Expected: 'Disconnecting gracefully'},
  {Name: 'cSocketServerFailed', Actual: app_msg.cSocketServerFailed, Expected: 'Socket server failed: '},
  {Name: 'cchunkIs', Actual: app_msg.cchunkIs, Expected: 'chunk is: '},
  {Name: 'csendingTerminationCmdToClients', Actual: app_msg.csendingTerminationCmdToClients, Expected: 'Sending termination cmd to clients...'},
  {Name: 'cmainTestScriptFileNameIs', Actual: app_msg.cmainTestScriptFileNameIs, Expected: 'main.testScriptFileName is: '},
  {Name: 'cmainApplicationRootPathIs', Actual: app_msg.cmainApplicationRootPathIs, Expected: 'main.applicationRootPath is: '},
  {Name: 'cshellCommandNotDefined', Actual: app_msg.cshellCommandNotDefined, Expected: 'Shell command not defined'},
  {Name: 'cselectedShellNotFound', Actual: app_msg.cselectedShellNotFound, Expected: 'Selected shell not found.'},
  {Name: 'cProcessWasSpawned', Actual: app_msg.cProcessWasSpawned, Expected: 'Process was spawned!'},
  {Name: 'cPathToShellExecutableIs', Actual: app_msg.cPathToShellExecutableIs, Expected: 'pathToShellExecutable is: '},
  {Name: 'cshellScriptFileNameIs', Actual: app_msg.cshellScriptFileNameIs, Expected: 'shellScript file name is: '},
  {Name: 'cerrorCreatingTheTmpFile', Actual: app_msg.cerrorCreatingTheTmpFile, Expected: 'Error creating the tmp file: '},
  {Name: 'cTmpFileSuccessfullyWritten', Actual: app_msg.cTmpFileSuccessfullyWritten, Expected: 'Tmp file successfully written: '},
  {Name: 'cspawnCommandRawIs', Actual: app_msg.cspawnCommandRawIs, Expected: 'spawn command RAW is: '},
  {Name: 'cspawnCommandIs', Actual: app_msg.cspawnCommandIs, Expected: 'spawn command is: '},
  {Name: 'cFailedExecutingColon', Actual: app_msg.cFailedExecutingColon, Expected: 'Failed executing: '},

  // ERROR Messages
  {Name: 'cErrorSetBoilerPlateTestPathAndFileNameMessage', Actual: app_msg.cErrorSetBoilerPlateTestPathAndFileNameMessage, Expected: 'ERROR: Please enter a valid path and filename as input.'},
  {Name: 'cErrorSetRootTestFolderPathMessage', Actual: app_msg.cErrorSetRootTestFolderPathMessage, Expected: 'ERROR: Please enter a valid path as input.'},
  {Name: 'cErrorSetDefaultTestBehaviorMessage', Actual: app_msg.cErrorSetDefaultTestBehaviorMessage, Expected: 'ERROR: Please enter a valid input, true or false.'},
  {Name: 'cErrorSetBrowserListMessage', Actual: app_msg.cErrorSetBrowserListMessage, Expected: 'ERROR: Please enter a valid list of browser names to execute with.'},
  {Name: 'csetExecutionEngineMessage01', Actual: app_msg.csetExecutionEngineMessage01, Expected: 'WARNING: All valid execution engines are not currently supported by our testing engine.'},
  {Name: 'csetExecutionEngineMessage02', Actual: app_msg.csetExecutionEngineMessage02, Expected: 'WARNING: Only testcafe is supported as a testing engine, until we can finish building our next generation system.'},
  {Name: 'csetExecutionEngineMessage03', Actual: app_msg.csetExecutionEngineMessage03, Expected: 'WARNING: The execution engine will be hard coded to testcafe for now.'},
  {Name: 'csetExecutionEngineMessage04', Actual: app_msg.csetExecutionEngineMessage04, Expected: 'ERROR: Please enter a valid execution engine such as: '},
  {Name: 'csetReportPathConfigurationMessage01', Actual: app_msg.csetReportPathConfigurationMessage01, Expected: 'ERROR: Please enter a valid system path.'},
  {Name: 'csetChildProcessLimitTimeMessage01', Actual: app_msg.csetChildProcessLimitTimeMessage01, Expected: 'ERROR: Please enter a valid process time.'},
  {Name: 'csetCommandTypeMessage01', Actual: app_msg.csetCommandTypeMessage01, Expected: 'ERROR: Please enter a valid command type. Valid types are: '},
  {Name: 'ctestMessage01', Actual: app_msg.ctestMessage01, Expected: 'ERROR: No browsers specified. Please set the list of browsers in the configuration setting: '},
  {Name: 'ctestMessage02', Actual: app_msg.ctestMessage02, Expected: 'ERROR: No execution engine is specified. Please set the execution engine in the configuration setting: '},
  {Name: 'ctestMessage03', Actual: app_msg.ctestMessage03, Expected: 'ERROR: No boiler plate test path and file name were specified. Please set the boiler plate test path and file name in the configuration setting: '},
  {Name: 'ctestMessage04', Actual: app_msg.ctestMessage04, Expected: 'ERROR: No report path specified. Please set the report path in the configuration setting: '},
  {Name: 'ctestMessage05', Actual: app_msg.ctestMessage05, Expected: 'ERROR: No test root path specified. Please set the path in the configuration setting: '},
  {Name: 'cErrorExecuteTestCommandMessage01', Actual: app_msg.cErrorExecuteTestCommandMessage01, Expected: 'ERROR: You must specify a test command to execute. Command is: '},
  {Name: 'cchildProcessCommandStringNotDefined', Actual: app_msg.cchildProcessCommandStringNotDefined, Expected: 'Child process command string not defined.'},
  {Name: 'cErrorSocketServerMessage01', Actual: app_msg.cErrorSocketServerMessage01, Expected: 'Error on socket server: '},
  {Name: 'cErrorSocketServerMessage02', Actual: app_msg.cErrorSocketServerMessage02, Expected: 'Failed retrieving data from client: '},
  {Name: 'cErrorSocketServerMessage03', Actual: app_msg.cErrorSocketServerMessage03, Expected: 'Server connection has ended!'},

  // SUCCESS Messages
  {Name: 'cconfigurationSettingSuccessfullyChanged', Actual: app_msg.cconfigurationSettingSuccessfullyChanged, Expected: ' configuration setting successfully changed.'},
  {Name: 'cSuccessSetBoilerPlateTestPathAndFileNameMessage', Actual: app_msg.cSuccessSetBoilerPlateTestPathAndFileNameMessage, Expected: 'SUCCESS: boilerPlateTestPathAndFileName configuration setting successfully changed.'},
  {Name: 'cSuccessSetRootTestFolderPathMessage', Actual: app_msg.cSuccessSetRootTestFolderPathMessage, Expected: 'SUCCESS: rootTestFolderPath configuration setting successfully changed.'},
  {Name: 'cSuccessSetDefaultTestBehaviorMessage', Actual: app_msg.cSuccessSetDefaultTestBehaviorMessage, Expected: 'SUCCESS: defaultRunAllTests configuration setting successfully changed.'},
  {Name: 'cSuccessSetSlowExecutionMessage', Actual: app_msg.cSuccessSetSlowExecutionMessage, Expected: 'SUCCESS: slowExecution configuration setting successfully changed.'},
  {Name: 'cSuccessSetMultiTestExecutionMessage', Actual: app_msg.cSuccessSetMultiTestExecutionMessage, Expected: 'SUCCESS: multiTestExecution configuration setting successfully changed.'},
  {Name: 'cSuccessSetBrowsersListMessage', Actual: app_msg.cSuccessSetBrowsersListMessage, Expected: 'SUCCESS: listOfBrowsers configuration setting successfully changed.'},
  {Name: 'cSuccessSetExecutionEngineMessage', Actual: app_msg.cSuccessSetExecutionEngineMessage, Expected: 'SUCCESS: executionDriverEngine configuration setting successfully changed.'},
  {Name: 'cSuccessSetEnableReporterConfigurationMessage', Actual: app_msg.cSuccessSetEnableReporterConfigurationMessage, Expected: 'SUCCESS: enableReporter configuration setting successfully changed.'},
  {Name: 'cSuccessSetReportPathConfigurationMessage', Actual: app_msg.cSuccessSetReportPathConfigurationMessage, Expected: 'SUCCESS: reportPath configuration setting successfully changed.'},
  {Name: 'cSuccessSetChildProcessLimitTimeMessage', Actual: app_msg.cSuccessSetChildProcessLimitTimeMessage, Expected: 'SUCCESS: childProcessLimitTime configuration setting successfully changed.'},
  {Name: 'cSuccessSetCmdTypeMessage', Actual: app_msg.cSuccessSetCmdTypeMessage, Expected: 'SUCCESS: cmdType configuration setting successfully changed.'}
];
