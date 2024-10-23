import { loadProtos } from './loadProto.js';

export const initServer = async () => {
  try {
    await loadProtos();
  } catch (err) {
    console.error(`[FAIL] Failed to initialize server`);
    process.exit(1);
  }
};
