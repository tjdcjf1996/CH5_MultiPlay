import { createGameHandler } from '../handlers/game.handler.js';
import { loadProtos } from './loadProto.js';

export const initServer = async () => {
  try {
    await loadProtos();
    createGameHandler();
  } catch (err) {
    console.error(`[FAIL] Failed to initialize server`, err);
    process.exit(1);
  }
};
