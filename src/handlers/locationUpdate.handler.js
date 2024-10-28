import { getGame } from '../session/game.session.js';

const locationUpdateHandler = (socket, userId, payload) => {
  const { x, y } = payload;
  let user, gameSession;
  try {
    gameSession = getGame();
    user = gameSession.getUser(userId);
  } catch (err) {
    console.error(err);
  }

  user.updatePosition(x, y);
  const packet = gameSession.getAllLocation(user.id);
  socket.write(packet);
};

export default locationUpdateHandler;
