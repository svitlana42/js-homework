<<<<<<< HEAD
// 1
let myButton = document.createElement("button");
myButton.textContent = "Натисни на мене";

document.body.append(myButton);

let myText = document.createElement("p");
myText.textContent = "Кольоровий текст";

document.body.append(myText);

myButton.onclick = function () {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    myText.style.color = `rgb(${red}, ${green}, ${blue})`;
};

// 2
let block = document.createElement("div");
let width = 100;
let height = 100;

block.style.width = width + "px";
block.style.height = height + "px";
block.style.backgroundColor = "green";

document.body.append(block);

block.ondblclick = function () {
    width = width * 2;
    height = height * 2;
    block.style.width = width + "px";
    block.style.height = height + "px";
};

// 3
let counter = 0;

let counterButton = document.createElement("button");
counterButton.textContent = "Натисни";
counterButton.style.marginTop = "20px";

document.body.append(counterButton);

let counterText = document.createElement("p");
counterText.textContent = "0";

document.body.append(counterText);

function myCounter() {
    counter++;
    counterText.textContent = counter;

    if (counter > 10) {
        counterButton.removeEventListener(
            "click",
            myCounter
        );
    }
}

counterButton.addEventListener(
    "click",
    myCounter
);

// 4
let btn = document.createElement("button");
btn.innerText = "Елементи";
document.body.append(btn);

function removeElement() {
    this.remove();
}

btn.onclick = function () {
    for (let i = 0; i < 10; i++) {
        let myElement = document.createElement("div");
        myElement.innerText = `Елемент №${i + 1} (натисни для видалення)`;
        myElement.style.backgroundColor = "pink";
        myElement.style.cursor = "pointer";

        myElement.onclick = removeElement;

        document.body.append(myElement);
    }
};

// 5
let container = document.createElement("div");
container.style.marginTop = "15px";
document.body.append(container);

let btn1 = document.createElement("button");
btn1.className = "button first";
btn1.innerText = "Перша кнопка";
btn1.style.marginRight = "10px";
container.append(btn1);

let btn2 = document.createElement("button");
btn2.className = "button second";
btn2.innerText = "Друга кнопка";
btn2.style.marginRight = "10px";
container.append(btn2);

let btn3 = document.createElement("button");
btn3.className = "button third";
btn3.innerText = "Третя кнопка";
container.append(btn3);

container.onclick = function (event) {
        alert(`Клік отримала: ${event.target.className}`);
=======
// 1
let myButton = document.createElement("button");
myButton.textContent = "Натисни на мене";

document.body.append(myButton);

let myText = document.createElement("p");
myText.textContent = "Кольоровий текст";

document.body.append(myText);

myButton.onclick = function () {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    myText.style.color = `rgb(${red}, ${green}, ${blue})`;
};

// 2
let block = document.createElement("div");
let width = 100;
let height = 100;

block.style.width = width + "px";
block.style.height = height + "px";
block.style.backgroundColor = "green";

document.body.append(block);

block.ondblclick = function () {
    width = width * 2;
    height = height * 2;
    block.style.width = width + "px";
    block.style.height = height + "px";
};

// 3
let counter = 0;

let counterButton = document.createElement("button");
counterButton.textContent = "Натисни";
counterButton.style.marginTop = "20px";

document.body.append(counterButton);

let counterText = document.createElement("p");
counterText.textContent = "0";

document.body.append(counterText);

function myCounter() {
    counter++;
    counterText.textContent = counter;

    if (counter > 10) {
        counterButton.removeEventListener(
            "click",
            myCounter
        );
    }
}

counterButton.addEventListener(
    "click",
    myCounter
);

// 4
let btn = document.createElement("button");
btn.innerText = "Елементи";
document.body.append(btn);

function removeElement() {
    this.remove();
}

btn.onclick = function () {
    for (let i = 0; i < 10; i++) {
        let myElement = document.createElement("div");
        myElement.innerText = `Елемент №${i + 1} (натисни для видалення)`;
        myElement.style.backgroundColor = "pink";
        myElement.style.cursor = "pointer";

        myElement.onclick = removeElement;

        document.body.append(myElement);
    }
};

// 5
let container = document.createElement("div");
container.style.marginTop = "15px";
document.body.append(container);

let btn1 = document.createElement("button");
btn1.className = "button first";
btn1.innerText = "Перша кнопка";
btn1.style.marginRight = "10px";
container.append(btn1);

let btn2 = document.createElement("button");
btn2.className = "button second";
btn2.innerText = "Друга кнопка";
btn2.style.marginRight = "10px";
container.append(btn2);

let btn3 = document.createElement("button");
btn3.className = "button third";
btn3.innerText = "Третя кнопка";
container.append(btn3);

container.onclick = function (event) {
        alert(`Клік отримала: ${event.target.className}`);
>>>>>>> e4a3a4e2c779064bbf5de385e579de93c796ad23
};