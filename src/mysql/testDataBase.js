import { formatDate } from '../../utils/dateFormatter.js';

const testDbConnection = async (pool, dbName) => {
  try {
    const [rows] = await pool.query('SELECT 1 + 1 AS solution');
    const date = new Date();
    console.log(`[${formatDate(date)} - CONNECT] *${dbName}* Database connected successfully `);
  } catch (err) {
    const date = new Date();
    console.error(`[${formatDate(date)} - FAIL] Failed to connect *${dbName}* database`);
    process.exit(1);
  }
};

export const testAllConnections = async (pools) => {
  await testDbConnection(pools.USER_DB, 'USER_DB');
};
