// var board = require("./board");
// var player = require("./player");


function Game (player1, player2) {
  this.player1 = player1,
  this.player2 = player2,
  this.currentPlayer = player2,
  this.board = new Board()
}

Game.prototype.changePlayer = function () {
  if (this.currentPlayer == this.player1) {
    this.currentPlayer = this.player2;
  } else {
    this.currentPlayer = this.player1;
  }
}

Game.prototype.play = function (completionCallback) {
  var success;

  while (!this.board.won()) {
    this.changePlayer();
    console.clear();
    .//for Chrome
    this.board.show();
    move = this.currentPlayer.makeMove();
    try {
      success = this.board.placeMark(move, this.currentPlayer.mark);
    } catch (e) {
      console.log(e);
      this.changePlayer();
    }
  }

  this.board.show();

  completionCallback(this.currentPlayer);
}



//
// module.exports = Game;
