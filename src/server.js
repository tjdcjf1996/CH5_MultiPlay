import net from 'net';
import { config } from './config/config.js';

const server = net.createServer();

server.listen(config.server.PORT, config.server.HOST, () => {
  console.log(`SERVER ON - ${config.server.HOST} : ${config.server.PORT}`);
});
