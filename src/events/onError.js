import { exitGameHandler } from '../handlers/game.handler.js';
import { removeUser } from '../session/user.sessions.js';

export const onError = (socket) => async (err) => {
  await exitGameHandler(socket);
  await removeUser(socket);
  console.log('onErr', err?.message);
};
