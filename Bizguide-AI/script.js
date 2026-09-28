function loginUser(event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value;

    const password =
        document.getElementById("password").value;


    if (email && password) {

        alert("Login successful!");

        window.location.href =
            "dashboard.html";

    }

}


function showRegister() {

    alert(
        "Registration system will be added in the next step!"
    );

}