// push 1 
let num = [];
num.push(9);
num.push(10);
num.push(11);

console.log(num);

// 2
function myElement(array, element) {
    array.push(element);
}

let names = ["Anna", "Sofi", "Sem"];
myElement(names, "Vlad");

console.log(name);

// pop 1
let fruits = ["orange", "apple", "banana"];

fruits.pop();

console.log(fruits);

// 2
function lastElement(array) {
    array.pop();
}

let colors = ["red", "green", "blue"];
lastElement(colors);

console.log(colors);

// unshift 1
let furniture = ["table", "chair", "sofa"];
furniture.unshift("cabinet");

console.log(furniture);

// 2
function firstElement(array, aniElement) {
    array.unshift(aniElement);
}

let animals = ["tiger", "panther"];
firstElement(animals, "panda");

console.log(animals);

// shift 1 
let nature = ["flowers", "tree", "bush"];
nature.shift();

console.log(nature);

// 2
function removeFirstElement(array) {
    array.shift();
}

let auto = ["mercedes", "toyota", "kia"];
removeFirstElement(auto);

console.log(auto);

// fill 1
let numbers = Array(4);
numbers.fill(7);

console.log(numbers);

// 2
function myArray(array, value, start, end) {
    array.fill(value, start, end);
}
let math = ["circle", "square", "triangle", "rectangle"];
myArray(math, "cube", 0, 1);

console.log(math);

// splice 1
let body = ["hand", "leg", "nose", "mouth"];
body.splice(1, 2);

console.log(body);

// 2
function removeSpliceElement(array, index, count) {
    array.splice(index, count);
}

let weather = ["rain", "snow", "ice", "wind"];
removeSpliceElement(weather, 0, 3);

console.log(weather);

// reverse 1
let letters = ["a", "b", "c", "d"];
letters.reverse();

console.log(letters);

// 2
function revElement(array) {
    array.reverse();
}

let construction = ["house", "flat", "basement"];
revElement(construction);

console.log(construction);

// concat 1
let first = [1, 2, 3];
let second = [4, 5, 6];

let third = first.concat(second);

console.log(third);

// 2
function arrays(array1, array2) {
    return array1.concat(array2);
}

let num1 = [7, 8, 9];
let num2 = [10, 11, 12];

let result = arrays(num1, num2);

console.log(result);

// includes 1 
let num3 = [7, 6, 4, 5];
let result1 = num3.includes(5);

console.log(result1);

// 2
function inElement(array, element) {
    return array.includes(element);
}
let author = ["Котляревський", "Шевченко", "Квітка-Основ'яненко"];

let add = inElement(author, "Франко");

console.log(add);

// filter 1
let numbers1 = [1, 2, 3, 4];

let filNumbers = numbers1.filter(function (number) {
    return number % 2 === 0;
});

console.log(filNumbers);

// 2
function filterArray(array, condition) {
    return array.filter(condition);
}

let numbers2 = [20, 35, 50, 100];

function filArray(number) {
    return number > 35;
}

let result2 = filterArray(numbers2, filArray);

console.log(result2);

// map 1
let num4 = [6, 9, 5, 7];

let newNum = num4.map(function (number) {
    return number ** 2;
});

console.log(newNum);

// 2
function mapArray(array, transformer) {
    return array.map(transformer);
}

let count1 = [12, 23, 35];

function addValue(value) {
    return `Значення: ${value}`;
}

let string = mapArray(count1, addValue);

console.log(string);