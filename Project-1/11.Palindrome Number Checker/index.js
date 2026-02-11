document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let number = Number(document.getElementById("Palindrome").value);
    let result = document.getElementById("result");

    let originalNum = number;
    let rev = 0;

    while (number > 0) {
        rev = rev * 10 + (number % 10);
        number = Math.floor(number / 10);
    }

    if (rev === originalNum) {
        result.textContent = "Number is Palindrome";
    } else {
        result.textContent = "Number is NOT Palindrome";
    }
});
