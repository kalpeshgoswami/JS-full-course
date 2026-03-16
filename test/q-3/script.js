document.getElementById("Celsius").addEventListener("click", function (e) {

    e.preventDefault();

    let temp = Number(document.getElementById("temp").value);

    if (isNaN(temp)) {
        document.getElementById("result").innerText = "Please enter a valid temperature.";
        return;
    }

    let celsius = (temp - 32) * 5 / 9;

    document.getElementById("result").innerText =
        temp + " °F = " + celsius.toFixed(2) + " °C";
});


document.getElementById("Fahrenheit").addEventListener("click", function (e) {

    e.preventDefault();

    let temp = Number(document.getElementById("temp").value);

    if (isNaN(temp)) {
        document.getElementById("result").innerText = "Please enter a valid temperature.";
        return;
    }

    let fahrenheit = (temp * 9 / 5) + 32;

    document.getElementById("result").innerText =
        temp + " °C = " + fahrenheit.toFixed(2) + " °F";
});