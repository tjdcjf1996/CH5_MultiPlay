import { createResponse } from '../../utils/response/createResponse.js';
import { HANDLER_IDS, RESPONSE_SUCCESS_CODE } from '../constants/handlerIds.js';
import { addUser } from '../session/user.sessions.js';

export const initHandler = async (socket, userId, payload) => {
  addUser(socket, userId);
  const initResponse = createResponse(
    HANDLER_IDS.INITIAL,
    RESPONSE_SUCCESS_CODE,
    { userId: userId },
    userId,
  );

  socket.write(initResponse);
};
