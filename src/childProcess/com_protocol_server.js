import process from 'process';
import { Server } from 'net';
import { unlinkSync, writeFileSync, existsSync } from 'fs';
import path from 'path';
import os from 'os';
import { Buffer } from 'buffer';

// Get OS temp directory
const tempDir = os.tmpdir();

// Socket handle / file path
const SOCKET_HANDLE = path.join(tempDir, 'logs.sock');
if (!existsSync(SOCKET_HANDLE)) {
  writeFileSync(SOCKET_HANDLE, '');
}

// Deletes Socket file
const cleanup = () => {
  path.exists(SOCKET_HANDLE, (exists) => {
    if (exists) {
      unlinkSync(SOCKET_HANDLE);
    }
  });
};

// Logger Server
export default function com_server() {
  const server = Server({});

  try {
    unlinkSync(SOCKET_HANDLE);

    server.on('error', console.error);
    server.on('listening', () => console.log('\r\nListening...'));
    server.on('connection', (client) => {
      console.log('\r\nConnection...');

      // let chunks = [];
      let buffer = Buffer.from('');

      client.on('error', console.error);
      client.on('data', (chunk) => {
        buffer = Buffer.concat([buffer, chunk]);
        try {
          const json = JSON.parse(buffer.toString());
          console.log(json);

          // reset buffer
          buffer = Buffer.from('');
        } catch (e) {
          throw new Error(e);
        }
      });
      client.on('end', () => {
        // TODO: idea - Create file, email or even sms reports
        console.log('\r\nConnection ended!');
      });
    });
    server.on('close', (code, signal) => {
      // cleanup();
      process.exit(0);
    });

    // Cleanup tasks
    process.on('SIGINT', () => {
      console.log('\r\nDisconnecting gracefully');
      cleanup();
    });

    server.listen(SOCKET_HANDLE);
  } catch (e) {
    if (e.code !== 'ENOENT') console.error(e);
  }
}
