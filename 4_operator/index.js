//  ----- 1 arithmetic operator -----

// let k = 5;

// let g = 10;

// console.log("addition", k + g);
// console.log("subtraction", k - g);
// console.log("multiplication", k * g);
// console.log("division", k / g);
// console.log("modulo", k % g);
// console.log("exponential", k ** g);

//  ----- 2 assignment  operator -----

// let k = 45;

// k += 5;

// console.log("add and assign", k);

// k -= 5;
// console.log("subtract and assign", k);

// k *= 5;

// console.log("multiplication and assign", k);

// k /= 5;

// console.log("division and assign", k);

// //  ----- 3 comparison  operator -----

// let num1 = 24;
// let num2 = "24";

// console.log("result", num1 == num2);

// console.log("strictly equality operator", num1 === num2);

// // Only check value not data types
// console.log(num1 != num2);

// // Datatype will also check
// console.log(num1 !== num2);

// console.log("less than", k < g);
// console.log("greater than", k > g);


// // ----- 4 logical operator -----

// let logicK = true;

// let logicG = false;

// // and
// if (logicK && logicG) {
//     console.log("it will print only if the both condition true");
// }

// // or
// if (logicK || logicG) {
//     console.log("it will print when any of condition true");
// }

// // not
// console.log(!logicK);


// ----- 5 unary operator -----

let num = 45;

console.log(num);

if (true) {
  num++;
}

console.log("num", num);

++num;

console.log("num", num);

// ----- 6 ternary -----

let age = 18;

age >= 18 ? console.log("you can vote") : console.log("you can't give vote ");

console.log("type of age", typeof age);