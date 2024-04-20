// game.js
class Game {
  constructor() {
    this.players = [];
  }

  addPlayer(player) {
    this.players.push(player);
  }

  start() {
    console.log("Game started with players:", this.players);
  }
}

module.exports = Game;
