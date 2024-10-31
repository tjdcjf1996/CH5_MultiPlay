import BaseManager from './base.manager.js';
import { PACKET_TOTAL_LENGTH } from './../constants/header.js';

class IntervalManager extends BaseManager {
  constructor() {
    super();
    this.intervals = new Map();
  }

  addPlayer(playerId, callback, interval, type = 'user') {
    if (!this.intervals.has(playerId)) {
      this.intervals.set(playerId, new Map());
    }
    this.intervals.get(playerId).set(type, setInterval(callback, interval));
  }
  removePlayer(playerId) {
    if (this.intervals.has(playerId)) {
      const userIntervals = this.intervals.get(playerId);
      userIntervals.forEach((intervalId) => clearInterval(intervalId));
      this.intervals.delete(playerId);
    }
  }

  addUpdateLatency(gameSessionId, callback, interval) {
    if (!this.intervals.has(gameSessionId)) {
      this.intervals.set(gameSessionId, setInterval(callback, interval));
    }
  }

  removeUpdateLatency(gameSessionId) {
    if (this.intervals.has(gameSessionId)) {
      const latency = this.intervals.get(gameSessionId);
      clearInterval(latency);
      this.intervals.delete(gameSessionId);
    }
  }

  removeInterval(playerId, type) {
    if (this.intervals.has(playerId)) {
      const userIntervals = this.intervals.get(playerId);
      if (userIntervals.has(type)) {
        clearInterval(userIntervals.get(type));
        userIntervals.delete(type);
      }
    }
  }

  clearAll() {
    this.intervals.forEach((userIntervals) => {
      userIntervals.forEach((intervalId) => {
        clearInterval(intervalId);
      });
    });
    this.intervals.clear();
  }
}

export default IntervalManager;
