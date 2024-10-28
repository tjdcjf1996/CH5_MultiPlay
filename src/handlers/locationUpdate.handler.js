import { getGame } from '../session/game.session.js';

const locationUpdateHandler = (socket, userId, payload) => {
  const { x, y } = payload;
  const gameSession = getGame();

  const user = gameSession.getUser(userId);
  // 에러처리 해야함

  user.updatePosition(x, y);
  const packet = gameSession.getAllLocation(user.id);

  socket.write(packet);
};

export default locationUpdateHandler;
