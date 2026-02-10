document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let firstNum = document.getElementById("firstNumber").value;
    let secondNum = document.getElementById("secondNumber").value;

    let result = document.getElementById("result");

    let sum = 0;

    let combined = firstNum + secondNum;

    for (let i = 0; i < combined.length; i++) {
        sum += Number(combined[i]);
    }

    result.textContent = `Sum Of Digits = ${sum}`;
});
