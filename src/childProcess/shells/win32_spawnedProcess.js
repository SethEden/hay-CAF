import childProcess from 'child_process';

export function shell(shellCommandToRun, options = {shell: 'powershell'}) {
  let spawnOptions;

  switch('powershell'){
    case 'powershell':
      spawnOptions = [ 
        'start', ['C:/Windows/System32/WindowsPowerShell/v1.0/powershell.exe', '-NoProfile', '-Command', shellCommandToRun], {stdio: ['pipe', 'pipe', 'pipe', 'ipc'], shell: true}
      ]     
      break;
    case 'cmd':
      spawnOptions = [ 
        // 'prowershell.exe', ['-NoProfile', '-Command', shellCommandToRun], {stdio: ['pipe', 'pipe', 'pipe', 'ipc']}
      ]     
      break;
    default:
      console.log('Selected shell not found.')
  }

  try {
    if (typeof shellCommandToRun == 'undefined') {
      throw new Error('Shell command not defined');
    }

    // Powershell command to execute commands
    let scriptContent = `& "${shellCommandToRun}"`;

    let child;

    // Ensure the use of a single shell instance 
    if (child && !child.killed) {
      child.stdin.write(`${scriptContent}\n`, 'utf-8', (err) => {
        if (err) {
          throw new Error(err);
        }
      });
    } else {
      child = childProcess.spawn(spawnOptions[0], ...spawnOptions.slice(1))

      // Handle stdout, stderr, and exit events as needed
      child.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      child.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      child.on('exit', (code) => {
        console.log(`PowerShell process exited with code ${code}`);
      });
    }

  } catch (error) {
    console.log(error);
  }
}
