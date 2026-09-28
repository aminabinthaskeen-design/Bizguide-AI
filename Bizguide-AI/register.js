function registerUser(event) {

    event.preventDefault();


    const businessName =
        document.getElementById("businessName").value;

    const email =
        document.getElementById("registerEmail").value;

    const password =
        document.getElementById("registerPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    if (password !== confirmPassword) {

        alert("Passwords do not match!");

        return;
    }


    if (password.length < 6) {

        alert("Password must contain at least 6 characters.");

        return;
    }


    const user = {

        businessName: businessName,

        email: email,

        password: password

    };


    localStorage.setItem(
        "bizguideUser",
        JSON.stringify(user)
    );


    alert("Account created successfully!");


    window.location.href = "login.html";
}