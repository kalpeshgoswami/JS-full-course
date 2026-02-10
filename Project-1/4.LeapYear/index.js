// document.getElementById("form").addEventListener("submit", (e) => {
//     e.preventDefault();

//     let year = Number(document.getElementById("Year").value);
//     let Result = document.getElementById("result");

//     if (year % 400 === 0) {
//         Result.textContent = `${year} is a Leap Year`
//     } else if (year % 100 === 0) {
//         Result.textContent = `${year} is not Leap Year`
//     } else if (year % 4 === 0) {
//         Result.textContent = `${year} is a Leap Year`
//     } else {
//         Result.textContent = `${year} is a Leap Year`
//     }
// });

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let year = Number(document.getElementById("Year").value);
    let result = document.getElementById("result");

    if (year % 400 === 0) {
        result.textContent = `${year} is a Leap Year`;
    } else if (year % 100 === 0) {
        result.textContent = `${year} is NOT a Leap Year`;
    } else if (year % 4 === 0) {
        result.textContent = `${year} is a Leap Year`;
    } else {
        result.textContent = `${year} is NOT a Leap Year`;
    }
});
