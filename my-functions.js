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
    if (callBackFn(this[i]) === true) {
      new_array.push(this[i]);
    }
  }
  return new_array;
};

// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

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
let arr = [1, 2, 3];
addTwo = function(num) {
  return num + 2;
};
console.log(arr);
let arr2 = arr.myMap(addTwo);
console.log(arr2);