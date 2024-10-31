import { getMyGameSession } from '../session/game.session.js';
import { getUserById } from '../session/user.sessions.js';

const locationUpdateHandler = (socket, userId, payload) => {
  const { x, y } = payload;
  let user, gameSession;
  try {
    gameSession = getMyGameSession(userId);
    user = getUserById(userId);
  } catch (err) {
    console.error(err);
  }

  user.updatePosition(x, y);
  const packet = gameSession.getAllLocation(userId);

  socket.write(packet);
};

export default locationUpdateHandler;
