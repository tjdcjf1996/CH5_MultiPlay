import { createLocationPacket } from '../../utils/notification/game.notification.js';
import { FRAME_INTERVAL } from '../constants/frame.js';
import { MAX_PLAYERS } from '../constants/sessions.js';
import IntervalManager from './../managers/interval.manager.js';

class Game {
  constructor(id) {
    this.id = id;
    this.users = [];
    this.IntervalManager = new IntervalManager();
    this.latency = FRAME_INTERVAL + 1;
    this.IntervalManager.addUpdateLatency(this.id, this.updateLatency.bind(this), 1000);
  }

  // 처음 인스턴스 초기화 시 생성된 latency 인터벌 삭제
  deleteLatency() {
    this.IntervalManager.removeUpdateLatency(this.id);
  }

  // 세션에 등록된 유저 수 반환
  getUserCount() {
    return this.users.length;
  }

  addUser(user) {
    // 실질적 필요 없지만 안전장치 (최대 인원일 시 세션 자동 증가되기 때문에)
    if (this.users.length >= MAX_PLAYERS) {
      throw new Error('full');
    }
    // 추가 된 유저 핑 인터벌 등록
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
      // 최저 프레임 기준을 클라이언트 Tick Rate에 맞출까 고민하다 일단 주석처리
      // this.latency = Math.max(latency, FRAME_INTERVAL + 1);
      this.latency = latency;
    } else {
      this.latency = FRAME_INTERVAL + 1;
    }
    console.log(`[${this.id} - Latency : ${this.latency}]`);
  }

  getAllLocation(userId) {
    const locationData = this.users
      .filter((user) => user.id !== userId)
      .map((user) => {
        const { x, y } = user.calculatePosition(this.latency);
        return { id: user.id, x: user.x, y: user.y };
      });

    return createLocationPacket(locationData);
  }
}

export default Game;
