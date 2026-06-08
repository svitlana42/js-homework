window.onload = function () {
    // 1
    let red = document.querySelector("#red");
    let green = document.querySelector("#green");
    let blue = document.querySelector("#blue");

    red.onchange = function () {
        document.body.style.backgroundColor = this.value;
    };
    green.onchange = function () {
        document.body.style.backgroundColor = this.value;
    };
    blue.onchange = function () {
        document.body.style.backgroundColor = this.value;
    };

    // 2
    let reading = document.querySelector("#reading");
    let sport = document.querySelector("#sport");
    let music = document.querySelector("#music");
    let result = document.querySelector(".result");

    reading.onchange = hobby;
    sport.onchange = hobby;
    music.onchange = hobby;

    function hobby() {
        let hobbies = "";
        if (reading.checked) {
            hobbies += reading.value + ", ";
        }
        if (sport.checked) {
            hobbies += sport.value + ", ";
        }
        if (music.checked) {
            hobbies += music.value + ", ";
        }
        hobbies = hobbies.slice(0, -2);

        result.textContent = "Ваші хобі: " + hobbies;
    }

    //3
    let country = document.querySelector("#country");
    let info = document.querySelector(".info");

    country.onchange = function () {
        if (country.value === "ukraine") {
            info.textContent = "Столиця: Киів. Населення: 41млн.";
        }
        if (country.value === "germany") {
            info.textContent = "Столиця: Берлін. Населення: 83млн.";
        }
        if (country.value === "england") {
            info.textContent = "Столиця: Лондон. Населення: 56млн.";
        }
    };

    // 4
    let rating = document.querySelectorAll('input[name="rating"]');
    let message = document.querySelector(".rate");

    for (let i = 0; i < rating.length; i++) {
        rating[i].onchange = function () {
            message.textContent = "Дякуємо за вашу оцінку: " + this.value;
        };
    }

    // 5
    let pizza = document.querySelector("#pizza");
    let sizes = document.querySelectorAll('input[name="size"]');
    let toppings = document.querySelectorAll(".topping");
    let price = document.querySelector(".price");

    pizza.onchange = pizzaPrice;

    for (let i = 0; i < sizes.length; i++) {
        sizes[i].onchange = pizzaPrice;
    }
    for (let i = 0; i < toppings.length; i++) {
        toppings[i].onchange = pizzaPrice;
    }

    function pizzaPrice() {
        if (pizza.value === "") {
            price.textContent = "Оберіть піцу";
            return;
        }

        let sum = Number(pizza.value);

        for (let i = 0; i < sizes.length; i++) {
            if (sizes[i].checked) {
                sum += Number(sizes[i].value);
            }
        }
        for (let i = 0; i < toppings.length; i++) {
            if (toppings[i].checked) {
                sum += 25;
            }
        }
        price.textContent = "Ціна: " + sum + " грн.";
    }
};

