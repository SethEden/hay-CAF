import process from 'process';
import { Server } from 'net';
import { Buffer } from 'buffer';

const SOCKET = {
  host: '127.0.0.1',
  port: 3000,
};

// Logger Server
export default function com_server() {
  const server = Server({});

  try {
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
          // const json = JSON.parse(buffer.toString());
          const json = safeJsonParse(chunk);
          // const {message, level, color} = (json);
          // console.log('json is: ', json);
          if (!json['data'] && json['message']) {
            const jsonMessage = json['message'];
            console.log(JSON.stringify(jsonMessage));
          }

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
      process.exit(0);
    });

    // Cleanup tasks
    process.on('SIGINT', () => {
      console.log('\r\nDisconnecting gracefully');
      process.exit();
    });

    server.listen(SOCKET.port, SOCKET.host);
  } catch (e) {
    if (e.code !== 'ENOENT') console.error(e);
  }
}

function safeJsonParse(data) {
  let parsed;

  try {
    parsed = JSON.parse(data);
  } catch (e) {
    parsed = JSON.parse(JSON.stringify(data));
  }

  return parsed;
}