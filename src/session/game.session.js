import Game from '../classes/game.class.js';
import { MAX_PLAYERS } from '../constants/sessions.js';
import { createGameHandler } from '../handlers/game.handler.js';
import { gameSessions } from './sessions.js';

export const addGame = (id) => {
  const session = new Game(id);
  gameSessions.push(session);
  return session;
};

export const removeGame = (id) => {
  const idx = gameSessions.findIndex((game) => {
    return game.id === id;
  });
  if (idx !== -1) return gameSessions.splice(idx, 1)[0];
};

export const getGame = () => {
  if (gameSessions.length === 0) createGameHandler();

  const sessions = gameSessions
    .map((session) => {
      const userCnt = session.getUserCount();
      return userCnt < MAX_PLAYERS ? [session, userCnt] : null;
    })
    .filter(Boolean);

  if (sessions.length === 0) {
    createGameHandler();
    return gameSessions[gameSessions.length - 1];
  }

  sessions.sort((a, b) => a[1] - b[1]);

  return sessions[0][0];
};

export const getMyGameSession = async (userId) => {
  for (const gameSession of gameSessions) {
    if (gameSession.getUser(userId) !== -1) return gameSession;
  }
};

export const getAllGame = () => {
  return gameSessions.map((session) => ({ ...session }));
};
