/**
 * @file linuxSpawnedProcess.js
 * @module linuxSpawnedProcess 
 * @description Creates the shell to execute the given command on MacOs and Linux.
 * @requires module:application.message.constants
 * @requires {@link https://www.npmjs.com/package/@haystacks/async|@haystacks/async}
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
import haystacks from '@haystacks/async'
import hayConst from '@haystacks/constants';
import fs from 'fs';
import tmp from 'tmp';
import process from 'process';
import childProcess from 'child_process';
import path from 'path';

const { bas, gen, num, sys, wrd } = hayConst;

const baseFileName = path.basename(
  import.meta.url,
  path.extname(import.meta.url),
);

// framework.childProcess.shells.
const namespacePrefix = wrd.cframework + bas.cDot + wrd.cchild + wrd.cProcess + bas.cDot + wrd.cshells + bas.cDot + baseFileName + bas.cDot;

// Checks whether the provided Shell
// executable exists and is executable
function isExecutableExists(pathToShellExecutable) {
  try {
    // Check if the file exists
    fs.accessSync(pathToShellExecutable, fs.constants.X_OK);
    return true; // File exists and is executable
  } catch (err) {
    if (err.code === gen.cENOENT || err.code === gen.cEACCES) {
        return false; // File does not exist or is not executable
    } else {
        throw err; // Other error, rethrow it
    }
  }
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
  let functionName = shell.name;
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.cBEGIN_Function);
  // await haystacks.consoleLog(namespacePrefix, functionName, app_msg.cshellCommandToRunIs + shellCommandToRun);
  
  // Shell object
  let shellscript = null;

  // File options for 
  // temporary shell script.
  const tempFileOptions = {
    mode: 0o755,
    postfix: gen.cDotsh,
    tmpdir: bas.cDot + bas.cForwardSlash,
    keep: true,
  };

  try {
    if (typeof shellCommandToRun == 'undefined') {
      // Shell command not defined.
      throw new Error(app_msg.cShellCommandNotDefined);
    }

    // Sets the shell used to invoke the desired command
    // based on the user selected shell.
    let spawnOptions;
    let scriptContent = shellCommandToRun;
    switch(options.shell){
      case sys.cpowershell:
        spawnOptions = [sys.cbash, []]     

        // Ensure powershell prompt appears
        // before proceeding
        // `Start-Sleep -Seconds 3 Clear-Host
        shellCommandToRun = app_sys.cStartDashSleep + bas.cSpace + app_sys.cDashSeconds + bas.cSpace + num.c3 +
          app_sys.cClearDashHost + shellCommandToRun;

        // Powershell command to execute commands
        scriptContent = `
        if pgrep -x "pwsh" > /dev/null; then
          xdotool search --onlyvisible --class "your_terminal_emulator_class" 
          key --clearmodifiers ctrl+shift+t type "pwsh -Command ./${shellCommandToRun}"
        else
          "gnome-terminal" -- pwsh -Command "./${shellCommandToRun}"
        fi`.trim();
        break;

      case sys.cbash:
        spawnOptions = [sys.cbash, []]     
        scriptContent = `
        #!/bin/bash
          if pgrep -x "bash" > /dev/null; then
              xdotool search --onlyvisible --class "gnome-terminal" key --clearmodifiers ctrl+shift+t type "bash -c ./${shellCommandToRun}; exit"
          else
              gnome-terminal -- bash -c "./${shellCommandToRun}; exit"
          fi`.trim();
        break;

      default:
        // Selected shell not found.
        console.log(app_msg.cSelectedShellNotFound);
    }

    // Write shell script to
    // temporary shell file
    shellscript = tmp.fileSync(tempFileOptions);
    fs.writeSync(shellscript.fd, scriptContent, gen.cutf8, async (error) => {

      if (error) {
        // Error creating temp file:
        process.stdout.write(app_msg.cErrorCreatingTempFile + error);
      } else {
        // Tmp file successfully written:
        process.stdout.write(app_msg.cTmpFileSuccessfullyWritten + shellscript.name);

        if (process[wrd.csend]) {
          process.send({[wrd.cName]: shellscript.name});
          console.log({[wrd.cName]: shellscript.name});
        }

    // Close temp file handle
    fs.close(shellscript.fd)

    // Add temporary file to options
    spawnOptions[1].push(shellscript.name);

    // Check and proceed if the temporary
    // file has successfully been written
    if (fs.existsSync(shellscript.name)) {
      const child = childProcess.spawn(spawnOptions[0], ...spawnOptions.slice(1), {
        stdio: wrd.cpipe,
        cwd: options.CAFfeinatePath
      });

      // Handles actions taken when
      // errors occurs on child process
      child.on(wrd.cerror, async (error) => {
        // let eventName = bas.cDot + wrd.cerror;
        // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event );
        // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cerrorIs + error );
        // Error from child:
        if (process[wrd.csend]) process.send(app_msg.cErrorFromChild + error);
        // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event ); 
      });

      child.on(wrd.cdisconnect, async () => {
        // let eventName = bas.cDot + wrd.cdisconnect;
        // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event );
        // Child disconnected.
        if (process[wrd.csend]) process.send(app_msg.cChildDisconnected);
        // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event ); 
      });

      child.on(wrd.cexit, async (code, signal) => {
        // let eventName = bas.cDot + wrd.cexit;
        // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event );
        // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.ccodeIs + code );
        // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.csignalIs + signal );
        // Exiting child process.
        if (process[wrd.csend]) process.send(app_msg.cExitingChildProcess);
        // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event ); 
        });
      }    
      }
    })
  } catch (error) {
    // Error on shell:
    process.stdout.write(app_msg.cErrorOnShell + error.message);
  }
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function); 
}
