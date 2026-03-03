// const numbers = [10, 20, 30, 40, 50];


// // find

// const result = numbers.find(num => num > 25);

// console.log(result);


// // findIndex

// const index = numbers.findIndex(num => num > 25);

// console.log(index);


// // some

// const BigNumber = numbers.some(num => num > 45);

// console.log(BigNumber);

// // Every

// const allAboveFive = numbers.every(num => num > 5);

// console.log(allAboveFive);



const numbers = [10, 20, 30, 40, 50];

//  find() → first element greater than 25

const result = numbers.find(num => num > 25);
console.log("find():", result);

//  findIndex() → index of first element greater than 25

const index = numbers.findIndex(num => num > 25);
console.log("findIndex():", index);

// some() → is there at least one element greater than 45?

const hasBigNumber = numbers.some(num => num > 45);
console.log("some():", hasBigNumber);

// every() → are all numbers greater than 5

const allAboveFive = numbers.every(num => num > 5);
console.log("every():", allAboveFive);
