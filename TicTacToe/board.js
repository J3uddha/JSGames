function Board () {
  this.board = [[" ", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "]];
}

Board.prototype.won = function () {
  var b = this.board;
  for (i = 0; i < 3; i++) {
    if (b[i][0] == b[i][1] && b[i][0] == b[i][2]) {
      return true;
    } else if (b[0][i] == b[1][i] && b[0][i] == b[2][i]) {
      return true;
    }
  }

  if (b[0][0] == b[1][1] && b[1][1] == b[2][2]) {
    return true;
  } else if (b[2][0] == b[1][1] && b[1][1] == b[0][2]) {
    return true;
  }
  return false;
}

// Board.prototype.winner = function () {
//   if this.won {
//     //return current player
//   }
// }

Board.prototype.empty = function (pos) {
  return this.board[pos[0]][pos[1]] == " ";
}

Board.prototype.placeMark = function (pos, mark) {
  if (this.empty(pos)) {
    this.board[pos[0]][pos[1]] = mark;
  } else {
    throw "Invalid move!";
  }
}
//
// module.exports = Board;
