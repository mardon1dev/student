// Start
const formLogin = document.querySelector(".login-form");
const loading = document.querySelector(".loading");
const notification = document.querySelector(".notification");


let admins = JSON.parse(localStorage.getItem("admins")) || [];

formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let username = document.querySelector("#username");
    let usernameValue = username.value;
    
    let password = document.querySelector("#password");
    let passwordValue = password.value;

    let usernameMessage = document.querySelector(".user-message");
    let passwordMessage = document.querySelector(".pass-message");

    let found = admins.find(admin => admin.username === usernameValue);

    if (found) {
        if (found.password === passwordValue) {
            usernameMessage.textContent = "";
            passwordMessage.textContent = "";
            username.classList.remove("red");
            password.classList.remove("red");
            username.classList.add("green");
            password.classList.add("green");

            notification.classList.remove("hidden")
            notification.textContent = `Welcome ${usernameValue}`;

            username.classList.remove("green");
            password.classList.remove("green");
            formLogin.reset();

            localStorage.setItem("loggedInUser", JSON.stringify({ username: usernameValue }));

            loading.classList.remove("hidden")
            setTimeout(() => {
                window.location.pathname = "../../dashboard.html"
            }, 1000);
        } else {
            passwordMessage.textContent = "Incorrect password"
            passwordMessage.classList.add("text-red-700");
            username.classList.remove("green");
            username.classList.add("red");
            password.classList.remove("green");
            password.classList.add("red");
        }
    } else {
        usernameMessage.textContent = "User not found";
        usernameMessage.classList.add("text-red-700");
        username.classList.remove("green");
        username.classList.add("red");
        password.classList.remove("green");
    }
});
