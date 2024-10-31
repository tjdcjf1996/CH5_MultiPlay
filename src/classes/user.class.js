import { createPingPacket } from '../../utils/notification/game.notification.js';

class User {
  constructor(socket, id, latency) {
    this.id = id;
    this.socket = socket;
    this.x = 0;
    this.y = 0;
    this.latency = latency;
    this.sequence = 0;
    this.lastUpdateTime = Date.now();
  }

  updatePosition(x, y) {
    this.x = x;
    this.y = y;
    this.lastUpdateTime = Date.now();
  }
  getPosition() {
    return { x: this.x, y: this.y };
  }

  getNextSequence() {
    return ++this.sequence;
  }

  ping() {
    const now = Date.now();
    this.socket.write(createPingPacket(now));
  }

  pong(timestamp) {
    const now = Date.now();
    this.latency = (now - timestamp) / 2;
    console.log(this.latency);
  }

  calculatePosition(latency) {
    const timeDiff = latency / 1000;
    const speed = 1;
    const distance = speed * timeDiff;

    return {
      x: this.x + distance,
      y: this.y,
    };
  }
}

export default User;
