document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    let fullName = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let age = document.getElementById("age").value;

    // Full Name Validation
    let nameParts = fullName.split(" ");

    if (fullName === "" || nameParts.length < 2) {
        alert("Full Name must contain at least 2 words.");
        return;
    }

    // Email Validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Password Validation
    let passwordPattern =
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/;

    if (!password.match(passwordPattern)) {
        alert(
            "Password must be at least 8 characters and include one uppercase letter, one number, and one special character."
        );
        return;
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Age Validation
    if (age < 18) {
        alert("You must be 18 or older.");
        return;
    }

    // Success Message
    alert("Registration Successful!");

});