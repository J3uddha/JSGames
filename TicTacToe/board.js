function Board () {
  this.grid = [[" ", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "]];
}

Board.prototype.won = function () {
  var g = this.grid;
  for (i = 0; i < 3; i++) {
    if (g[i][0] == g[i][1] && g[i][0] == g[i][2]) {
      if (g[i][0] != " ") {
        return true;
      }
    } else if (g[0][i] == g[1][i] && g[0][i] == g[2][i]) {
      if (g[0][i] != " ") {
        return true;
      }
    }
  }

  if (g[1][1] == " ") {
    return false;
  }
  if (g[0][0] == g[1][1] && g[1][1] == g[2][2]) {
    return true;
  } else if (g[2][0] == g[1][1] && g[1][1] == g[0][2]) {
    return true;
  }
  return false;
}

Board.prototype.empty = function (pos) {
  return this.grid[pos[0]][pos[1]] == " ";
}

Board.prototype.placeMark = function (pos, mark) {
  if (this.empty(pos)) {
    this.grid[pos[0]][pos[1]] = mark;
    return true;
  } else {
    throw "Invalid move!";
  }
}

Board.prototype.show = function () {
  console.log(this.grid[0]);
  console.log(this.grid[1]);
  console.log(this.grid[2]);
}

//
// Board.prototype.winner = function () {
//   if this.won {
//     //return current player
//   }
// }

// module.exports = Board;
