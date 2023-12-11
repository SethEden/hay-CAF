import fs from 'fs';
import process from 'process';
import tmp from 'tmp';
import childProcess from 'child_process';
import { PassThrough } from 'stream';

export function shell(shellCommandToRun, cwd) {
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

    if (fs.existsSync(shellscript.name)) {
      // Create writeable stream to pipe output
      const streamToParent = new PassThrough();

      // console.log({ cwd });
      const child = childProcess.spawn('sh', [shellscript.name], {
        stdio: ['pipe', 'pipe', 'pipe', 'ipc'],
      });

      child.stdout.on('data', (data) => {
        if (process['send']) process.send(data);
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
