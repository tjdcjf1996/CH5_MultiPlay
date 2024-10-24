import { v4 as uuidV4 } from 'uuid';
import { addGame } from '../session/game.session.js';

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
