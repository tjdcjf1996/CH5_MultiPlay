import { createPingPacket } from '../../utils/notification/game.notification.js';

class User {
  constructor(socket, id, latency) {
    this.id = id;
    this.socket = socket;
    this.x = 0;
    this.y = 0;
    this.preX = 0;
    this.preY = 0;
    this.speed = 3;
    this.latency = latency;
    this.sequence = 0;
    this.lastUpdateTime = Date.now();
  }

  updatePosition(x, y) {
    this.preX = this.x;
    this.preY = this.y;
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
  }

  calculatePosition(latency) {
    if (this.x === this.preX && this.y === this.preY) {
      return { x: this.x, y: this.y };
    }

    const timeDiff = (Date.now() - this.lastUpdateTime + latency) / 1000;

    const distance = this.speed * timeDiff; // 거속시

    const directX = this.x !== this.lastX ? Math.sign(this.x - this.lastX) : 0; // 방향
    const directY = this.y !== this.lastY ? Math.sign(this.y - this.lastY) : 0;

    return {
      x: this.x + directX * distance,
      y: this.y + directY * distance,
    };
  }
}
export default User;
