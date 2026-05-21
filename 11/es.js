// 1
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

let newArray = [...firstArray, ...secondArray];

console.log(newArray);

// 2
function message(string, ...array) {
    console.log(string);
    console.log(array);
}

message("My favorite animals", "cat", "dog", "puma");

// 3
function argument(...numbers) {
    let value = 0;

    for (let number of numbers) {
        value += number;
    }
    return value / numbers.length;
}

console.log(argument(6, 10, 18, 36));

// 4
function myType(value) {
    console.log(`Тип даних: ${typeof value}`);
}

myType(3);
myType("JavaScript");
myType(false);

// 5
let myValue = "Hello";

if (typeof myValue === "number") {
    console.log("Це число");
}

else if (typeof myValue === "string") {
    console.log("Це рядок");
}

else {
    console.log("Це інший тип");
}