function factorial(number) {
    console.log("num", number)

    if (number < 0) {
        return console.log("factorial is not define foe negative number");
    } else if (number === 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}

let result = factorial(10);
console.log("Result", result);