document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    let usernameError = document.getElementById("usernameError");
    let passwordError = document.getElementById("passwordError");
    let output = document.getElementById("output");

    usernameError.innerHTML = "";
    passwordError.innerHTML = "";
    output.innerHTML = "";

    let valid = true;

    if (username === "") {
        usernameError.innerHTML = "Username is required";
        valid = false;
    }

    if (password === "") {
        passwordError.innerHTML = "Password is required";
        valid = false;
    }

    if (valid) {
        output.innerHTML = `
            <h2>Login Successful</h2>
            <p>Welcome, ${username}!</p>
        `;
    }
});