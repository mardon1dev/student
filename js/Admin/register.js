// Register 

const registerForm = document.querySelector(".register-form");
const loading = document.querySelector(".loading");
const notification = document.querySelector(".notification");

const admins = JSON.parse(localStorage.getItem("admins")) || [];

registerForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let username = document.querySelector("#username");
    let usernameValue = username.value
    let password = document.querySelector("#password");
    let passwordValue = password.value

    let usernameMessage = document.querySelector(".user-message");
    let passwordMessage = document.querySelector(".pass-message");

    if (usernameValue.length == "" || passwordValue.length == "") {
        usernameMessage.textContent = "Please fill in the input";
        passwordMessage.textContent = "Please fill in the input";
        username.classList.add("red");
        password.classList.add("red");
        return;
    }
    else if (usernameValue.length  < 3 || passwordValue.length < 3) {
        usernameMessage.textContent = "Username must be at least 3 characters long";
        passwordMessage.textContent = "Password must be at least 3 characters long";
        return;
    }        
    let found = admins.find(user => user.username === usernameValue);

    if (found) {
        usernameMessage.textContent = "Username already exists";
        usernameMessage.classList.add("text-red-700")
        username.classList.add("red");
        return;
    }
    username.classList.remove("red");
    password.classList.remove("red");
    username.classList.add("green");
    password.classList.add("green");

    let newAdmin = {
        username: usernameValue,
        password: passwordValue
    }
    admins.push(newAdmin);
    localStorage.setItem("admins", JSON.stringify(admins));


    usernameMessage.textContent = "";
    passwordMessage.textContent = "";
    
    notification.classList.remove("hidden")
    notification.textContent = "Admin created successfully!";

    username.classList.remove("green");
    password.classList.remove("green");

    registerForm.reset();

    loading.classList.remove("hidden")
    setTimeout(() => {
        window.location.pathname = "../../index.html"
    }, 1000);
})