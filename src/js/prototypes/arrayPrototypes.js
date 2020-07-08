Array.prototype.map = function (callbackFn /*[, thisArg]*/) {
  'use strict';

  if (this === null) {
    throw new TypeError('Array.prototype.map called on null or undefined');
  }

  checkFn(callbackFn);

  const source = Object(this);
  const lenValue = toUint32(source.length);
  let newArray = new Array(lenValue);
  let index = 0;
  let thisArg;
  if (arguments.length > 1) {
    thisArg = arguments[1];
  }

  while (index < lenValue) {
    let element, mappedValue;

    if (index in source) {
      element = source[index];
      mappedValue = callbackFn.call(thisArg, element, index, source);
      newArray[index] = mappedValue;
    }

    index++;
  }

  return newArray;
};

Array.prototype.filter = function (callbackFn /*[, thisArg]*/) {
  'use strict';

  if (this === null) {
    throw new TypeError('Array.prototype.filter called on null or undefined');
  }

  checkFn(callbackFn);

  const source = Object(this);
  const lenValue = toUint32(source.length);
  let newArray = new Array(lenValue);
  let count = 0;
  let index = 0;
  let thisArg;
  if (arguments.length > 1) {
    thisArg = arguments[1];
  }

  while (index < lenValue) {
    let element;

    if (index in source) {
      element = source[index];

      if (callbackFn.call(thisArg, element, index, source)) {
        newArray[count++] = element;
      }
    }

    index++;
  }

  newArray.length = count;
  return newArray;
};

Array.prototype.reduce = function (callbackFn /*[, initialValue]*/) {
  'use strict';
  if (this === null) {
    throw new TypeError('Array.prototype.reduce called on null or undefined');
  }

  checkFn(callbackFn);

  const source = Object(this);
  const lenValue = toUint32(source.length);
  let index = 0;
  let currentValue;

  if (arguments.length > 1) {
    currentValue = arguments[1];
  } else {
    while (index < lenValue && !(index in source)) {
      index++;
    }

    if (index >= lenValue) {
      throw new TypeError('Cannot reduce an empty array with no initial value');
    }

    currentValue = source[index++];
  }

  while (index < lenValue) {
    if (index in source) {
      currentValue = callbackFn(currentValue, source[index], index, source);
    }

    index++;
  }

  return currentValue;
};

function toUint32(n) {
  return n >>> 0;
}

function checkFn(fn) {
  if (typeof fn !== 'function') {
    throw new TypeError(`Hey!! ${fn} is not a function!`);
  }
}
