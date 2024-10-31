// 상속용 클래스

class BaseManager {
  constructor() {
    if (new.target === BaseManager) {
      throw new TypeError("Can't construct BaseManager instance");
    }
  }

  addPlayer(playerId, ...args) {
    throw new Error('Method not implemented');
  }
  removePlayer(playerId) {
    throw new Error('Method not implemented');
  }
  clearAll() {
    throw new Error('Method not implemented');
  }
}

export default BaseManager;
