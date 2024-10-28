import { createLocationPacket } from '../../utils/notification/game.notification.js';

const MAX_PLAYERS = 10;

class Game {
  constructor(id) {
    this.id = id;
    this.users = [];
    this.status = 'wait'; // wait, ing
  }

  addUser(user) {
    if (this.users.length >= MAX_PLAYERS) {
      throw new Error('full');
    }
    this.users.push(user);
  }
  getUser(userId) {
    return this.users.find((user) => user.id === userId);
  }
  removeUser(userId) {
    this.users = this.users.filter((user) => user.id !== userId);
  }
  startGame(userId) {}

  getAllLocation(userId) {
    const locationData = this.users
      .filter((user) => user.id !== userId)
      .map((user) => {
        console.log(user.id);
        console.log(userId);
        const { x, y } = user.calculatePosition(2000);
        return { id: user.id, x, y };
      });
    return createLocationPacket(locationData);
  }
}

export default Game;
