// JavaScript indexOf() Method
// This method is used to find the index of a particular element in an array.

// Example: In this example, we will find out the index of the elements using the indexOf() method.

let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

console.log("index of:", days.indexOf("Wednesday"));


// includes() method 

console.log("include method:", days.includes("Sunday"));



let alphabet = ["a", "d", "b", "e", "c"];

alphabet.reverse()

console.log("alphabet",alphabet)


// sort () method

let numbers = [5, 2, 9, 1, 7];

console.log("descending:", numbers.sort((a, b) => {
    return b - a;
}));