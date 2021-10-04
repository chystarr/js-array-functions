// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    callbackFn(this[i], i, this);
  }
};

// MAP //
Array.prototype.myMap = function(callbackFn) {
  let new_array = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    new_array.push(callbackFn(this[i], i, this));
  }
  return new_array;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  let new_array = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    if (callbackFn(this[i], i, this)) {
      new_array.push(this[i]);
    }
  }
  return new_array;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    if (callbackFn(this[i], i, this)) {
      return true;
    }
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    if (!callbackFn(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    if (this[i] === searchElement) {
      return true;
    }
  }
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === undefined) continue;
    if (this[i] === searchElement) {
      return i;
    }
  }
  return -1;
};

// PUSH //
Array.prototype.myPush = function(...args) {
  let arg_i = 0;
  let length = this.length;
  
  for (let i = length; i < length + args.length; i++) {
    this[i] = args[arg_i];
    arg_i++;
  }
  return this.length;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  for (let i = this.length - 1; i > -1; i--) {
    if (this[i] === undefined) continue;
    if (this[i] === searchElement) {
      return i;
    }
  }
  return -1;
};

// KEYS //
Object.grabKeys = function(obj) {
  let keys = [];
  for (let i in obj) {
    if (obj[i] === undefined) continue;
    keys.push(i);
  }
  return keys;
};

// VALUES //
Object.grabValues = function() {
  let values = [];
  for (let i of obj) {
    if (obj[i] === undefined) continue;
    values.push(i);
  }
  return values;
};

// code for testing functions
const obj1 = {
  a: "stuff",
  b: 12,
  c: true,
};

console.log(Object.keys(obj1));
console.log(Object.grabKeys(obj1));