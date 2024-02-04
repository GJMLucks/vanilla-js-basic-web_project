const logInForm = document.querySelector(".log-in-form");
const userIDInputHTML = logInForm.querySelector("input[type=text]");
const userPWInputHTML = logInForm.querySelector("input[type=password]");
const userLoginErrorDisplay = document.querySelector(".log-in-form__error__text");
const mainHTML = document.querySelector("#service");
const logOutBtn = document.querySelector(".log-out-btn");

const USERINFO_KEY = "Users";
const LOGIN_KEY = "loginCookie"

function onLogIn() {
    userLoginErrorDisplay.innerText = "";
    mainHTML.classList.remove("hidden");
    userLoginErrorDisplay.classList.add("hidden");
    logInForm.classList.add("hidden");
    localStorage.setItem("LOGIN_KEY", true);
}

function onLogOut() {
    userLoginErrorDisplay.innerText = "";
    mainHTML.classList.add("hidden");
    userLoginErrorDisplay.classList.remove("hidden");
    logInForm.classList.remove("hidden");
    localStorage.setItem("LOGIN_KEY", false);
}

function checkLogInValidation(event) {
    const userInfos = JSON.parse(localStorage.getItem(USERINFO_KEY));
    const userIDInput = userIDInputHTML.value;
    const userPWInput = userPWInputHTML.value;

    console.log(userIDInput, userPWInput);

    event.preventDefault();
    
    const userInfo = userInfos.filter( (userInfo) => userInfo.id === userIDInput );
    if( userInfo.length === 0 ){
        userLoginErrorDisplay.innerText = "ID does not exist.";
        return;
    }
    if( userInfo[0].password !== userPWInput ){
        console.log(userInfo.password, userPWInput);
        userLoginErrorDisplay.innerText = "password is wrong.";
        return;
    }

    onLogIn();
}

if( localStorage.getItem("LOGIN_KEY") ){
    onLogIn();
}

logInForm.addEventListener("submit", checkLogInValidation);
logOutBtn.addEventListener("click", onLogOut);