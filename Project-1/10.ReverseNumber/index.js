document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let number = parseInt(document.getElementById("Reverse").value); 
    let result = document.getElementById("result");

    let reverse = 0;

    while (number > 0) {
        reverse = reverse * 10 + (number % 10);
        number = Math.floor(number / 10);
    }

    result.textContent = `Reverse number = ${reverse}`;
});
