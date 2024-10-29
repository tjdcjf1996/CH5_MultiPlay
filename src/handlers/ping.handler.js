import Long from 'long';
import { getUserById } from '../session/user.sessions.js';

// function combineToInt64(low, high) {
//   return (BigInt(high) << 32n) | BigInt(low >>> 0);
// }

export const pingHandler = (socket, userId, payload) => {
  const user = getUserById(userId);

  //   const timestamp = combineToInt64(payload.timestamp.low, payload.timestamp.high);
  const timestamp = new Long(
    payload.timestamp.low,
    payload.timestamp.high,
    payload.timestamp.unsingend,
  );
  const date = Date.now();
  console.log((date - timestamp.toNumber()) / 2);
  //   user.pong(timestamp.toNumber());
};
