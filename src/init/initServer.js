import { formatDate } from '../../utils/dateFormatter.js';
import { createGameHandler } from '../handlers/game.handler.js';
import pools from '../mysql/createPool.js';
import { testAllConnections } from '../mysql/testDataBase.js';
import { loadProtos } from './loadProto.js';

export const initServer = async () => {
  try {
    await loadProtos();
    createGameHandler();
    await testAllConnections(pools);
  } catch (err) {
    const date = new Date();
    console.error(`[${formatDate(date)} - FAIL] Failed to initialize server`, err);
    process.exit(1);
  }
};
