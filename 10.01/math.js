// 1
function minNumber(firstNumber, secondNumber) {
    return Math.min(firstNumber, secondNumber);
}

console.log(minNumber(45, 74));

// 2
function maxNumber(firstNumber, secondNumber) {
    return Math.max(firstNumber, secondNumber);
}

console.log(maxNumber(3, 12));

// 3
function powNumber(number, power) {
    return Math.pow(number, power);
}

console.log(powNumber(5, 3));

// 4
function floorNumber(number) {
    return Math.floor(number);
}

console.log(floorNumber(4.8));

// 5
function ceilNumber(number) {
    return Math.ceil(number);
}

console.log(ceilNumber(78.9));

// 6
function birthYear() {
    let age = Number(prompt("Введіть ваш вік"));
    let myDate = new Date();
    let myYear = myDate.getFullYear();
    let year = myYear - age;
    return year;
}

console.log(`Ваш рік народження: ${birthYear()}`);

// 7
let dateTime = new Date();

console.log(dateTime.toLocaleString());

// 8
let text = "My favorite fruit is banana";
let array = text.split(" ");
let words = array.map(function (word) {
    return word.toUpperCase();
});

console.log(words);
