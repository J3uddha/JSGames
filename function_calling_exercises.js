Function.prototype.myBind = function (context) {
  var fn = this;
  return function () {
    fn.apply(context);
  }
}

var cat = {
  "name": "Sennacy"
}

var myFn = function () {
  console.log(this.name)
}

bindedFn = myFn.myBind(cat);
bindedFn();

// bindedFn = myFn.bind(cat);
