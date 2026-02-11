document.getElementById("Celsius").addEventListener("click", function() {
    let value = Number(document.getElementById("temp").value);
    if(isNaN(value)){
        document.getElementById("result").innerText = "Please enter a valid number";
        return;
    }
    let result = (value - 32) * 5 / 9;
    document.getElementById("result").innerText = value + "°F = " + result.toFixed(2) + "°C";
});

document.getElementById("Fahrenheit").addEventListener("click", function() {
    let value = Number(document.getElementById("temp").value);
    if(isNaN(value)){
        document.getElementById("result").innerText = "Please enter a valid number";
        return;
    }
    let result = (value * 9 / 5) + 32;
    document.getElementById("result").innerText = value + "°C = " + result.toFixed(2) + "°F";
});
