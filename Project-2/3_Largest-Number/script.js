document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let inputs = document.querySelectorAll(".number");
    let numbers = [];

    inputs.forEach(function (input) {
        numbers.push(Number(input.value));
    });

    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    document.getElementById("result").innerHTML =
        "Entered Numbers: " + numbers.join(", ") +
        "<br>Largest Number: " + largest;
});