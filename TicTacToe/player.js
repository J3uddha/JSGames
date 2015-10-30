function Player (mark) {
  this.mark = mark;
}

Player.prototype.makeMove = function () {
  move = prompt("Make your move");
  posString = move.split(",");
  return [parseInt(posString[0]), parseInt(posString[1])];
};

// module.exports = "Player";
