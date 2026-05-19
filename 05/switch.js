//перше завдання
let geometry = prompt("Введіть геометричну фігуру");

switch (geometry) {
    case "коло": 
        console.log("Коло має 0 сторін");
        break;

    case "квадрат": 
        console.log("Квадрат має 4 сторони");
        break;
        
    case "трикутник": 
        console.log("Трикутник має 3 сторони");
        break;
        
    default:
        console.log("Невідома фігура");    
}

//друге завдання
let start = 1;
let end = 20;
let sum = 0;
let value = start;

while (value <= end) {
    if (value % 2 === 0) {
        sum += value;
    }
    value++;
}

console.log(`Сума парних чисел від ${start} до ${end} дорівнює: ${sum}`);

// третє завдання
let number = 5;

console.log(`Таблиця множення на ${number}`);

for (let a = 1; a <= 9; a++) {
    console.log(`${number} * ${a} = ${number * a}`);
}

// четверте завдання
let startNum = 10;

for (let b = startNum; b >= 1; b--) {
    console.log(b);
}

// п'яте завдання
let numbers = Number(prompt("Введіть число"));

for (let a = 1; a <= 1; a++) {
    if (numbers % 2 === 0) {
        console.log(`Парне число`);
    }
    else {
        console.log(`Непарне число`);
    } 
}

// шосте завдання
for (let b = 1; b <= 10; b++) {
    if (b % 2 == 0) {
        console.log(`Перше знайдене парне число: ${b}`);
        break;
    }
}

// сьоме завдання
for (let c = 1; c <= 10; c++) {
    if (c % 2 !== 0) {
        continue;
    }
    console.log("Парне число:" +c);
}
