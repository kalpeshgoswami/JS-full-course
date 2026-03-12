const button = document.getElementById("button");

let userStatus = document.getElementById("form");

button.addEventListener("click", (e) => {
    userStatus.textContent = "Successful";

});

document.getElementsByClassName("paragraph")[0].textContent = "i playing god of war"