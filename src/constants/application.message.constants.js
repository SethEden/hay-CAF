/**
 * @file application.message.constants.js
 * @module application.message.constants
 * @description Contains many re-usable application message constants.
 * @requires module:application.command.constants
 * @requires module:application.configuration.constants
 * @requires module:application.constants
 * @requires module:application.system.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @author Seth Hollingsead
 * @date 2023/03/30
 * @copyright Copyright © 2023-… by Seth Hollingsead. All rights reserved
 */

// Internal Imports
import { basicConstantsValidation } from '@haystacks/constants/src/constantsValidation/basic.constants.validation.js';
import * as app_cmd from './application.command.constants.js';
import * as app_cfg from './application.configuration.constants.js';
import * as apc from './application.constants.js';
import * as app_sys from './application.system.constants.js';

// External imports
import hayConst from '@haystacks/constants';
const {bas, gen, msg, num, sys, wrd} = hayConst;

// General application messages

// Application messages
export const cinstructionsMessage00 = wrd.cInstructions + bas.cSpace + wrd.cto + bas.cSpace + wrd.cend + bas.cSpace + wrd.cuser + bas.cColon; // Instructions to end user:

// Constants Validation
export const callClientConstantsValidationDataIs = wrd.call + wrd.cClient + wrd.cConstants + wrd.cValidation + wrd.cData + sys.cSpaceIsColonSpace; // allClientConstantsValidationData is:
export const cresolvedConstantsPath_ApplicationBusinessIs = app_sys.cresolvedConstantsPath_Application + wrd.cBusiness + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationBusiness is:
export const cresolvedConstantsPath_ApplicationCommandIs = app_sys.cresolvedConstantsPath_Application + wrd.cCommand + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationCommand is:
export const cresolvedConstantsPath_ApplicationConfigurationIs = app_sys.cresolvedConstantsPath_Application + wrd.cConfiguration + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationConfiguration is:
export const cresolvedConstantsPath_ApplicationConstantIs = app_sys.cresolvedConstantsPath_Application + wrd.cConstant + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationConstant is:
export const cresolvedConstantsPath_ApplicationMessageIs = app_sys.cresolvedConstantsPath_Application + wrd.cMessage + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationMessage is:
export const cresolvedConstantsPath_ApplicationSystemIs = app_sys.cresolvedConstantsPath_Application + wrd.cSystem + sys.cSpaceIsColonSpace; // resolvedConstantsPath_ApplicationSystem is:

export const cApplicationBusinessConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cBusiness + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Business Constants Phase 1 Validation
export const cApplicationCommandConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cCommand + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Command Constants Phase 1 Validation
export const cApplicationConfigurationConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cConfiguration + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Configuration Constants Phase 1 Validation
export const cApplicationConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Constants Phase 1 Validation
export const cApplicationMessageConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cMessage + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application Message Constants Phase 1 Validation
export const cApplicationSystemConstantsPhase1Validation = wrd.cApplication + bas.cSpace + wrd.cSystem + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c1 + bas.cSpace + wrd.cValidation; // Application System Constants Phase 1 Validation

export const cApplicationBusinessConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cBusiness + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Business Constants Phase 2 Validation
export const cApplicationCommandConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cCommand + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Command Constants Phase 2 Validation
export const cApplicationConfigurationConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cConfiguration + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Configuration Constants Phase 2 Validation
export const cApplicationConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Constants Phase 2 Validation
export const cApplicationMessageConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cMessage + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application Message Constants Phase 2 Validation
export const cApplicationSystemConstantsPhase2Validation = wrd.cApplication + bas.cSpace + wrd.cSystem + bas.cSpace + wrd.cConstants + bas.cSpace + wrd.cPhase + bas.cSpace + num.c2 + bas.cSpace + wrd.cValidation; // Application System Constants Phase 2 Validation

export const capplicationMessage01 = wrd.cBEGIN + bas.cSpace + wrd.cmain + bas.cSpace + wrd.cprogram + bas.cSpace + wrd.cloop; // BEGIN main program loop
export const capplicationMessage02 = wrd.cBEGIN + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cparser; // BEGIN command parser
export const capplicationMessage03 = wrd.cEND + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cparser; // END command parser
export const capplicationMessage04 = wrd.cEND + bas.cSpace + wrd.cmain + bas.cSpace + wrd.cprogram + bas.cSpace + wrd.cloop; // END main program loop
export const capplicationMessage05 = wrd.cExiting + bas.cSpace + wrd.cHay + bas.cDash + bas.cCA + bas.cF + bas.cSpace + wrd.capplication; // Exiting Hay-CAF application

export const csettingKeyIs = wrd.csetting + wrd.cKey + sys.cSpaceIsColonSpace; // settingKey is:
export const csettingValueIs = wrd.csetting + wrd.cValue + sys.cSpaceIsColonSpace; // settingValue is:
export const crefactoredAppConfigIs = wrd.crefactored + wrd.cApp + wrd.cConfig + sys.cSpaceIsColonSpace; // refactoredAppConfig is:
export const cappConfigIs = wrd.capp + wrd.cConfig + sys.cSpaceIsColonSpace; // appConfig is:
export const cshellCommandToRunIs = wrd.cshell + wrd.cCommand + wrd.cTo + wrd.cRun + sys.cSpaceIsColonSpace; // shellCommandToRun is:
export const coptionsIs = wrd.coptions + sys.cSpaceIsColonSpace; // options is:
export const cboilerPlateTestPathAndFileNameIs = wrd.cboiler + wrd.cPlate + wrd.cTest + wrd.cPath + wrd.cAnd + wrd.cFileName + sys.cSpaceIsColonSpace; // boilerPlateTestPathAndFileName is:
export const crootTestFolderPathIs = wrd.croot + wrd.cTest + wrd.cFolder + wrd.cPath + sys.cSpaceIsColonSpace; // rootTestFolderPath is:
export const cdefaultTestBehaviorRunAllTestsIs = wrd.cdefault + wrd.cTest + wrd.cBehavior + wrd.cRun + wrd.cAll + wrd.cTests + sys.cSpaceIsColonSpace; // defaultTestBehaviorRunAllTests is:
export const cslowExecutionIs = wrd.cslow + wrd.cExecution + sys.cSpaceIsColonSpace; // slowExecution is:
export const cmultiTestExecutionIs = wrd.cmulti + wrd.cTest + wrd.cExecution + sys.cSpaceIsColonSpace; // multiTestExecution is:
export const clistOfBrowsersIs = wrd.clist + wrd.cOf + wrd.cBrowsers + sys.cSpaceIsColonSpace; // listOfBrowsers is:
export const cexecutionEngineIs = wrd.cexecution + wrd.cEngine + sys.cSpaceIsColonSpace; // executionEngine is:
export const creportEnabledIs = wrd.creport + wrd.cEnabled + sys.cSpaceIsColonSpace; // reportEnabled is:
export const creportPathIs = wrd.creport + wrd.cPath + sys.cSpaceIsColonSpace; // reportPath is:
export const ccommandTypeIs = wrd.ccommand + wrd.cType + sys.cSpaceIsColonSpace; // commandType is:
export const ctestWorkflowFilesAre = wrd.ctest + wrd.cWorkflow + wrd.cFiles + sys.cSpaceAreColonSpace; // testWorkflowFiles are:
export const ctestFileNameKeyIs = wrd.ctest + wrd.cFileName + wrd.cKey + sys.cSpaceIsColonSpace; // testFileNameKey is:
export const ctestFileNameIs = wrd.ctest + wrd.cFileName + sys.cSpaceIsColonSpace; // testFileName is:
export const carrayOfTestNamesToExecuteIs = wrd.carray + wrd.cOf + wrd.cTestNames + wrd.cTo + wrd.cExecute + sys.cSpaceIsColonSpace; // arrayOfTestNamesToExecute is:
export const ctestWorkflowFileNameAndPathKeyIs = wrd.ctest + wrd.cWorkflow + wrd.cFileName + wrd.cAnd + wrd.cPath + wrd.cKey + sys.cSpaceIsColonSpace; // testWorkflowFileNameAndPathKey is:
export const ctestWorkflowFileIs = wrd.ctest + wrd.cWorkflow + wrd.cFile + sys.cSpaceIsColonSpace; // testWorkflowFile is:
export const ccurrentTimeStampIs = wrd.ccurrent + wrd.cTime + wrd.cStamp + sys.cSpaceIsColonSpace; // currentTimeStamp is:
export const ctestReporterCommandStringIs = wrd.ctest + wrd.cReporter + wrd.cCommand + wrd.cString + sys.cSpaceIsColonSpace; // testReporterCommandString is:
export const clistOfTestNamesToExecuteIs = wrd.clist + wrd.cOf + wrd.cTestNames + wrd.cTo + wrd.cExecute + sys.cSpaceIsColonSpace; // listOfTestNamesToExecute is:
export const ctestCommandStringIs = wrd.ctest + wrd.cCommand + wrd.cString + sys.cSpaceIsColonSpace; // testCommandString is:
export const ctestNameKeyIs = wrd.ctestName + wrd.cKey + sys.cSpaceIsColonSpace; // testNameKey is:
export const ctestNameIs = wrd.ctestName + sys.cSpaceIsColonSpace; // testName is:
export const ctestFileNameArrayIs = wrd.ctest + wrd.cFile + wrd.cName + wrd.cArray + sys.cSpaceIsColonSpace; // testFileNameArray is:
export const cvalidCommandTypesAre = wrd.cvalid + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.ctypes + sys.cSpaceAreColonSpace; // valid command types are:
export const cErrorYourSystemColon = msg.cERROR_Colon + wrd.cYour + bas.cSpace + wrd.csystem + bas.cComa + bas.cSpace; // ERROR: You're system,
export const cErrorIsNotYetSupported = bas.cSpace + wrd.cis + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cyet + bas.cSpace + wrd.csupported + bas.cExclamation; // is not yet supported!
export const cCAFfeinatedPathIs = app_sys.cCAFfeinated + wrd.cPath + sys.cSpaceIsColonSpace; // CAFfeinatedPath is:
export const cmessageDataIs = wrd.cmessage + wrd.cData + sys.cSpaceIsColonSpace; // messageData is:
export const ctestScriptFileNameIs = wrd.ctest + wrd.cScript + wrd.cFileName + sys.cSpaceIsColonSpace; // testScriptFileName is:
export const cconfigurationTestScriptFileNameIs = wrd.cconfiguration + bas.cSpace + ctestScriptFileNameIs; // configuration testScriptFileName is:
export const cServerConnected = wrd.cServer + bas.cSpace + wrd.cConnected; // Server Connected
export const ctestResult = wrd.ctest + wrd.cResult; // testResult
export const cSocketServer = wrd.cSocket + bas.cSpace + wrd.cserver + bas.cSpace; // Socket server
export const cDisconnectingGracefully = wrd.cDisconnecting + bas.cSpace + wrd.cgracefully; // Disconnecting gracefully
export const cSocketServerFailed = cSocketServer + wrd.cfailed + bas.cColon + bas.cSpace; // Socket server failed: 
export const cchunkIs = wrd.cchunk + sys.cSpaceIsColonSpace; // chunk is:
export const csendingTerminationCmdToClients = wrd.cSending + bas.cSpace + wrd.ctermination + bas.cSpace + gen.ccmd + bas.cSpace + wrd.cto + bas.cSpace + wrd.cclients + bas.cDot.repeat(3); // Sending termination cmd to clients...
export const cmainTestScriptFileNameIs = wrd.cmain + bas.cDot + app_cfg.ctestScriptFileName + sys.cSpaceIsColonSpace; // main.testScriptFileName is:
export const cmainApplicationRootPathIs = wrd.cmain + bas.cDot + msg.capplicationRootPathIs; // main.applicationRootPath is:
export const cshellCommandNotDefined = wrd.cShell + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cdefined; // Shell command not defined
export const cselectedShellNotFound = wrd.cSelected + bas.cSpace + wrd.cshell + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cfound + bas.cDot; // Selected shell not found.
export const cProcessWasSpawned = wrd.cProcess + bas.cSpace + wrd.cwas + bas.cSpace + wrd.cspawned + bas.cExclamation; // Process was spawned!
export const cPathToShellExecutableIs = wrd.cpath + wrd.cTo + wrd.cShell + wrd.cExecutable + sys.cSpaceIsColonSpace; // pathToShellExecutable is:
export const cshellScriptFileNameIs = wrd.cshell + wrd.cScript + bas.cSpace + wrd.cfile + bas.cSpace + wrd.cname + sys.cSpaceIsColonSpace; // shellScript file name is:
export const cerrorCreatingTheTmpFile = wrd.cError + bas.cSpace + wrd.ccreating + bas.cSpace + wrd.cthe + bas.cSpace + gen.ctmp + bas.cSpace + wrd.cfile + bas.cColon + bas.cSpace; // Error creating the tmp file:
export const cTmpFileSuccessfullyWritten = gen.cTmp + bas.cSpace + wrd.cfile + bas.cSpace + wrd.csuccessfully + bas.cSpace + wrd.cwritten + bas.cColon + bas.cSpace; // Tmp file successfully written:
export const cspawnCommandRawIs = wrd.cspawn + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cRAW + sys.cSpaceIsColonSpace; // spawn command RAW is:
export const cspawnCommandIs = wrd.cspawn + bas.cSpace + wrd.ccommand + sys.cSpaceIsColonSpace; // spawn command is:
export const cFailedExecutingColon = wrd.cFailed + bas.cSpace + wrd.cexecuting + bas.cColon + bas.cSpace; // Failed executing:

// ERROR Messages
export const cErrorSetBoilerPlateTestPathAndFileNameMessage = msg.cERROR_Colon + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cpath + bas.cSpace + wrd.cand + bas.cSpace + wrd.cfilename + bas.cSpace + wrd.cas + bas.cSpace + wrd.cinput + bas.cDot; // ERROR: Please enter a valid path and filename as input.
export const cErrorSetRootTestFolderPathMessage = msg.cERROR_Colon + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cpath + bas.cSpace + wrd.cas + bas.cSpace + wrd.cinput + bas.cDot; // ERROR: Please enter a valid path as input.
export const cErrorSetDefaultTestBehaviorMessage = msg.cERROR_Colon + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cinput + bas.cComa + bas.cSpace + gen.ctrue + bas.cSpace + wrd.cor + bas.cSpace + gen.cfalse + bas.cDot; // ERROR: Please enter a valid input, true or false.
export const cErrorSetBrowserListMessage = msg.cERROR_Colon + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.clist + bas.cSpace + wrd.cof + bas.cSpace + wrd.cbrowser + bas.cSpace + wrd.cnames + bas.cSpace + wrd.cto + bas.cSpace + wrd.cexecute + bas.cSpace + wrd.cwith + bas.cDot; // ERROR: Please enter a valid list of browser names to execute with.
export const csetExecutionEngineMessage01 = msg.cWARNING_Colon + wrd.cAll + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cexecution + bas.cSpace + wrd.cengines + bas.cSpace + wrd.care + bas.cSpace + wrd.cnot + bas.cSpace + wrd.ccurrently + bas.cSpace + wrd.csupported + bas.cSpace + wrd.cby + bas.cSpace + wrd.cour + bas.cSpace + wrd.ctesting + bas.cSpace + wrd.cengine + bas.cDot; // WARNING: All valid execution engines are not currently supported by our testing engine.
export const csetExecutionEngineMessage02 = msg.cWARNING_Colon + wrd.cOnly + bas.cSpace + app_sys.ctestcafe + bas.cSpace + wrd.cis + bas.cSpace + wrd.csupported + bas.cSpace + wrd.cas + bas.cSpace + bas.ca + bas.cSpace + wrd.ctesting + bas.cSpace + wrd.cengine + bas.cComa + bas.cSpace + wrd.cuntil + bas.cSpace + wrd.cwe + bas.cSpace + wrd.ccan + bas.cSpace + wrd.cfinish + bas.cSpace + wrd.cbuilding + bas.cSpace + wrd.cour + bas.cSpace + wrd.cnext + bas.cSpace + wrd.cgeneration + bas.cSpace + wrd.csystem + bas.cDot; // WARNING: Only testcafe is supported as a testing engine, until we can finish building our next generation system.
export const csetExecutionEngineMessage03 = msg.cWARNING_Colon + wrd.cThe + bas.cSpace + wrd.cexecution + bas.cSpace + wrd.cengine + bas.cSpace + wrd.cwill + bas.cSpace + wrd.cbe + bas.cSpace + wrd.chard + bas.cSpace + wrd.ccoded + bas.cSpace + wrd.cto + bas.cSpace + app_sys.ctestcafe + bas.cSpace + wrd.cfor + bas.cSpace + wrd.cnow + bas.cDot; // WARNING: The execution engine will be hard coded to testcafe for now.
export const csetExecutionEngineMessage04 = msg.cERROR_Colon + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cexecution + bas.cSpace + wrd.cengine + bas.cSpace + wrd.csuch + bas.cSpace + wrd.cas + bas.cColon + bas.cSpace; // ERROR: Please enter a valid execution engine such as:
export const csetReportPathConfigurationMessage01 = msg.cERROR_Colon + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.csystem + bas.cSpace + wrd.cpath + bas.cDot; // ERROR: Please enter a valid system path.
export const csetChildProcessLimitTimeMessage01 = msg.cERROR_Colon + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.cprocess + bas.cSpace + wrd.ctime + bas.cDot; // ERROR: Please enter a valid process time.
export const csetCommandTypeMessage01 = msg.cERROR_Colon + wrd.cPlease + bas.cSpace + wrd.center + bas.cSpace + bas.ca + bas.cSpace + wrd.cvalid + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.ctype + bas.cDot + bas.cSpace + wrd.cValid + bas.cSpace + wrd.ctypes + bas.cSpace + wrd.care + bas.cColon + bas.cSpace; // ERROR: Please enter a valid command type. Valid types are:
export const ctestMessage01 = msg.cERROR_Colon + wrd.cNo + bas.cSpace + wrd.cbrowsers + bas.cSpace + wrd.cspecified + bas.cDot + bas.cSpace + wrd.cPlease + bas.cSpace + wrd.cset + bas.cSpace + wrd.cthe + bas.cSpace + wrd.clist + bas.cSpace + wrd.cof + bas.cSpace + wrd.cbrowsers + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.csetting + bas.cColon + bas.cSpace; // ERROR: No browsers specified. Please set the list of browsers in the configuration setting:
export const ctestMessage02 = msg.cERROR_Colon + wrd.cNo + bas.cSpace + wrd.cexecution + bas.cSpace + wrd.cengine + bas.cSpace + wrd.cis + bas.cSpace + wrd.cspecified + bas.cDot + bas.cSpace + wrd.cPlease + bas.cSpace + wrd.cset + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cexecution + bas.cSpace + wrd.cengine + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.csetting + bas.cColon + bas.cSpace; // ERROR: No execution engine is specified. Please set the execution engine in the configuration setting:
export const ctestMessage03 = msg.cERROR_Colon + wrd.cNo + bas.cSpace + wrd.cboiler + bas.cSpace + wrd.cplate + bas.cSpace + wrd.ctest + bas.cSpace + wrd.cpath + bas.cSpace + wrd.cand + bas.cSpace + wrd.cfile + bas.cSpace + wrd.cname + bas.cSpace + wrd.cwere + bas.cSpace + wrd.cspecified + bas.cDot + bas.cSpace + wrd.cPlease + bas.cSpace + wrd.cset + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cboiler + bas.cSpace + wrd.cplate + bas.cSpace + wrd.ctest + bas.cSpace + wrd.cpath + bas.cSpace + wrd.cand + bas.cSpace + wrd.cfile + bas.cSpace + wrd.cname + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.csetting + bas.cColon + bas.cSpace; // ERROR: No boiler plate test path and file name were specified. Please set the boiler plate test path and file name in the configuration setting:
export const ctestMessage04 = msg.cERROR_Colon + wrd.cNo + bas.cSpace + wrd.creport + bas.cSpace + wrd.cpath + bas.cSpace + wrd.cspecified + bas.cDot + bas.cSpace + wrd.cPlease + bas.cSpace + wrd.cset + bas.cSpace + wrd.cthe + bas.cSpace + wrd.creport + bas.cSpace + wrd.cpath + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.csetting + bas.cColon + bas.cSpace; // ERROR: No report path specified. Please set the report path in the configuration setting:
export const ctestMessage05 = msg.cERROR_Colon + wrd.cNo + bas.cSpace + wrd.ctest + bas.cSpace + wrd.croot + bas.cSpace + wrd.cpath + bas.cSpace + wrd.cspecified + bas.cDot + bas.cSpace + wrd.cPlease + bas.cSpace + wrd.cset + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cpath + bas.cSpace + wrd.cin + bas.cSpace + wrd.cthe + bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.csetting + bas.cColon + bas.cSpace; // ERROR: No test root path specified. Please set the path in the configuration setting:
export const cErrorExecuteTestCommandMessage01 = msg.cERROR_Colon + wrd.cYou + bas.cSpace + wrd.cmust + bas.cSpace + wrd.cspecify + bas.cSpace + bas.ca + bas.cSpace + wrd.ctest + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cto + bas.cSpace + wrd.cexecute + bas.cDot + bas.cSpace + wrd.cCommand + sys.cSpaceIsColonSpace; // ERROR: You must specify a test command to execute. Command is:
export const cchildProcessCommandStringNotDefined = wrd.cChild + bas.cSpace + wrd.cprocess + bas.cSpace + wrd.ccommand + bas.cSpace + wrd.cstring + bas.cSpace + wrd.cnot + bas.cSpace + wrd.cdefined + bas.cDot; // Child process command string not defined.
export const cErrorSocketServerMessage01 = wrd.cError + bas.cSpace + gen.con + bas.cSpace + wrd.csocket + bas.cSpace + wrd.cserver + bas.cColon + bas.cSpace; // Error on socket server:
export const cErrorSocketServerMessage02 = wrd.cFailed + bas.cSpace + wrd.cretrieving + bas.cSpace + wrd.cdata + bas.cSpace + wrd.cfrom + bas.cSpace + wrd.cclient + bas.cColon + bas.cSpace; // Failed retrieving data from client:
export const cErrorSocketServerMessage03 = wrd.cServer + bas.cSpace + wrd.cconnection + bas.cSpace + wrd.chas + bas.cSpace + wrd.cended + bas.cExclamation; // Server connection has ended!

// SUCCESS Messages
export const cconfigurationSettingSuccessfullyChanged = bas.cSpace + wrd.cconfiguration + bas.cSpace + wrd.csetting + bas.cSpace + wrd.csuccessfully + bas.cSpace + wrd.cchanged + bas.cDot; // configuration setting successfully changed.
export const cSuccessSetBoilerPlateTestPathAndFileNameMessage = msg.cSUCCESS_Colon + app_cfg.cboilerPlateTestPathAndFileName + cconfigurationSettingSuccessfullyChanged; // SUCCESS: boilerPlateTestPathAndFileName configuration setting successfully changed.
export const cSuccessSetRootTestFolderPathMessage = msg.cSUCCESS_Colon + app_cfg.crootTestFolderPath + cconfigurationSettingSuccessfullyChanged; // SUCCESS: rootTestFolderPath configuration setting successfully changed.
export const cSuccessSetDefaultTestBehaviorMessage = msg.cSUCCESS_Colon + app_cfg.cdefaultRunAllTests + cconfigurationSettingSuccessfullyChanged; // SUCCESS: defaultRunAllTests configuration setting successfully changed.
export const cSuccessSetSlowExecutionMessage = msg.cSUCCESS_Colon + app_cfg.cslowExecution + cconfigurationSettingSuccessfullyChanged; // SUCCESS: slowExecution configuration setting successfully changed.
export const cSuccessSetMultiTestExecutionMessage = msg.cSUCCESS_Colon + app_cfg.cmultiTestExecution + cconfigurationSettingSuccessfullyChanged; // SUCCESS: multiTestExecution configuration setting successfully changed.
export const cSuccessSetBrowsersListMessage = msg.cSUCCESS_Colon + app_cfg.clistOfBrowsers + cconfigurationSettingSuccessfullyChanged; // SUCCESS: listOfBrowsers configuration setting successfully changed.
export const cSuccessSetExecutionEngineMessage = msg.cSUCCESS_Colon + app_cfg.cexecutionDriverEngine + cconfigurationSettingSuccessfullyChanged; // SUCCESS: executionDriverEngine configuration setting successfully changed.
export const cSuccessSetEnableReporterConfigurationMessage = msg.cSUCCESS_Colon + app_cfg.cenableReporter + cconfigurationSettingSuccessfullyChanged; // SUCCESS: enableReporter configuration setting successfully changed.
export const cSuccessSetReportPathConfigurationMessage = msg.cSUCCESS_Colon + app_cfg.creportPath + cconfigurationSettingSuccessfullyChanged; // SUCCESS: reportPath configuration setting successfully changed.
export const cSuccessSetChildProcessLimitTimeMessage = msg.cSUCCESS_Colon + app_cfg.cchildProcessLimitTime + cconfigurationSettingSuccessfullyChanged; // SUCCESS: childProcessLimitTime configuration setting successfully changed.
export const cSuccessSetCmdTypeMessage = msg.cSUCCESS_Colon + app_cfg.ccmdType + cconfigurationSettingSuccessfullyChanged; // SUCCESS: cmdType configuration setting successfully changed.