import Game from '../classes/game.class.js';
import { gameSessions } from './sessions.js';

export const addGame = (id) => {
  const session = new Game(id);
  gameSessions.push(session);
  return session;
};
export const removeGame = (id) => {
  const idx = gameSessions.findIndex((game) => {
    game.id === id;
  });
  if (idx !== -1) return gameSessions.splice(idx, 1)[0];
};
export const getGame = (id) => {
  const findGame = gameSessions.find((game) => game.id === id);
  if (findGame) return findGame;
};
export const getAllGame = () => {
  return { ...gameSessions };
};
