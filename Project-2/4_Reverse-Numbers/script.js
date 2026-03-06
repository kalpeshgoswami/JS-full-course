document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let number = [];

    for (let i = 20; i >= 1; i--) {
        if (i % 2 === 0) {
            number.push(i);
        }
    }

    document.getElementById("result").innerHTML = number.join(", ");
});