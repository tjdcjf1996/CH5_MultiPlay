import BaseManager from './base.manager.js';

class IntervalManager extends BaseManager {
  constructor() {
    super();
    this.intervals = new Map();
  }

  // 특정 플레이어 ID와 타입에 따라 인터벌을 추가
  addPlayer(playerId, callback, interval, type = 'user') {
    if (!this.intervals.has(playerId)) {
      this.intervals.set(playerId, new Map());
    }
    // 특정 타입에 대한 인터벌 설정
    this.intervals.get(playerId).set(type, setInterval(callback, interval));
  }

  // 특정 플레이어 ID와 관련된 모든 인터벌을 제거
  removePlayer(playerId) {
    if (this.intervals.has(playerId)) {
      const userIntervals = this.intervals.get(playerId);
      // 각 타입별로 존재하는 모든 인터벌 제거
      userIntervals.forEach((intervalId) => clearInterval(intervalId));
      this.intervals.delete(playerId);
    }
  }

  // 게임 세션 ID와 관련된 레이턴시 업데이트 인터벌 추가
  addUpdateLatency(gameSessionId, callback, interval) {
    if (!this.intervals.has(gameSessionId)) {
      this.intervals.set(gameSessionId, setInterval(callback, interval));
    }
  }

  // 게임 세션 ID와 관련된 레이턴시 업데이트 인터벌 제거
  removeUpdateLatency(gameSessionId) {
    if (this.intervals.has(gameSessionId)) {
      const latency = this.intervals.get(gameSessionId);
      clearInterval(latency);
      this.intervals.delete(gameSessionId);
    }
  }

  // 특정 플레이어 ID의 특정 타입에 대한 인터벌을 제거
  removeInterval(playerId, type) {
    if (this.intervals.has(playerId)) {
      const userIntervals = this.intervals.get(playerId);
      if (userIntervals.has(type)) {
        clearInterval(userIntervals.get(type));
        userIntervals.delete(type);
      }
    }
  }

  // 모든 인터벌을 제거하고 Map을 초기화
  clearAll() {
    this.intervals.forEach((userIntervals) => {
      userIntervals.forEach((intervalId) => {
        clearInterval(intervalId);
      });
    });
    this.intervals.clear(); // 전체 인터벌 Map 초기화
  }
}

export default IntervalManager;
