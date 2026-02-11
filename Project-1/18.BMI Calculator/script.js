document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    if (!weight || !height || weight <= 0 || height <= 0) {
        document.getElementById("result").innerText = "Please enter valid weight and height.";
        return;
    }

    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal weight";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    document.getElementById("result").innerText = `Your BMI is ${bmi} (${category})`;
});