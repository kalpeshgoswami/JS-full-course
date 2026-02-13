
// ----- DataType -----

// 1. string   ==> permeative
// 2. Number
// 3. boolean
// 4. undefine
// 5. null 
// 6. symbol
// 7. bigInt

// 8. object   ==> non-permeative


// ------ Primitive data types ------

console.log("1. string example")

let string = "kalpesh";

console.log(string);
console.log(typeof string);


console.log("2. Number example")

let num  = "45";

console.log(num );
console.log(typeof num );


console.log("3. boolean example")

let result  = "true";

console.log(result );
console.log(typeof result );


console.log("4. undefined example")

let UD = "k";

console.log(UD);
console.log(typeof US);


console.log("5.null")

let reset = null;
console.log(reset);
console.log(typeof null);


console.log("6.symbol")

let value = Symbol(20);
console.log(value);
console.log(typeof value);


console.log("7.bigInt")

let bigNum = 13245678987654321n;

console.log(bigNum);
console.log(typeof bigNum);


// ------ non-permeative ------ 

console.log("8.object")

let person = { name: "krishn" };
console.log(person);
console.log(typeof person);



console.log("array")

let fruit = ["apple", "banana", "cherry"];

console.log(fruit);
console.log(typeof fruit);