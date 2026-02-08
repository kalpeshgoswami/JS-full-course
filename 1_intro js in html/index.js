
const button = document.getElementById("btn");

let userStatus = document.getElementById("lock");

button.addEventListener("click", () => {
    userStatus.textContent = "Unlock ";
});