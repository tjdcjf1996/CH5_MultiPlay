import { v4 as uuidV4 } from 'uuid';
import { addGame, getGame } from '../session/game.session.js';
import { getUserBySocket } from '../session/user.sessions.js';

export const createGameHandler = () => {
  const uuid = uuidV4();
  const createdGameSession = addGame(uuid);
  if (createdGameSession) {
    console.log(`[GAME_SESSION] Game session successfully created. - ${createdGameSession.id}`);
    return { status: 'success', message: 'Game session successfully created.' };
  }
  console.log(`[FAIL] Failed to create game session`);
  return { status: 'fail', message: 'Failed to create game session.' };
};

export const joinGameHandler = (user) => {
  const gameSession = getGame();
  gameSession.addUser(user);
};

export const exitGameHandler = (socket) => {
  const gameSession = getGame();
  const user = getUserBySocket(socket);
  gameSession.removeUser(user.id);
};
