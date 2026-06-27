<<<<<<< HEAD
window.onload = function () {
    let time = document.querySelector(".time");
    let startBtn = document.querySelector(".start");
    let resetBtn = document.querySelector(".reset");

    let seconds = 1500;
    let timerId;

    function myTime() {
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;

        if (sec < 10) {
            sec = "0" + sec;
        }

        time.textContent = min + ":" + sec;
    }

    startBtn.onclick = function () {
        clearInterval(timerId);
        timerId = setInterval(function () {
            seconds--;
            myTime();

            if (seconds <= 0) {
                clearInterval(timerId);
                alert("Час вийшов");
            }
        }, 1000);
    };
    resetBtn.onclick = function () {
        clearInterval(timerId);
        seconds = 1500;
        myTime();
    };
=======
window.onload = function () {
    let time = document.querySelector(".time");
    let startBtn = document.querySelector(".start");
    let resetBtn = document.querySelector(".reset");

    let seconds = 1500;
    let timerId;

    function myTime() {
        let min = Math.floor(seconds / 60);
        let sec = seconds % 60;

        if (sec < 10) {
            sec = "0" + sec;
        }

        time.textContent = min + ":" + sec;
    }

    startBtn.onclick = function () {
        clearInterval(timerId);
        timerId = setInterval(function () {
            seconds--;
            myTime();

            if (seconds <= 0) {
                clearInterval(timerId);
                alert("Час вийшов");
            }
        }, 1000);
    };
    resetBtn.onclick = function () {
        clearInterval(timerId);
        seconds = 1500;
        myTime();
    };
>>>>>>> e4a3a4e2c779064bbf5de385e579de93c796ad23
};