document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let age = Number(document.getElementById("age").value);
    let result = document.getElementById("result");

    if (age >= 60) {
        result.textContent = `You are Is Senior Citizen`
    } else if (age >= 18) {
        result.textContent = `You are Is Eligible For Vote And Drive`
    } else {
        result.textContent = `You are Is Not Eligible For Vote And Drive`
    }
});