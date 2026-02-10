// document.getElementById("form").addEventListener("submit", (e) => {
//     e.preventDefault();

//     let FirstNumber = document.getElementById("firstNumber").value;
//     let SecondNumber = document.getElementById("secondNumber").value;
//     let ThirdNumber = document.getElementById("thirdNumber").value;

//     let result = document.getElementById("result");

//     if (FirstNumber >= SecondNumber && FirstNumber >= ThirdNumber) {
//         result.textContent = FirstNumber + " is the largest number";
//     } else if (SecondNumber >= FirstNumber && SecondNumber >= ThirdNumber) {
//         result.textContent = SecondNumber + " is the largest number";
//     } else {
//         result.textContent = ThirdNumber + " is the largest number";
//     }
// });

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let FirstNumber = Number(document.getElementById("firstNumber").value);
    let SecondNumber = Number(document.getElementById("secondNumber").value);
    let ThirdNumber = Number(document.getElementById("thirdNumber").value);

    let result = document.getElementById("result");

    if (FirstNumber >= SecondNumber && FirstNumber >= ThirdNumber) {
        result.textContent = FirstNumber + " is the largest number";
    } else if (SecondNumber >= FirstNumber && SecondNumber >= ThirdNumber) {
        result.textContent = SecondNumber + " is the largest number";
    } else {
        result.textContent = ThirdNumber + " is the largest number";
    }
});
