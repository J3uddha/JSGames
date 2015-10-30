// var board = require("./board");
// var player = require("./player");


function Game (player1, player2) {
  this.player1 = player1,
  this.player2 = player2,
  this.currentPlayer = player2
}

Game.prototype.play = function () {

  while (!this.board.won()) {
    this.changePlayer();
    move = currentPlayer.makeMove();
    try {
      var success = this.board.placeMark(move, currentPlayer.mark);
    } catch (e) {
      console.log(e);
    } finally {
      if (!success) {
        this.changePlayer();
      }
    }
  }

  completionCallback(this.currentPlayer);
}

Game.prototype.changePlayer = function () {
  if (this.currentPlayer == this.player1) {
    this.currentPlayer = this.player2;
  } else {
    this.currentPlayer = this.player1;
  }
}

//
// module.exports = Game;
