import Game from '../classes/game.class.js';
import { MAX_PLAYERS } from '../constants/sessions.js';
import { createGameSession } from '../handlers/game.handler.js';
import { gameSessions } from './sessions.js';

// 새로운 게임 세션을 생성하고 gameSessions 배열에 추가한 뒤, 해당 세션을 반환
export const addGameSession = (id) => {
  const session = new Game(id);
  gameSessions.push(session);
  return session;
};

// 주어진 ID에 해당하는 게임 세션을 제거하고, 제거된 세션 반환
export const removeGameSession = (id) => {
  const idx = gameSessions.findIndex((game) => {
    return game.id === id;
  });
  if (idx !== -1) return gameSessions.splice(idx, 1)[0]; // 배열에서 제거 후 반환
};

// 사용자가 참여할 수 있는 게임 세션을 찾고, 없거나 모두 인원 초과시 새로운 세션을 생성하여 반환
// constants/session.js 에서 세션 당 인원 수 설정

export const getGameSession = () => {
  // 현재 세션에서 사용자가 참여 가능한 세션을 필터링
  const sessions = gameSessions
    .map((session) => {
      const userCnt = session.getUserCount();
      return userCnt < MAX_PLAYERS ? [session, userCnt] : null;
    })
    .filter(Boolean);

  if (sessions.length === 0) {
    // 참여 가능한 세션이 없으면 새로운 게임 세션 생성
    createGameSession();
    return gameSessions[gameSessions.length - 1]; // 마지막으로 생성된 세션 반환
  }

  // 참여 가능한 세션을 사용자 수가 적은 순서로 정렬
  sessions.sort((a, b) => a[1] - b[1]);

  return sessions[0][0]; // 가장 적은 사용자 수가 있는 세션 반환
};

// 주어진 사용자 ID에 해당하는 사용자가 있는 게임 세션을 찾아 반환
export const getMyGameSession = (userId) => {
  for (const gameSession of gameSessions) {
    if (gameSession.getUser(userId)) return gameSession;
  }
};

// 모든 게임 세션의 정보를 복사하여 반환
export const getAllGame = () => {
  return gameSessions.map((session) => ({ ...session }));
};
