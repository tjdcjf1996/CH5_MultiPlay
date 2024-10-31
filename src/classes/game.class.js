import { createLocationPacket } from '../../utils/notification/game.notification.js';
import { FRAME_INTERVAL } from '../constants/frame.js';
import { MAX_PLAYERS } from '../constants/sessions.js';
import IntervalManager from './../managers/interval.manager.js';

class Game {
  constructor(id) {
    this.id = id;
    this.users = [];
    this.IntervalManager = new IntervalManager();
    this.status = 'wait'; // wait, ing
    this.latency = FRAME_INTERVAL + 1;
    this.IntervalManager.addUpdateLatency(this.id, this.updateLatency.bind(this), 10000);
  }

  getUserCount() {
    return this.users.length;
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

  updateLatency() {
    if (this.users.length > 0) {
      let latency = 0;
      for (const user of this.users) {
        latency = Math.max(user.latency, latency);
      }

      this.latency = Math.max(latency, FRAME_INTERVAL + 1);
    } else {
      this.latency = FRAME_INTERVAL + 1;
    }
    console.log(`[${this.id} - Latency : ${this.latency}]`);
  }

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
