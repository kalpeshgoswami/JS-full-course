document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let mobile = document.getElementById("mobile").value;

    if (name === "" || email === "" || password === "" || age === "" || mobile === "") {
        alert("All fields are required!");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let mobilePattern = /^[0-9]{10}$/;

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    if (isNaN(age)) {
        alert("Age must be a numeric value.");
        return;
    }

    if (!mobile.match(mobilePattern)) {
        alert("Mobile number must be 10 digits.");
        return;
    }

    alert("Registration Successful!");
    return true;

})