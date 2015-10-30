// var index = require("./index");

var jake = new Player("x", "Jake");
var pat = new Player("o", "Pat");
var g = new Game(jake, pat);
g.play(function (winner) {
  console.log("WINNER! " + winner.name);
});
