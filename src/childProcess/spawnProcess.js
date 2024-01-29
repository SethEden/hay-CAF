/**
 * @file spawnProcess.js
 * @description Creates a socket server through which clients will communicate.
 * @author Karl-Edward F.P. Jean-Mehu
 * @date 2023/12/29
 * @copyright Copyright © 2023-… by Karl-Edward F.P. Jean-Mehu. All rights reserved.
 */

// Internal Imports
import * as app_msg from '../constants/application.message.constants.js';
import * as app_sys from '../constants/application.system.constants.js';
// External Imports
import process from 'process';
import haystacks from '@haystacks/async'
import hayConst from '@haystacks/constants';

const { bas, gen, msg, wrd } = hayConst;
const DEV_MODE = process.env.NODE_ENV?.toLowerCase() === wrd.cdevelopment;
const platformFunctionName = process.platform + app_sys.cSpawnedProcess;
const shellScript = await (async () => {
  // ./shells/${platformFunctionName}.js
  const mod = bas.cDot + bas.cForwardSlash + wrd.cshells + bas.cForwardSlash + platformFunctionName + gen.cDotjs;
  return import(mod);
})();
// Obtain command string arg from parent process
if (!process.argv || process.argv.length <= 2) {
  // Child process command string not defined.
  throw new Error(app_msg.cchildProcessCommandStringNotDefined);
}
const temp = process.argv.slice(2);
const commandToRun = temp[0];
const shellOptions = JSON.parse(temp[1]);

// Throws an error if the function process for the detected OS is missing.
// Creates and returns the command to be spawned in the child.
if (typeof shellScript[wrd.cshell] !== wrd.cfunction) {
  console.log(wrd.ctype + bas.cColon + bas.cSpace + shellScript[wrd.cshell]);
  throw new Error(wrd.cFunction + bas.cSpace + platformFunctionName + bas.cSpace + msg.cisAbsent);
}

if (DEV_MODE) console.log(wrd.cSpawning + bas.cSpace + process.platform + bas.cSpace + wrd.cprocess + bas.cDot.repeat(3));
(async () => {
  // Run the shell function in the shellScript file.
  shellScript[wrd.cshell](commandToRun, shellOptions, async () => {});
})();
