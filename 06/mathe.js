// перше завдання
function plus(a, b) {
    return a + b;
}
function minus(a, b) {
    return a - b;
}
function division(a, b) {
    return a / b;
}
function multi(a, b) {
    return a * b;
}

let sum = prompt("Введіть знак математичної операціі");
let firstNumber = Number(prompt("Введіть перше число"));
let secondNumber = Number(prompt("Введіть друге число"));

switch (sum) {
    case "+":
        console.log(`Результат: ${plus(firstNumber, secondNumber)}`);
        break;

    case "-":
        console.log(`Результат: ${minus(firstNumber, secondNumber)}`);
        break;

    case "/":
        console.log(`Результат: ${division(firstNumber, secondNumber)}`);
        break;

    case "*":
        console.log(`Результат: ${multi(firstNumber, secondNumber)}`);
        break;
    
    default:
        console.log("Невідома операція");    
}

// друге завдання
function hiUser(user) {
    console.log(`Вітаю ${user}`);
}
function welcomeUser(users, callback) {
    for (let a = 0; a < users.length; a++) {
        callback(users[a]);
    }
}

let usersName = ["Ольга", "Влад", "Марія", "Анна"];
welcomeUser(usersName, hiUser);

// третє завдання
const hUser = user => {
    console.log(`Вітаю ${user}`);
}
function welcomeUser(users, callback) {
    for (let a = 0; a < users.length; a++) {
        callback(users[a]);
    }
}

let usName = ["Ольга", "Влад", "Марія", "Анна"];
welcomeUser(usName, hUser); 

// // четверте завдання
function parameter(param = "Значення за замовчуванням") {
    console.log(param);
}

parameter();
parameter("Значення");

// п'яте завдання
function stringMessage(text, callback) {
    callback(text);
}
function myMessage(message) {
    console.log(message);
}

stringMessage("Повідомлення", myMessage);

// шосте завдання
function multiplyValues(a, b, c) {
    return a * b * c;
}