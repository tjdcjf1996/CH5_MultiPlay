import pools from '../mysql/createPool.js';

export const loadUser = async (id) => {
  try {
    const [user] = await pools.USER_DB.query('SELECT x ,y FROM user WHERE id = ?', [id]);
    if (user.length !== 0) return { x: user[0].x, y: user[0].y };
    return [];
  } catch (err) {
    console.error(`${id} 로드 실패`);
  }
};

export const saveUser = async (id, x, y) => {
  try {
    const date = new Date();
    const [result] = await pools.USER_DB.query(
      `INSERT INTO user (id, device_id, last_login, created_at, x, y) VALUES (?,?,?,?,?,?)
     ON DUPLICATE KEY UPDATE x = VALUES(x), y = VALUES(y), last_login = VALUES(last_login)`,
      [id, id, date, date, x, y],
    );
    console.log(result);
  } catch (err) {
    console.error(`${id} 저장 실패`);
  }
};
