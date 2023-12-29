import process from 'process';
const DEV_MODE = process.env.NODE_ENV?.toLowerCase() === 'development';
const platformFunctionName = `${process.platform}_spawnedProcess`;
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
const rootPath = temp[1];

// Throws an error if the function process for the
// detected OS if missing
// creates and returns the command to be spawned in child
if (typeof shellScript['shell'] !== 'function') {
  console.log(`type : ${shellScript['shell']}`);
  throw new Error(`Function ${platformFunctionName} is absent`);
}

if (DEV_MODE) console.log(`Spawning ${process.platform} process...`);
shellScript['shell'](commandToRun, rootPath);
