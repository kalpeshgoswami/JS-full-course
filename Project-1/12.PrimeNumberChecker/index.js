document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let num = Number(document.getElementById("Prime").value);
    let result = document.getElementById("result");

    if (num <= 1) {
        result.textContent = "Not a Prime Number";
        return;
    }

    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        result.textContent = "Prime Number";
    } else {
        result.textContent = "Not a Prime Number";
    }
});
