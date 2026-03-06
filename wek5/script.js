function createLoginTracker() {
    let attempts = 0;

    return function () {

        attempts++;
        const msg = document.getElementById("attemptMsg");
        const loginBtn = document.getElementById("loginBtn");
        if (attempts >= 3) {
            msg.textContent = "Too many failed attempts! Login disabled.";
            loginBtn.disabled = true;
        } 
        else {
            msg.textContent = "Invalid login! Attempts left: " + (3 - attempts);
        }
    };
}
const trackLogin = createLoginTracker();
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let userError = document.getElementById("userError");
    let passError = document.getElementById("passError");

    userError.textContent = "";
    passError.textContent = "";
    
    let isValid = true;
    if (username === "") {
        userError.textContent = "Username is required";
        isValid = false;
    }


    if (password.length < 6) {
        passError.textContent = "Password must contain at least 6 characters";
        isValid = false;
    }

    if (isValid) {
        trackLogin();
    }

});