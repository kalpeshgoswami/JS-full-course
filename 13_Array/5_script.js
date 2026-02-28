// JavaScript Array join() Method

// This join() method creates and returns a new string by concatenating all elements of an array. It uses a specified separator between each element in the resulting string.

const games = ["cricket", "football", "tennis", "hockey"];

console.log("games array", games);
console.log("games array to string:", games.join(" "));

// JavaScript Array flat() Method
// The flat() method is used to flatten the array i.e. it merges all the given array and reduces all the nesting present in it.

const number = [[1, 2, 3], [4, 5, 6], [7, 8, 9],]

console.log("Number array", number);

console.log("flatten the array", number.flat());

const categories = [
    ["Electronics", ["Phones", ["Android", "iPhone"]]],
    ["Clothing", ["Men", "Women"]],
];

console.log("Fully flattened:", categories.flat(Infinity));

// JavaScript Array.slice() Method
// The slice() method returns a new array containing a portion of the original array, based on the start and end index provided as arguments

// end will be excluded

const numbers = [10, 20, 30, 40, 50];

const result = numbers.slice(1, 4);

console.log("Original array:", numbers);
console.log("Sliced array:", result);