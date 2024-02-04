const clockDisplay__time = document.querySelector(".clock span:last-child");
const clockDisplay__days = document.querySelector(".clock span:first-child");

function displayNowTime() {
    const now = new Date();
    const Year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const Day = String(now.getDate()).padStart(2, "0");
    const Hour = String(now.getHours()).padStart(2, '0');
    const Minute = String(now.getMinutes()).padStart(2, '0');
    const Second = String(now.getSeconds()).padStart(2, '0');

    clockDisplay__days.innerText = `${Year} / ${month} / ${Day}`;
    clockDisplay__time.innerText = `${Hour} : ${Minute} : ${Second}`;
}

displayNowTime();
setInterval(displayNowTime, 1000);