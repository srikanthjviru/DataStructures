function PriorityQueue() {
  var collection = [];
  this.printCollection = function() {
    return collection;
  };
  this.isEmpty = function() {
    if (collection.length === 0) {
      return true;
    } else {
      false;
    }
  };
  this.size = function() {
    return collection.length;
  };
  this.front = function() {
    return collection[0];
  };
  this.dequeue = function() {
    // to remove last
    // collection.pop()
    // here removes first
    return collection.shift();
  };

  // if its a Normal Queue
  // this.enqueue = function(element){
  //   collection.push(element)
  //   return true
  // }

  // Priority Queue meaning placing the elements with priority order
  this.enqueue = function(element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          // splice(1,0,"Sri") => adds "Sri" for the array at position 1
          // without removing any other element
          collection.splice(i, 0, element);
          added = true;
          // break we are using it to come out of the for loop without further incrementing the i
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
}
var pq = new PriorityQueue();
pq.enqueue(["Beau Carnes", 2]);
pq.enqueue(["Quincy Larson", 3]);
pq.enqueue(["Ewa Mitulska-Wójcik", 1]);
pq.enqueue(["Briana Swift", 2]);
pq.printCollection();
// pq.dequeue();
console.log(pq.front());
console.log(pq.printCollection());
