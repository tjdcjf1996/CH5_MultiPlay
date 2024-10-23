import net from 'net';
import { config } from './config/config.js';
import { onConnection } from './events/onConnection.js';
import { initServer } from './init/initServer.js';

const server = net.createServer(onConnection);

initServer().then(() => {
  server.listen(config.server.PORT, config.server.HOST, () => {
    console.log(`SERVER ON - ${config.server.HOST} : ${config.server.PORT}`);
  });
});
