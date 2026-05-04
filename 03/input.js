//перше завдання
let number1 = 7;
let number2 = 5;
let equally = number1 === number2;
let greater = number1 > number2;

alert(`Числа дорівнюють один одному? ${equally ? 'так' : 'ні'}`);
alert(`Перше число більше другого? ${greater ? 'так' : 'ні'}`);

//друге завдання
let num = Number(prompt("Введіть число"));
let checknum = num % 2 === 0;
let result = checknum && "Парне" || "Непарне";

console.log(result);

//третє завдання
let age = Number(prompt('Введіть вік'));
let checkAge = age < 18;
let message = checkAge && "Доступ заборонено" || "Доступ дозволено";

alert(message);

//четверте завдання
let price = 0;
let quantity = 0;
price = Number(prompt('Ціна:'));
quantity = Number(prompt('Кількість:'));

console.log(`Разом: ${price * quantity}`);

//п'яте завдання
let productPrice = prompt('Введіть вартість товару:');
let discount = productPrice * 0.5;

alert(`Зі знижкою: ${discount}`);