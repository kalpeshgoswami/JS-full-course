document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let num = document.getElementById("number").value;
    let result = document.getElementById("result");

    console.log("num", num)

    if (num % 2 === 0) {
        result.textContent = "This is an Even Number";
    } else {
        result.textContent = "This is an Odd Number";
    }
});
