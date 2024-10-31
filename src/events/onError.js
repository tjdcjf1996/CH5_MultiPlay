import { exitGameSession } from '../handlers/game.handler.js';
import { removeUser } from '../session/user.sessions.js';

export const onError = (socket) => (err) => {
  // 게임 세션에서 나오는 함수
  exitGameSession(socket);
  // 유저 세션에서 해당 소켓 삭제하는 함수
  removeUser(socket);
  console.log('onErr', err?.message);
};
