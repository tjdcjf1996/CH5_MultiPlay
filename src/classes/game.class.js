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
    this.users = users.filter((user) => user.id !== userId);
  }
  startGame(userId) {}
}

export default Game;
