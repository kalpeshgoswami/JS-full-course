// JavaScript Array some() Method
// The some() method checks whether at least one of the elements of the array satisfies the condition checked by the argument function.

let marks = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const result = marks.some((mark) => mark > 80);

console.log("Result", result);

// Javascript Array reverse() method
// The reverse() method is used to reverse the order of elements in an array. It modifies the array in place and returns a reference to the same array with the reversed order.

console.log(marks.reverse());

console.log(marks);
x
// Javascript Array values() method
// The values() method returns a new Array Iterator object that contains the values for each index in the array.

let markIterator = marks.values();
console.log("mark iterator", markIterator);

for (key of markIterator) {
    console.log(key);
}


