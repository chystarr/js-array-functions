// FOR EACH //
Array.prototype.myEach = function(callBackFn) {
  for (let i = 0; i < this.length; i++) {
    this[i] = callBackFn(this[i]);
  }
};

// MAP //
Array.prototype.myMap = function(callBackFn) {
  let new_array = [];
  for (let i = 0; i < this.length; i++) {
    new_array.push(callBackFn(this[i]));
  }
  return new_array;
};

// FILTER //
Array.prototype.myFilter = function(callBackFn) {
  let new_array = [];
  for (let i = 0; i < this.length; i++) {
    if (callBackFn(this[i])) {
      new_array.push(this[i]);
    }
  }
  return new_array;
};

// SOME //
Array.prototype.mySome = function(callBackFn) {
  for (let i = 0; i < this.length; i++) {
    if (callBackFn(this[i])) {
      return true;
    }
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function(callBackFn) {
  for (let i = 0; i < this.length; i++) {
    if (!callBackFn(this[i])) {
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
    if (this[i] === searchElement) {
      return true;
    }
  }
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === searchElement) {
      return i;
    }
  }
  return -1;
};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};

// code for testing functions
const nums = [1, 2, 3, 4];
const words = ["hello", "world", "chair"];
console.log(nums.myIncludes(4));
console.log(nums.myIncludes(5));
console.log(nums.myIncludes("hello"));
console.log(nums.myIncludes("4"));
console.log(words.myIncludes("hello"));
console.log(words.myIncludes("plant"));
console.log(words.myIncludes(4));