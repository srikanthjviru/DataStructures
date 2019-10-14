function mySet() {
  this.collection = [];

  this.has = function(value) {
    if (this.collection.indexOf(value) !== -1) {
      return true;
    } else {
      return false;
    }
  };

  this.add = function(value) {
    if (!this.has(value)) {
      this.collection.push(value);
      return true;
    } else {
      return false;
    }
  };

  this.remove = function(value) {
    if (this.has(value)) {
      const index = this.collection.indexOf(value);
      this.collection.splice(index, 1);
      return true;
    } else {
      return false;
    }
  };

  this.values = function() {
    return this.collection;
  };

  this.size = function() {
    return this.collection.length;
  };

  this.union = function(newSet) {
    const unionSet = new mySet();
    let secondSet = newSet.values();
    let firstSet = this.values();

    secondSet.forEach(e => unionSet.add(e));
    firstSet.forEach(e => unionSet.add(e));

    console.log("Union", unionSet.values());
    return unionSet;
  };

  this.intersection = function(newSet) {
    const intersectionSet = new mySet();
    let firstSet = newSet.values();

    firstSet.forEach(x => {
      if (this.has(x)) {
        intersectionSet.add(x);
      }
    });

    console.log("Intersection", intersectionSet.values());
    return intersectionSet;
  };

  this.difference = function(newSet) {
    const differenceSet = new mySet();
    let firstSet = newSet.values();
    let secondSet = this.values();
    firstSet.forEach(a => {
      if (!this.has(a)) {
        differenceSet.add(a);
      }
    });
    secondSet.forEach(a => {
      if (!newSet.has(a)) {
        differenceSet.add(a);
      }
    });
    console.log("DIfference", differenceSet.values());
    return differenceSet;
  };

  this.subset = function(otherSet) {
    let firstSet = this.values();
    // return firstSet.every(function(value) {
    //   return otherSet.has(value);
    // });
    return firstSet.every(a => otherSet.has(a));
  };
}

var b = new mySet();
b.add(11);
b.add(32);
b.add(22);
b.add(4);
b.add(5);
b.add(6);
b.add(1);
b.add(3);
b.add(2);
var a = new mySet();
// a.add(1);
// a.add(3);
// a.add(2);
a.add(4);
a.add(5);
a.add(6);

console.log("a", a.values());
console.log("b", b.values());
// console.log(a.add(3));
// console.log(a);
// console.log(a.remove(3));
console.log("union", a.union(b));
console.log("intersection", a.intersection(b));
console.log("difference", a.difference(b));
console.log("subset", a.subset(b));
