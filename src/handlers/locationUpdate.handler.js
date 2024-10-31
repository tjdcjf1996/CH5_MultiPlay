import { getMyGameSession } from '../session/game.session.js';
import { getUserById } from '../session/user.sessions.js';

const locationUpdateHandler = async (socket, userId, payload) => {
  const { x, y } = payload;
  let user, gameSession;
  try {
    gameSession = await getMyGameSession(userId);
    user = getUserById(userId);
  } catch (err) {
    console.error(err);
  }

  user.updatePosition(x, y);
  const packet = gameSession.getAllLocation(userId);
  if (packet !== -1) {
    socket.write(packet);
  }
};

export default locationUpdateHandler;
