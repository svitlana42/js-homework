window.onload = function () {
    //1 
    let amount = document.createElement("input");
    amount.placeholder = "Введіть суму";
    amount.style.marginBottom = "20px";
    document.body.append(amount);

    let course = document.createElement("input");
    course.placeholder = "Введіть курс обміну";
    document.body.append(course);

    let converter = document.createElement("button");
    converter.textContent = "Конвертувати";
    document.body.append(converter);

    let clear = document.createElement("button");
    clear.textContent = "Очистити";
    clear.style.marginLeft = "15px";
    document.body.append(clear);

    let result = document.createElement("p");
    result.style.marginBottom = "20px";
    document.body.append(result);

    converter.onclick = function () {
        let amountInput = amount.value;
        let courseInput = course.value;
        let myResult = amountInput * courseInput;
        result.textContent = "Результат:" + myResult;
    };

    clear.onclick = function () {
        amount.value = "";
        course.value = "";
        result.textContent = "";
    };

    // 2
    let task = document.createElement("input");
    task.placeholder = "Задайте завдання";
    document.body.append(task);

    let btn = document.createElement("button");
    btn.textContent = "Додати задачу";
    document.body.append(btn);

    let list = document.createElement("ul");
    document.body.append(list);

    btn.onclick = function () {
        if (task.value === "") {
            alert("Введіть задачу");
            return;
        }
        let item = document.createElement("li");
        item.textContent = task.value;
        item.style.marginTop = "10px";

        let btn1 = document.createElement("button");
        btn1.textContent = "Видалити";
        btn1.style.marginLeft = "15px";

        item.append(btn1);
        list.append(item);

        task.value = "";

        btn1.onclick = function () {
            item.remove();
        };
    };
};

