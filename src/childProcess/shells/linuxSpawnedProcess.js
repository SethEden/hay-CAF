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
// External imports
import haystacks from '@haystacks/async'
import hayConst from '@haystacks/constants';
import fs from 'fs';
import tmp from 'tmp';
import process from 'process';
import childProcess from 'child_process';
import path from 'path';

const { bas, msg, wrd } = hayConst;

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
    if (err.code === 'ENOENT' || err.code === 'EACCES') {
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
    postfix: '.sh',
    tmpdir: './',
    keep: true,
  };

  try {
    if (typeof shellCommandToRun == 'undefined') {
      throw new Error('Shell command not defined');
    }

    // Sets the shell used to invoke the desired command
    // based on the user selected shell.
    let spawnOptions;
    let scriptContent = shellCommandToRun;
    switch(options.shell){
      case 'powershell':
        spawnOptions = ['bash', []]     

        // Ensure powershell prompt appears
        // before proceeding
        shellCommandToRun =`Start-Sleep -Seconds 3
          Clear-Host
          ${shellCommandToRun}
        `;

        // Powershell command to execute commands
        scriptContent = `
        if pgrep -x "pwsh" > /dev/null; then
          xdotool search --onlyvisible --class "your_terminal_emulator_class" 
          key --clearmodifiers ctrl+shift+t type "pwsh -Command ./${shellCommandToRun}"
        else
          your_terminal_emulator_command -- pwsh -Command "./${shellCommandToRun}"
        fi`.trim();
        break;

      case 'bash':
        spawnOptions = ['bash', []]     
        scriptContent = `
        #!/bin/bash
          if pgrep -x "bash" > /dev/null; then
              xdotool search --onlyvisible --class "gnome-terminal" key --clearmodifiers ctrl+shift+t type "bash -c ./${shellCommandToRun}; exit"
          else
              gnome-terminal -- bash -c "./${shellCommandToRun}; exit"
          fi`.trim();
        break;

      default:
        console.log('Selected shell not found.')
    }

    // Write shell script to
    // temporary shell file
    shellscript = tmp.fileSync(tempFileOptions);
    fs.writeSync(shellscript.fd, scriptContent);

    // Close temp file handle
    fs.close(shellscript.fd)

    // Add temporary file to options
    spawnOptions[1].push(shellscript.name);

    // Check and proceed if the temporary
    // file has successfuly been written
    if (fs.existsSync(shellscript.name)) {
      const child = childProcess.spawn(spawnOptions[0], ...spawnOptions.slice(1), {
        stdio: 'pipe',
        cwd: options.CAFfeinatePath
      });

      // Handles actions taken when
      // errors occurs on child process
      child.on('error', async (error) => {
        // let eventName = bas.cDot + wrd.cerror;
        // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event );
        // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cerrorIs + error );
        if (process['send']) process.send(`\r\nError from child: ${error}`);
        // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event ); 
      });

      child.on('disconnect', async () => {
        // let eventName = bas.cDot + wrd.cdisconnect;
        // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event );
        if (process['send']) process.send('\r\nChild disconnected');
        // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event ); 
      });

      child.on('exit', async (code, signal) => {
        // let eventName = bas.cDot + wrd.cexit;
        // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event );
        // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.ccodeIs + code );
        // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.csignalIs + signal );
        if (process['send']) process.send('\r\nExiting child process');
        // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event ); 
      });
    } else {
      console.log(`Failed executing ${shellscript.name}`);
    }
  } catch (error) {
    console.log(`Error on shell: ${error.message}`);
  }
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function); 
}