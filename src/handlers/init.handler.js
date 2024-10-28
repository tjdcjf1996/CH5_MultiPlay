import { createResponse } from '../../utils/response/createResponse.js';
import { HANDLER_IDS, RESPONSE_SUCCESS_CODE } from '../constants/handlerIds.js';
import { addUser } from '../session/user.sessions.js';
import { joinGameHandler } from './game.handler.js';

export const initHandler = async (socket, userId, payload) => {
  const { user, lastX, lastY } = await addUser(socket, userId, payload.latency);
  joinGameHandler(user);

  const initResponse = createResponse(
    HANDLER_IDS.INITIAL,
    RESPONSE_SUCCESS_CODE,
    { userId, lastX, lastY },
    userId,
  );

  socket.write(initResponse);
};
