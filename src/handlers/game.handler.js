import { v4 as uuidV4 } from 'uuid';
import {
  addGameSession,
  getGameSession,
  getMyGameSession,
  removeGameSession,
} from '../session/game.session.js';
import { getUserBySocket } from '../session/user.sessions.js';

export const createGameSession = () => {
  const uuid = uuidV4();
  // 게임 세션 아이디는 uuid 활용 생성
  const createdGameSession = addGameSession(uuid);
  if (createdGameSession) {
    console.log(`[GAME_SESSION] Game session successfully created. - ${createdGameSession.id}`);
  }
  console.log(`[FAIL] Failed to create game session`);
};

export const joinGameSession = (user) => {
  const gameSession = getGameSession();
  console.log(gameSession);
  gameSession.addUser(user);
};

export const exitGameSession = (socket) => {
  const user = getUserBySocket(socket);
  const gameSession = getMyGameSession(user.id);
  gameSession.removeUser(user.id);
  if (gameSession.getUserCount() === 0) {
    gameSession.deleteLatency();
    removeGameSession(gameSession.id);
  }
};
