function HanoiGame () {
  this.stacks = [[3,2,1],[],[]];
}

HanoiGame.prototype.isWon = function () {
  if (this.stacks[0].length != 0) {
    return false;
  } else if (this.stacks[1].length == 0){
    return this.inOrder(this.stacks[2]);
  } else if (this.stacks[2].length == 0) {
    return this.inOrder(this.stacks[1]);
  } else {
    return false;
  }
}

HanoiGame.prototype.inOrder = function (tower) {
  if (tower.sort().reverse() == tower) {
    return true;
  }
  return false;
}

HanoiGame.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {
  if (this.stacks[endTowerIdx].length == 0) {
    return true;
  } else if (this.stacks[startTowerIdx].length == 0) {
    return false;
  } else {
    return (this.stacks[startTowerIdx].slice(-1) <
            this.stacks[endTowerIdx].slice(-1));
  }
}

HanoiGame.prototype.move = function (startTowerIdx, endTowerIdx) {
  if (!this.isValidMove(startTowerIdx, endTowerIdx)) {
    return false;
  } else {
    this.stacks[endTowerIdx].push(this.stacks[startTowerIdx].pop());
    return true;
  }
}

HanoiGame.prototype.print = function () {
  console.log(this);
  console.log(JSON.stringify(this.stacks));
  return;
}

HanoiGame.prototype.promptMove = function (callback) {
  this.print();
  startTowerIdx = prompt("Select starting tower:");
  endTowerIdx = prompt("Select ending tower:");
  return callback(startTowerIdx, endTowerIdx);
}

HanoiGame.prototype.run = function(completionCallback) {
  that = this;
  if (!this.promptMove(that.move.bind(that))) {
    throw ("Unable to make move!");
  }

  if (this.isWon()) {
    console.log("You win! Congratulations!");
    completionCallback();
  } else {
    this.run(completionCallback);
  }
}

var g = new HanoiGame;
g.run(function () {
  console.log("successfully towered!");
});
