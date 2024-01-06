/**
 * @file spawnProcess.js
 * @description Creates a socket server through which clients will communicate.
 * @author Karl-Edward F.P. Jean-Mehu
 * @date 2023/12/29
 * @copyright Copyright © 2023-… by Karl-Edward F.P. Jean-Mehu. All rights reserved.
 */
import process from 'process';
const DEV_MODE = process.env.NODE_ENV?.toLowerCase() === 'development';
const platformFunctionName = `${process.platform}SpawnedProcess`;
const shellScript = await (async () => {
  const mod = `./shells/${platformFunctionName}.js`;
  return import(mod);
})();
// Obtain command string arg from parent process
if (!process.argv || process.argv.length <= 2) {
  throw new Error('Child process command string not defined.');
}
const temp = process.argv.slice(2);
const commandToRun = temp[0];
const shellOptions = JSON.parse(temp[1]);

// Throws an error if the function process for the
// detected OS is missing
// creates and returns the command to be spawned in child
if (typeof shellScript['shell'] !== 'function') {
  console.log(`type : ${shellScript['shell']}`);
  throw new Error(`Function ${platformFunctionName} is absent`);
}

if (DEV_MODE) console.log(`Spawning ${process.platform} process...`);
(async () => { await shellScript['shell'](commandToRun, shellOptions); } )()
