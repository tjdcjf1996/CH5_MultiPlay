import { exitGameHandler } from '../handlers/game.handler.js';
import { removeUser } from '../session/user.sessions.js';

export const onEnd = (socket) => async () => {
  await removeUser(socket);
  exitGameHandler(socket);

  console.log('Client Disconnected');
};
