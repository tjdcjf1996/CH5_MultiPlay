import { createLocationPacket } from '../../utils/notification/game.notification.js';
import IntervalManager from './../managers/interval.manager.js';

const MAX_PLAYERS = 10;

class Game {
  constructor(id) {
    this.id = id;
    this.users = [];
    this.IntervalManager = new IntervalManager();
    this.status = 'wait'; // wait, ing
  }

  addUser(user) {
    if (this.users.length >= MAX_PLAYERS) {
      throw new Error('full');
    }

    this.IntervalManager.addPlayer(user.id, user.ping.bind(user), 1000);

    this.users.push(user);
  }
  getUser(userId) {
    return this.users.find((user) => user.id === userId);
  }
  removeUser(userId) {
    this.users = this.users.filter((user) => user.id !== userId);
    this.IntervalManager.removePlayer(userId);
  }
  startGame(userId) {}

  getAllLocation(userId) {
    const locationData = this.users
      .filter((user) => user.id !== userId)
      .map((user) => {
        // const { x, y } = user.calculatePosition(2000);
        return { id: user.id, x: user.x, y: user.y };
      });
    return createLocationPacket(locationData);
  }
}

export default Game;
