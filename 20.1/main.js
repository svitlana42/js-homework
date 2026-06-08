window.onload = function () {
    // 1
    function myMessage(message, time) {
        setTimeout(function () {
            console.log(message);
        }, time);
    }

    myMessage("Минуло п'ять секунд", 5000);

    // 2
    const button = document.querySelector("#btn");
    const text = document.querySelector("p");

    let count = 0;
    let timer;

    button.onclick = function () {
        clearInterval(timer);

        count = 0;
        text.textContent = count;

        timer = setInterval(function () {
            count++;
            text.textContent = count;

            if (count >= 10) {
                clearInterval(timer);
            }
        }, 1000);
    };

    // 3
    const btn = document.querySelector("#myBtn");

    btn.onclick = function () {
        const root = document.documentElement;

        let colors = [
            "red", "gray", "blue", "green", "pink", "yellow"
        ];

        const randomColor = Math.floor(Math.random() * colors.length);
        root.style.setProperty(
            "--bg-color",
            colors[randomColor]
        );
    };
};