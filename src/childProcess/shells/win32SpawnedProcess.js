/**
 * @file win32SpawnedProcess.js
 * @module win32SpawnedProcess 
 * @description Creates the shell to execute the given command on Windows. 
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
// TODO: check each executable before running commands
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
 * @param {Object} options Options to change behavior how shell is executed.
 * @param {string} [options.shell = "powershell|cmd|bash"] Optional. Options to change behavior how shell is executed 
 * @return {void}
 * @author Karl-Edward FP Jean-Mehu
 * @date 2023/01/02
 */
export async function shell(shellCommandToRun, options) {
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

    // TODO: Add auto matic retry if 
    // desired shell don't work.
    switch(options.shell){
      case 'powershell':
        spawnOptions = [ 
          'start', ['powershell', '-NoExit', '-NoProfile', '-ExecutionPolicy', 'Bypass', 'Invoke-Expression', '-Command'], {shell: true}
        ]     
        // Script extension
        tempFileOptions.postfix = '.ps1';

        // Powershell command to execute commands
        scriptContent = `
        Set-Location "${options.CAFfeinatedPath}"
        ${shellCommandToRun}`;
        break;

      case 'cmd':
        spawnOptions = ['cmd', ['/c']];

        // Powershell command to execute commands
        // scriptContent = shellCommandToRun;
        // scriptContent = `start /wait ${shellCommandToRun}`;
        scriptContent = `start /wait ${shellCommandToRun}`;
        // scriptContent = 'start /wait';

        // Script extension
        tempFileOptions.postfix = '.bat';
        break;

      case 'bash':
        spawnOptions = ['start', ['bash', '/c']];

        // Bash command to execute commands
        scriptContent = `
          #!/usr/bin/env bash
          "clear -x; ${shellCommandToRun}"
        `.trim();
        break;

      default:
        throw new Error('Selected shell not found.')
    }

    // Write shell script to
    // temporary shell file
    shellscript = tmp.fileSync(tempFileOptions);
    await fs.writeFile(shellscript.fd, scriptContent, 'utf8', (error) => {
    console.log(`\r\nScript content is: ${scriptContent}`)

    // Add temp file to options
    spawnOptions[1].push(shellscript.name);

    // Check and proceed if the temporary
    // file has successfully been written
    if (error) {
      process.stdout.write(`\r\nError creating temp file: ${error}`)
    } else {
      process.stdout.write(`\r\nTmp file uccessfully written: ${shellscript.name})

      // Ensure the use of a single shell instance 
      let child;
      if (child && !child.killed) {
        child.stdin.write(`${scriptContent}\n`, 'utf-8', (err) => {
          if (err) {
            console.log(err);
          }
        });
      } else {

          // Opening [bash|powershell and etc]
          process.stdout.write(`\r\nOpening ${options.shell}`);
          // child = childProcess.spawn(spawnOptions[0], ...spawnOptions.slice(1));
          const spawnOptionsLen = spawnOptions.length;
          let spawnOptionsString2 = [...spawnOptions.slice(1, spawnOptionsLen), `"${spawnOptions[-1]}"`].join(' ');
          process.stdout.write(`\r\nspawn command is: ${spawnOptions[0]} ${spawnOptionsString2}`);
          child = childProcess.spawn(spawnOptions[0], ...[spawnOptions.slice(1, spawnOptionsLen), `"${spawnOptions[-1]}"`]);

          // Handles actions taken when
          // errors occurs on child process
          child.on('error', (error) => {
          // let eventName = bas.cDot + wrd.cerror;
          // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event );
          // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cerrorIs + error );
          if (process['send']) process.send(`\r\nError from child: ${error}`);
          // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event ); 
          });

        child.on('disconnect', async () => {
          let eventName = bas.cDot + wrd.cdisconnect;
          // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event );
          if (process['send']) process.send('\r\nChild disconnected');
          // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event ); 
        });

        child.on('exit', async (code, signal) => {
          let eventName = bas.cDot + wrd.cexit;
          // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cBEGIN_Event );
          // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.ccodeIs + code );
          // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.csignalIs + signal );
          if (process['send']) process.send('\r\nExiting child process');
          shellscript.removeCallback();
          // await haystacks.consoleLog(namespacePrefix, functionName + eventName, msg.cEND_Event ); 
        });
      }
    }
  })

} catch (error) {
    process.stdout.write(`\r\nError on shell: ${error.message}`)
  }
  // await haystacks.consoleLog(namespacePrefix, functionName, msg.cEND_Function); 
}
