import { exitGameHandler } from '../handlers/game.handler.js';
import { removeUser } from '../session/user.sessions.js';

export const onEnd = (socket) => () => {
  exitGameHandler(socket);
  removeUser(socket);
  console.log('Client Disconnected');
};
