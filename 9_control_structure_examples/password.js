document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let currentPassword = "12345";

    let oldPassword = document.getElementById("oldPassword").value;
    let newPassword = document.getElementById("newPassword").value;

    let status = document.getElementById("status");

    if (oldPassword.lenth < 5) {
        status.textContent = "password must be 5 character length";
    } else if (oldPassword !== currentPassword) {
        status.textContent = "old password is not matched with current password";
    } else if (newPassword.lenth > 5) {
        status.textContent = "password must be 6 character lenth";
    } else if (newPassword === currentPassword) {
        status.textContent = "new password is same as old password you have to change";
    } else {
        currentPassword = newPassword;

        status.textContent = "Password is upadated"
    }
});