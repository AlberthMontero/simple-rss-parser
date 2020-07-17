// Naive implementations:
Array.prototype.mapMe = function (callbackFn) {
  const newArray = [];
  for (let index = 0; index < this.length; index++) {
    newArray.push(callbackFn(this[index], index, this)); //(Current, iteration, given array)
  }
  return newArray;
};

Array.prototype.filterMe = function (callbackFn) {
  const newArray = [];
  for (let index = 0; index < this.length; index++) {
    if (callbackFn(this[index], index, this)) {
      newArray.push(this[index]);
    }
  }
  return newArray;
};

Array.prototype.reduceMe = function (callbackFn) {
  let accumulator, initIndex;

  if (arguments.length === 1) {
    accumulator = this[0];
    initIndex = 1;
  } else {
    accumulator = arguments[1];
    initIndex = 0;
  }

  for (let index = initIndex; index < this.length; index++) {
    accumulator = callbackFn(accumulator, this[index], index);
  }

  return accumulator;
};

Array.prototype.forEachMe = function (callbackFn) {
  for (let index = 0; index < this.length; index++) {
    callbackFn(this[index], index, this);
  }
};

Array.prototype.findMe = function (callbackFn) {
  let foundItem;
  for (let index = 0; index < this.length; index++) {
    if (callbackFn(this[index], index, this)) {
      foundItem = this[index];
      break;
    }
  }
  return foundItem;
};
