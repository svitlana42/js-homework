// 1
let container = document.createElement("div");

container.style.width = "100px";
container.style.height = "100px";
container.style.backgroundColor = "blue";

document.body.append(container);

container.onmouseover = function () {
    container.style.backgroundColor = "grey";
};

container.onmouseout = function () {
    container.style.backgroundColor = "blue";
};

// 2
let textBlock = document.createElement("div");
textBlock.innerText = "Натисни правою кнопкою миші";
textBlock.style.width = "300px";
textBlock.style.padding = "20px";
textBlock.style.border = "1px solid black";
textBlock.style.marginTop = "20px";
document.body.append(textBlock);

let menu = document.createElement("div");
menu.style.position = "absolute";
menu.style.border = "1px solid black"
menu.style.padding = "5px";
menu.style.display = "none";
menu.style.backgroundColor = "white"
document.body.append(menu);

function myMenu(text, action) {
    let item = document.createElement("div");
    item.innerText = text;
    item.style.padding = "10px";
    item.style.cursor = "pointer";

    item.onmouseover = function () {
        item.style.backgroundColor = "grey";
    };

    item.onmouseout = function () {
        item.style.backgroundColor = "white";
    };

    item.onclick = function (e) {
        e.stopPropagation();
        action();
        menu.style.display = "none";
    };

    menu.append(item);
}

myMenu("По центру", function () {
    textBlock.style.textAlign = "center";
});

myMenu("Ліворуч", function () {
    textBlock.style.textAlign = "left";
});

myMenu("Праворуч", function () {
    textBlock.style.textAlign = "right";
});

myMenu("Приховати", function () {
    textBlock.style.display = "none";
});

textBlock.addEventListener(
    "contextmenu", function (event) {
        event.preventDefault();
        menu.style.display = "block";
        menu.style.left = event.pageX + "px";
        menu.style.top = event.pageY + "px";
    });

document.addEventListener("click", function () {
    menu.style.display = "none";
});

// 3
let image = document.createElement("img");
image.src = "raspberry.png";
image.style.margin = "200px";
document.body.append(image);

image.onmouseover = function () {
    image.style.transform = "scale(1.2)";
    image.style.boxShadow = "0 0 10px yellow";
};

image.onmouseout = function () {
    image.style.transform = "scale(1)";
    image.style.boxShadow = "none";
};

// 4
let gameBoard = document.createElement("div");
gameBoard.style.width = "300px";
gameBoard.style.height = "300px";
gameBoard.style.border = "2px solid gray";
gameBoard.style.position = "relative";
document.body.append(gameBoard);

let player = document.createElement("div");
player.style.width = "50px";
player.style.height = "50px";
player.style.position = "absolute";
player.style.backgroundColor = "red";

let x = 120;
let y = 120;
player.style.left = x + "px";
player.style.top = y + "px";
gameBoard.append(player);

let downMenu = document.createElement("ul");
downMenu.style.padding = "10px";
downMenu.style.width = "60px";
downMenu.style.border = "1px solid gray";
downMenu.style.display = "none";
downMenu.style.listStyle = "none";
downMenu.style.position = "absolute";
downMenu.style.top = "0px";
downMenu.style.right = "0px";
downMenu.style.margin = "0px";

let menu1 = document.createElement("li");
let menu2 = document.createElement("li");
let menu3 = document.createElement("li");
menu1.textContent = "Пункт 1";
menu2.textContent = "Пункт 2";
menu3.textContent = "Пункт 3";

downMenu.append(menu1, menu2, menu3);
gameBoard.append(downMenu);

let num = -1;

window.addEventListener("keydown", function (e) {
    if (
        e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight"
    ) {
        e.preventDefault();
    }

    if (e.code === "KeyM") {
        downMenu.style.display = "block";
        menu1.style.backgroundColor = "";
        menu2.style.backgroundColor = "";
        menu3.style.backgroundColor = "";
        num = -1;
        return;
    }

    if (e.code === "KeyC") {
        downMenu.style.display = "none";
        num = -1;
        menu1.style.backgroundColor = "";
        menu2.style.backgroundColor = "";
        menu3.style.backgroundColor = "";
        return;
    }

    if (downMenu.style.display === "block") {
        if (e.key === "ArrowDown") {
            if (num === -1) {
                num = 0;
                menu1.style.backgroundColor = "pink";
            }
            else if (num === 0) {
                num = 1;
                menu1.style.backgroundColor = "";
                menu2.style.backgroundColor = "pink";
            }
            else if (num === 1) {
                num = 2;
                menu2.style.backgroundColor = "";
                menu3.style.backgroundColor = "pink";
            }

        }

        if (e.key === "ArrowUp") {
            if (num === -1) {
                num = 2;
                menu3.style.backgroundColor = "pink";
            }
            else if (num === 2) {
                num = 1;
                menu3.style.backgroundColor = "";
                menu2.style.backgroundColor = "pink";
            }
            else if (num === 1) {
                num = 0;
                menu2.style.backgroundColor = "";
                menu1.style.backgroundColor = "pink";
            }
        }
    }

    else {
        if (e.key === "ArrowUp" && y > 0) {
            y = y - 10;
            player.style.top = y + "px";
        }
        if (e.key === "ArrowDown" && y < 250) {
            y = y + 10;
            player.style.top = y + "px";
        }
        if (e.key === "ArrowLeft" && x > 0) {
            x = x - 10;
            player.style.left = x + "px";
        }
        if (e.key === "ArrowRight" && x < 250) {
            x = x + 10;
            player.style.left = x + "px";
        }
    }
});

// 5
let board = document.createElement("div");
board.style.width = "500px";
board.style.height = "300px";
board.style.border = "2px solid green";
board.style.position = "relative";
board.style.marginTop = "30px";

document.body.append(board);

let object = document.createElement("div");
object.style.width = "50px";
object.style.height = "50px";
object.style.backgroundColor = "green";
object.style.position = "absolute";
object.style.top = "0px";
object.style.left = "0px";
object.style.cursor = "grab";

board.append(object);

let clickMouse = false;

object.onmousedown = function () {
    clickMouse = true;
};

window.onmouseup = function () {
    clickMouse = false;
};

board.onmousemove = function (event) {
    if (clickMouse === false) {
        return;
    }

    let x = event.offsetX - 50;
    let y = event.offsetY - 50;

    if (x < 0) {
        x = 0;
    }
    if (y < 0) {
        y = 0;
    }
    if (x > 450) {
        x = 450;
    }
    if (y > 250) {
        y = 250;
    }

    object.style.left = x + "px";
    object.style.top = y + "px";
};