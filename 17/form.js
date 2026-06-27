<<<<<<< HEAD
window.onload = function () {
    //1 
    let amount = document.querySelector("#amount");
    let course = document.querySelector("#course");
    let converter = document.querySelector("#converter");
    let clear = document.querySelector("#clear");
    let result = document.querySelector("#result");

    converter.onclick = function () {
        let myResult = amount.value * course.value;
        result.textContent = "Результат: " + myResult;
    };

    clear.onclick = function () {
        amount.value = "";
        course.value = "";
        result.textContent = "";
    };

    // 2
    let task = document.querySelector("#task");
    let btn = document.querySelector("#btn");
    let list = document.querySelector("#list");


    btn.onclick = function () {
        if (task.value === "") {
            alert("Введіть задачу");
            return;
        }
        let item = document.createElement("li");
        item.textContent = task.value;

        let btn1 = document.createElement("button");
        btn1.textContent = "Видалити";
        btn1.style.margin = "10px";

        item.append(btn1);
        list.append(item);

        task.value = "";

        btn1.onclick = function () {
            item.remove();
        };
    };
};

=======
window.onload = function () {
    //1 
    let amount = document.querySelector("#amount");
    let course = document.querySelector("#course");
    let converter = document.querySelector("#converter");
    let clear = document.querySelector("#clear");
    let result = document.querySelector("#result");

    converter.onclick = function () {
        let myResult = amount.value * course.value;
        result.textContent = "Результат: " + myResult;
    };

    clear.onclick = function () {
        amount.value = "";
        course.value = "";
        result.textContent = "";
    };

    // 2
    let task = document.querySelector("#task");
    let btn = document.querySelector("#btn");
    let list = document.querySelector("#list");


    btn.onclick = function () {
        if (task.value === "") {
            alert("Введіть задачу");
            return;
        }
        let item = document.createElement("li");
        item.textContent = task.value;

        let btn1 = document.createElement("button");
        btn1.textContent = "Видалити";
        btn1.style.margin = "10px";

        item.append(btn1);
        list.append(item);

        task.value = "";

        btn1.onclick = function () {
            item.remove();
        };
    };
};

>>>>>>> e4a3a4e2c779064bbf5de385e579de93c796ad23
