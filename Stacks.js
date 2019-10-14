/* Stacks! */
// Creates a stack => actual Data Structures

var Stack = function() {
  this.count = 0;
  this.storage = {};

  // Adds a value onto the end of the stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and returns the value at the end of the stack
  this.pop = function() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];

    return result;
  };

  this.size = function() {
    return this.count;
  };

  // Returns the value at the end of the stack
  this.peek = function() {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();

// I practiced it below...

// var Stack = function() {
//   this.count = 0;
//   this.storage = {};

//   this.push = function(value) {
//     this.storage[this.count] = value;
//     this.count++;
//   };
//   this.pop = function() {
//     if (this.count === 0) {
//       return undefined;
//     } else {
//       this.count--;
//       var item = this.storage[this.count];
//       delete this.storage[this.count];
//       return item;
//     }
//   };
//   this.size = function() {
//     return this.count;
//   };
//   this.peek = function() {
//     return this.storage[this.count - 1];
//   };
// };
// var myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(6);
myStack.push(4);
myStack.push(3);
myStack.push(5);
myStack.push(9);
console.log("storage", myStack.storage);
console.log("peek", myStack.peek());
console.log("pop", myStack.pop());
console.log("peek", myStack.peek());
myStack.push("freeCodeCamp");
console.log("size", myStack.size());
console.log("peek", myStack.peek());
console.log("pop", myStack.pop());
console.log("peek", myStack.peek());
