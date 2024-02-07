/**
 * @file darwinSpawnedProcess.js
 * @module darwinSpawnedProcess 
 * @description Creates the shell to execute the given command on MacOs and Linux.
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

// framework.childProcess.shells.
const namespacePrefix = wrd.cframework + bas.cDot + wrd.cchild + wrd.cProcess + bas.cDot + wrd.cshells + bas.cDot + baseFileName + bas.cDot;

// Checks whether the provided Shell executable exists and is executable
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

    // Sets the shell used to invoke the desired command based on the user selected shell.
    let spawnOptions;
    let scriptContent = shellCommandToRun;
    switch(options.shell){
      case sys.cpowershell:
        spawnOptions = [gen.csh, []]     

        // Ensure powershell prompt appears before proceeding
        // shellCommandToRun =`Start-Sleep -Seconds 3
        //   Clear-Host
        //   ${shellCommandToRun}
        // `;
        shellCommandToRun = app_sys.cStartDashSleep + bas.cSpace + app_sys.cDashSeconds + bas.cSpace + num.c3 + bas.cCarRetNewLin +
          app_sys.cClearDashHost + bas.cCarRetNewLin + shellCommandToRun;

        // Powershell command to execute commands
        // scriptContent = `
        //   #!/usr/bin/env bash
        //   osascript -e 'tell application "Terminal"
        //       if not (exists window 1) then reopen
        //       activate
        //       do script "clear -x; pwsh -NoExit -Command ${shellCommandToRun}" in window 1
        //    end tell' 
        // `.trim();
        shellCommandToRun = shellCommandToRun + '; Exit'
        scriptContent = app_sys.cDarwinScriptContentLine1 +
          app_sys.cDarwinScriptContentLine2 +
          app_sys.cDarwinScriptContentLine3 +
          app_sys.cDarwinScriptContentLine4 + 
          app_sys.cDarwinScriptContentPowershellLineA + shellCommandToRun + app_sys.cDarwinScriptContentLine5B +
          app_sys.cDarwinScriptContentLine6;
        break;

      case sys.cbash:
        spawnOptions = [gen.csh, []]     
        // scriptContent = `
        //   #!/usr/bin/env bash
        //   osascript -e 'tell application "Terminal"
        //       if not (exists window 1) then reopen
        //       activate
        //       do script "clear -x; ${shellCommandToRun}" in window 1
        //    end tell'
        // `.trim();
        scriptContent = app_sys.cDarwinScriptContentLine1 +
          app_sys.cDarwinScriptContentLine2 +
          app_sys.cDarwinScriptContentLine3 +
          app_sys.cDarwinScriptContentLine4 + 
          app_sys.cDarwinScriptContentBashLineA + shellCommandToRun + app_sys.cDarwinScriptContentLine5B +
          app_sys.cDarwinScriptContentLine6;
        break;

      default:
        // Selected shell not found.
        throw new Error(app_msg.cselectedShellNotFound);
    }

    // Write shell script to temporary shell file
    shellScript = tmp.fileSync(tempFileOptions);
    fs.writeFile(shellScript.fd, scriptContent, gen.cUTF8, async (error) => {

    // Close temp file handle
    await fs.close(shellScript.fd);

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
          child.stdin.write(scriptContent + bas.cBackSlash + bas.cn, gen.cUTF8, (err) => {
            if (err) {
              console.log(err);
            }
          });
        } else {
          // Add temporary file to options
          spawnOptions[1].push(shellScript.name);

          // Check and proceed if the temporary file has successfully been written
          child = childProcess.spawn(spawnOptions[0], ...spawnOptions.slice(1), {
            stdio: wrd.cpipe,
            cwd: options.CAFfeinatedPath
          });

          // Handles actions taken when errors occurs on child process
          child.on(wrd.cerror, async (error) => {
            // let eventName = bas.cDot + wrd.cerror;
            // console.log(msg.cBEGIN_Space + namespacePrefix + functionName + eventName + msg.cSpaceEvent);
            console.log(msg.cerrorIs + error);
            // Error from child:
            if (process[wrd.csend]) process.send(bas.cCarRetNewLin + msg.cErrorFromChildColon + error);
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
    });
  } catch (error) {
    // Error on shell:
    console.log(msg.cErrorOnShell + error.message)
  }
  // console.log(msg.cEND_Space + namespacePrefix + functionName + msg.cSpaceFunction);
}
