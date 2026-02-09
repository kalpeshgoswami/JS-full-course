// ----- example 1 -----

let age = 20;

let voterId = true;

if (age >= 18) {
    if (voterId) {
        console.log("you can give vote");
    } else {
        console.log("you have to register on vote portal then you can give vote");
    }
} else {
    console.log("you are not eligible for voting ");
}

// ----- example 1 -----

let balance = 5000;
let atmPin = false;

if (balance >= 1000) {
    if (atmPin) {
        console.log("transaction successful");
    } else {
        console.log("enter correct ATM pin");
    }
} else {
    console.log("insufficient balance");
}
