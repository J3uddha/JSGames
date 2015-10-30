function Clock () {

}

Clock.prototype.TICK = 5000;

Clock.prototype.printTime = function () {
  var printDate = new Date(this.currentTime);

  //  console.log(printDate)
  console.log(printDate.getHours() + ":" +
              printDate.getMinutes() + ":" +
              printDate.getSeconds()); //needs pretty formatting
};

Clock.prototype._tick = function() {
  this.currentTime += this.TICK;
  this.printTime();
};

Clock.prototype.run = function() {
  this.currentTime = Date.now();
  this.printTime();
  var that = this;
  setInterval(this._tick.bind(that), this.TICK);
};

// ------------------------

// we don't use this in the browser

// var readline = require('readline');
// var reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })


function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft == 0) {
    completionCallback(sum);
  } else if (numsLeft > 0) {
    var answer = prompt("Provide a number:");
    sum += parseInt(answer);
    console.log(sum);
    addNumbers(sum, numsLeft - 1, completionCallback);
  }


};

// ------------------------


function askIfGreaterThan(el1, el2, callback) {
  response = prompt("Is " + el1 + " greater than " + el2 + "?");
  if (response == "yes") {
    callback(true);
  } else {
    callback(false);
  }
}

function absurdBubbleSort (arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
    } else {
      sortCompletionCallback(arr);
    }
  }

  outerBubbleSortLoop(true);
}

function innerBubbleSortLoop (arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i == (arr.length-1)) {
    outerBubbleSortLoop(madeAnySwaps);
  }

  if (i < arr.length-1) {
    askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan) {
      if (isGreaterThan == true) {
        var bubble = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = bubble;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, ++i, madeAnySwaps, outerBubbleSortLoop);
    });
  }
}

// ------------------------
