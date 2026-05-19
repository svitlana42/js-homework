let user = prompt("Введіть: камінь, ножиці чи папір");
let upperUser = user.toLowerCase();
let game = ["камінь", "ножиці", "папір"];
let value = Math.floor(Math.random() * game.length);
let computer = game[value];
let result = "";

if (upperUser === computer) {
    result = "Нічия";
}

else if (
    (upperUser === "камінь" && computer === "ножиці") ||
    (upperUser === "ножиці" && computer === "папір") ||
    (upperUser === "папір" && computer === "камінь")
) {
    result = "Перемога";
}

else {
    result = "Поразка";
}

alert(
    `Ваш вибір: ${upperUser}
    Вибір комп'ютера: ${computer}
    Результат: ${result}`
);