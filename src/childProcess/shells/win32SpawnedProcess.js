/**
 * @file win32SpawnedProcess.js
 * @module win32SpawnedProcess
 * @description Creates the shell to execute the given command on Windows. 
 * @requires module:application.message.constants
 * @requires module:application.system.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://nodejs.dev/learn/the-nodejs-fs-module|fs}
 * @requires {@link https://www.npmjs.com/package/tmp|tmp}
 * @requires {@link https://nodejs.dev/learn/the-nodejs-process-module|process}
 * @requires {@link https://nodejs.dev/learn/the-nodejs-child_process-module|child_process}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Karl-Edward FP Jean-Mehu
 * @date 2023/01/02
 * @copyright Copyright © 2023-… by Karl-Edward FP Jean-Mehu. All rights reserved.
 */

// Internal imports
import * as app_msg from '../../constants/application.message.constants.js';
import * as app_sys from '../../constants/application.system.constants.js';
// External imports
import hayConst from '@haystacks/constants';
import fs from 'fs';
import tmp from 'tmp';
import process from 'process';
import childProcess from 'child_process';
import path from 'path';

const { bas, biz, gen, msg, num, sys, wrd } = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));

// framework.childProcess.shells.win32SpawnedProcess.
const namespacePrefix = wrd.cframework + bas.cDot + wrd.cchild + wrd.cProcess + bas.cDot + wrd.cshells + bas.cDot + baseFileName + bas.cDot;

// Checks whether the provided Shell executable exists and is executable
// TODO: check each executable before running commands
function isExecutableExists(pathToShellExecutable) {
  // let functionName = isExecutableExists.name;
  // console.log(msg.cBEGIN_Space + namespacePrefix + functionName + msg.cSpaceFunction);
  // pathToShellExecutable is:
  // console.log(app_msg.cPathToShellExecutableIs + pathToShellExecutable);
  let returnData = false;
  try {
    // Check if the file exists
    fs.accessSync(pathToShellExecutable, fs.constants.X_OK);
    returnData = true; // File exists and is executable
  } catch (err) {
    if (err.code === gen.cENOENT || err.code === gen.cEACCES) {
        returnData = false; // File does not exist or is not executable
    } else {
        throw err; // Other error, rethrow it
    }
  }
  // console.log(msg.creturnDataIs + returnData);
  // console.log(msg.cEND_Space + namespacePrefix + functionName + msg.cSpaceFunction);
  return returnData;
}

/**
 * @function shell
 * @description Creates temporary shell and executes given command.
 * @param {string} shellCommandToRun The command to be executed.
 * @param {Object} options Options to change behavior how shell is executed.
 * @param {string} [options.shell = "powershell|cmd|bash"] Optional. Options to change behavior how shell is executed 
 * @param {function(arg1)=} callback Optional callback to send data back to spawnedProcess 
 * @return {void}
 * @author Karl-Edward FP Jean-Mehu
 * @date 2023/01/02
 */
export async function shell(shellCommandToRun, options, callback) {
  // let functionName = shell.name;
  // console.log(msg.cBEGIN_Space + namespacePrefix + functionName + msg.cSpaceFunction);
  // shellCommandToRun is:
  // console.log(app_msg.cshellCommandToRunIs + shellCommandToRun);
  // options are:
  // console.log(msg.coptionsAre + options);

  // Shell object
  let shellScript = null;

  // File options for temporary shell script.
  const tempFileOptions = {
    mode: 0o755,
    postfix: gen.cDotsh,
    tmpdir: bas.cDot + bas.cForwardSlash,
    keep: true,
  };

  try {
    if (typeof shellCommandToRun == 'undefined') {
      // Shell command not defined
      throw new Error(app_msg.cshellCommandNotDefined);
    }

    // Sets the shell used to invoke the desired command
    // based on the user selected shell.
    let spawnOptions;
    let scriptContent = shellCommandToRun;

    // TODO: Add automatic retry if desired shell did not work.
    switch(options.shell.toLowerCase()) {
      case sys.cpowershell:
        spawnOptions = [ 
          wrd.cstart, [sys.cpowershell, app_sys.cdashNoExit, app_sys.cdashNoProfile, app_sys.cdashExecutionPolicy,
            wrd.cBypass, app_sys.cInvokeDashExpression, app_sys.cdashCommand], {shell: true}
        ];

        // Script extension
        tempFileOptions.postfix = gen.cDotps1;

        // Closes the window 3 seconds
        // after the command completes
        shellCommandToRun = shellCommandToRun + `; Start-Sleep -Seconds 3; Exit`;

        // Powershell command to execute commands
        scriptContent = app_sys.cSetDashLocation + bas.cSpace + bas.cDoubleQuote + options.CAFfeinatedPath + bas.cDoubleQuote + bas.cCarRetNewLin + 
        shellCommandToRun;
        break;

      case gen.ccmd: case sys.cdos:
        spawnOptions = [gen.ccmd, [bas.cForwardSlash + bas.cc]];

        // Closes the window 3 seconds
        // after the command completes
        shellCommandToRun = shellCommandToRun + ` & timeout /t 3 nobreak & exit`;

        // Powershell command to execute commands
        // Need to cd into the CAFfeinated folder first,
        // because for some reason testcafe needs to be running from the local instance of testcafe, not the global instance of testcafe.
        // Without this, the test will start, run for a few seconds and then FAIL!
        // cd ${options.CAFfeinatedPath} && start /wait ${shellCommandToRun}
        scriptContent = bas.ccd + bas.cSpace + options.CAFfeinatedPath + app_sys.cDosBatAndStartWait + shellCommandToRun;

        // Script extension
        tempFileOptions.postfix = gen.cDotbat;
        break;

      case sys.cbash:
        // spawnOptions = [wrd.cstart, ['"C:/Program Files/Git/git-bash.exe"']]; // WAS WORKING PERFECTLY
        // spawnOptions = [wrd.cstart, ['"git-bash"']]; // ALSO WAS WORKING PERFECTLY
        spawnOptions = [wrd.cstart, [bas.cDoubleQuote + sys.cgitDashBash + bas.cDoubleQuote]];

        // Closes the window 3 seconds
        // after the command completes
        shellCommandToRun = shellCommandToRun + `; sleep 3; exit`;

        // Bash command to execute commands
        scriptContent = bas.ccd + bas.cSpace + options.CAFfeinatedPath + bas.cCarRetNewLin + shellCommandToRun + bas.cCarRetNewLin + bas.cDollar + wrd.cSHELL;
        break;

      default:
        // Selected shell not found.
        throw new Error(app_msg.cselectedShellNotFound);
    }

    // Write shell script to temporary shell file
    shellScript = tmp.fileSync(tempFileOptions);
    // shellScript file name is:
    // console.log(app_msg.cshellScriptFileNameIs + shellScript.name);
    await fs.writeFile(shellScript.fd, scriptContent, gen.cUTF8, async (error) => {
      await fs.close(shellScript.fd); // Close the file explicitly to avoid confusion.
      // Script content is:
      // console.log(msg.cscriptContentIs + scriptContent);

      switch(options.shell.toLowerCase()) {
      case sys.cpowershell:
        // spawnOptions[1].push(`\\"@(${shellScript.name})\\"`); // WORKING ALL THE WAY, but without ECHO in child process
        // No need for double back slashes when it's like this, don't need to escape the escape to escape.
        spawnOptions[1].push(bas.cBackSlash + bas.cDoubleQuote + bas.cAt + bas.cOpenParenthesis + shellScript.name + 
          bas.cCloseParenthesis + bas.cBackSlash + bas.cDoubleQuote);
        break;
      case sys.ccmd: case sys.cdos:
        spawnOptions[1].push(shellScript.name); // DOS
        break;
      case sys.cbash:
        spawnOptions[1].push(shellScript.name); // BASH
        break;
      default:
      }
      
      // Check and proceed if the temporary file has successfully been written
      if (error) {
        // Error creating the tmp file
        // console.log(app_msg.cerrorCreatingTheTmpFile + error);
      } else {
        // Tmp file successfully written:
        // console.log(app_msg.cTmpFileSuccessfullyWritten + shellScript.name);
        // await callback(shellScript.name); // Call the callback function to pass back the name of the script file.
        if (process[wrd.csend]) {
          process.send({[wrd.cName]: shellScript.name});
        }

        // Ensure the use of a single shell instance 
        let child;
        if (child && !child.killed) {
          // ${scriptContent}/n
          child.stdin.write(scriptContent + bas.cBackSlash + bas.cn, gen.cUTF8, (err) => {
            if (err) {
              console.log(err);
            }
          });
        } else {
          // Opening [bash|powershell and etc]
          // Opening:
          console.log(msg.cOpeningColon + options.shell);
          // spawn command RAW is:
          // console.log(app_msg.cspawnCommandRawIs + spawnOptions.join(bas.cSpace));
          // let spawnOptionsString = spawnOptions[0] + ' ' + [...spawnOptions.slice(1)].join(' ');
          // spawn command is:
          // console.log(app_msg.cspawnCommandIs + spawnOptionsString);
          child = childProcess.spawn(spawnOptions[0], ...spawnOptions.slice(1), {shell: true});

          // Handles actions taken when errors occurs on child process
          child.on(wrd.cerror, async (error) => {
            // let eventName = bas.cDot + wrd.cerror;
            // console.log(msg.cBEGIN_Space + namespacePrefix + functionName + eventName + msg.cSpaceEvent);
            console.log(msg.cerrorIs + error);
            // Error from child:
            if (process[wrd.csend]) process.send(bas.cCarRetNewLin + msg.cErrorFromChildColon + error);
            // console.log(msg.cEND_Space + namespacePrefix + functionName + eventName +msg.cSpaceEvent);
          });

          child.on(wrd.cspawn, async () => {
            // let eventName = bas.cDot + wrd.cspawn;
            // console.log(msg.cBEGIN_Space + namespacePrefix + functionName + eventName + msg.cSpaceEvent);
            console.log(app_msg.cProcessWasSpawned);
            // console.log(msg.cEND_Space + namespacePrefix + functionName + eventName +msg.cSpaceEvent);
          });

          child.on(wrd.cdisconnect, async () => {
            // let eventName = bas.cDot + wrd.cdisconnect;
            // console.log(msg.cBEGIN_Space + namespacePrefix + functionName + eventName + msg.cSpaceEvent);
            if (process[wrd.csend]) process.send(bas.cCarRetNewLin + msg.cChildDisconnected);
            // console.log(msg.cEND_Space + namespacePrefix + functionName + eventName +msg.cSpaceEvent);
          });

          child.on(wrd.cexit, async (code, signal) => {
            // let eventName = bas.cDot + wrd.cexit;
            // console.log(msg.cBEGIN_Space + namespacePrefix + functionName + eventName + msg.cSpaceEvent);
            // console.log(msg.ccodeIs + code);
            // console.log(msg.csignalIs + signal);
            // Exiting child process
            if (process[wrd.csend]) process.send(bas.cCarRetNewLin + msg.cExitingChildProcess);
            // console.log(msg.cEND_Space + namespacePrefix + functionName + eventName +msg.cSpaceEvent);
          });
        }
      }
    })
  } catch (error) {
    // Error on shell:
    console.log(msg.cErrorOnShell + error.message)
  } 
  // console.log(msg.cEND_Space + namespacePrefix + functionName + msg.cSpaceFunction);
}
