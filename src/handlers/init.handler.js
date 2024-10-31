import { createResponse } from '../../utils/response/createResponse.js';
import { HANDLER_IDS, RESPONSE_FAIL_CODE, RESPONSE_SUCCESS_CODE } from '../constants/handlerIds.js';
import { addUser, getUserById } from '../session/user.sessions.js';
import { joinGameHandler } from './game.handler.js';

export const initHandler = async (socket, userId, payload) => {
  let initResponse;
  const isLoggedIn = getUserById(userId);
  // 이미 로그인 된 userId라면, RESPONSE_FAIL_CODE 반환
  if (isLoggedIn) {
    initResponse = createResponse(HANDLER_IDS.INITIAL, RESPONSE_FAIL_CODE, { userId }, userId);
  } else {
    // 유저 세션 등록
    const { user, lastX, lastY } = await addUser(socket, userId, payload.latency);
    // 게임 세션 등록
    joinGameHandler(user);
    initResponse = createResponse(
      HANDLER_IDS.INITIAL,
      RESPONSE_SUCCESS_CODE,
      { userId, lastX, lastY },
      userId,
    );
  }

  socket.write(initResponse);
};
