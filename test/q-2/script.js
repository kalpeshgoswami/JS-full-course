document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let num = document.getElementById("number").value;
    let result = document.getElementById("result");

    if (num > 0) {
        result.textContent = "This is Positive";
    }
    else if (num == 0) {
        result.textContent = "This is Zero";
    }
    else {
        result.textContent = "This is Negative";
    }
});