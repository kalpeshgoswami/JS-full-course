document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let number = Number(document.getElementById("table").value);
    let result = document.getElementById("result");

    for (let i = 1; i <= 10; i++) {
        result.innerHTML += `<h3>${number} * ${i} = ${number * i}</b></h3>`

    }
});