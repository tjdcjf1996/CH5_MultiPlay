import { exitGameHandler } from '../handlers/game.handler.js';
import { removeUser } from '../session/user.sessions.js';

export const onError = (socket) => (err) => {
  exitGameHandler(socket);
  removeUser(socket);
  console.log('onErr', err?.message);
};
