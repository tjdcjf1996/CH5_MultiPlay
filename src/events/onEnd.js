import { exitGameHandler } from '../handlers/game.handler.js';
import { removeUser } from '../session/user.sessions.js';

export const onEnd = (socket) => async () => {
  await exitGameHandler(socket);
  removeUser(socket);
  console.log('Client Disconnected');
};
