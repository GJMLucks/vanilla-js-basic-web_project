const documentHTML = document.querySelector("html");
const randomBackgroundBtn = document.querySelector(".random-background-btn");

function randomImageName() {
    documentHTML.style.backgroundImage = `url(src/img/${Math.floor(Math.random() * 10)}.jpg)`;
}

randomBackgroundBtn.addEventListener("click", randomImageName);

randomImageName();