import fs from 'fs';
import tmp from 'tmp';
import process from 'process';
import { PassThrough } from 'stream';
import childProcess from 'child_process';

export function shell(shellCommandToRun, options = {}) {
  // Shell object
  let shellscript = null;

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

    // NOTE: Igore this for now
    // shellCommandToRun = `
      // # List of common shell executables
      // shells=("bash" "zsh" "fish" "dash" "ksh" "tcsh" "ash" "sh")

      // # Iterate through the list of shells
      // for shell in "${shells[@]}"; do
          // if command -v "$shell" &> /dev/null; then
              // echo "Using shell, $shell"
              // # Do something with the found shell, e.g., execute a command
              // ${shellCommandToRun}
              // exit 0
          // fi
          // echo "No supported shells found"
      // done
    // `

    let scriptContent = `
    tell application "Terminal"
      if not (exists window 1) then reopen
      activate
      do script "clear -x; ${shellCommandToRun}" in window 1
    end tell
  `.trim();

    scriptContent = `#!/usr/bin/env bash

  osascript -e '${scriptContent}'
  `;

    shellscript = tmp.fileSync(tempFileOptions);

    fs.writeSync(shellscript.fd, scriptContent);

    if (fs.existsSync(shellscript.name) ) {
      // Create writeable stream to pipe output
      const streamToParent = new PassThrough();

      const child = childProcess.spawn('sh', [shellscript.name], {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
      });

      child.stdout.on('data', (data) => {
        if (process['send']) process.send(data);
      });

      child.stdout.on('message', (message) => {
        if (process['send']) process.send(message);
      });

      child.on('error', (err) => {});

      child.on('disconnect', () => {});

      child.on('exit', (code, signal) => {
        shellscript.removeCallback();

        // End stream
        streamToParent.end();
      });
    } else {
      console.log(`Failed executing ${shellscript.name}`);
    }
  } catch (error) {
    console.log(error);
  }
}
