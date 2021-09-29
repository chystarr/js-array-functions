// FOR EACH //
Array.prototype.myEach = function(callBackFn) {
    for (i = 0; i < this.length; i++) {
        this[i] = callBackFn(this[i]);
    }
};

// MAP //
Array.prototype.myMap = function() {
    let new_array = [];
    for (i = 0; i < this.length; i++) {
        new_array.push(callBackFn(this[i]));
    }
    return new_array;
};

// FILTER //
Array.prototype.myFilter = function() {

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
arr = [1, 2, 3];
addTwo = function(num) {
    return num + 2;
};
console.log(arr);
arr.myEach(addTwo);
console.log(arr);