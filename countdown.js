const countdownElement = document.getElementById("countdown");

let seconds = 10;

const timer = setInterval(() => {

    countdownElement.innerHTML = seconds;

    seconds--;

    if (seconds < 0) {
        clearInterval(timer);
        window.location.href = "loading.html";
    }

}, 1000);