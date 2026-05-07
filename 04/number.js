//перше завдання
let num1 = Number(prompt("Введіть перше число:"));
let num2 = Number(prompt("Введіть друге число:"));
let num3 = Number(prompt("Введіть третє число:"));

if (num1 >= num2 && num1 >= num3) {
  console.log(`Найбільше число: ${num1}`);
} else if (num2 >= num1 && num2 >= num3) {
  console.log(`Найбільше число: ${num2}`);
} else {
  console.log(`Найбільше число: ${num3}`);
}

//друге завдання
let month = Number(prompt("Введіть номер місяця (1-12):"));

if (month === 12 || month === 1 || month === 2) {
  console.log("Зима");
}
else if (month >= 3 && month <= 5) {
  console.log("Весна");
}
else if (month >= 6 && month <= 8) {
  console.log("Літо");
}
else if (month >= 9 && month <= 11) {
  console.log("Осінь");
}
else {
  console.log("Невірний номер місяця");
}

//третє завдання
let num = Number(prompt("Введіть будь-яке число"));

if (num > 0) {
  console.log("Додатне число");
}
else if (num < 0) {
  console.log("Від'ємне число");
}
else {
  console.log("Число нуль");
}

//четверте завдання
let angle = Number(prompt("Введіть величину кута в градусах"));
let result = angle === 90
  ? "Прямий кут"
  : angle < 90
    ? "Гострий кут"
    : "Тупий кут";

console.log(result);

//п'яте завдання
let assessment = Number(prompt("Введіть свою оцінку за тест:"));
let letter = "";

if (assessment >= 90 && assessment <= 100) {
  letter = "A";
}
else if (assessment >= 80) {
  letter = "B";
}
else if (assessment >= 70) {
  letter = "C";
}
else if (assessment >= 60) {
  letter = "D";
}
else {
  letter = "F";
}

let score = assessment >= 60 ? "Зарахований" : "Не зарахований";

let newAssessment = assessment;

console.log(`Початковий бал: ${newAssessment}`);
console.log(`Значення при постфіксному інкременті: ${newAssessment++}`);
console.log(`Поточне значення при постфіксному інкременті: ${newAssessment}`);
console.log(`Оцінка: ${letter}`);
console.log(`Підсумок: ${score}`);