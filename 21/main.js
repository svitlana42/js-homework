<<<<<<< HEAD
window.onload = function () {
    // 1
    let input = document.querySelector("#input");
    let save = document.querySelector("#save");
    let show = document.querySelector("#show");
    let clear = document.querySelector("#clear");
    let result = document.querySelector("#result");

    save.onclick = function () {
        sessionStorage.setItem("userText", input.value);
    };

    show.onclick = function () {
        result.textContent =
            sessionStorage.getItem("userText");
    };

    clear.onclick = function () {
        input.value = "";
        result.textContent = "";
        sessionStorage.removeItem("userText");
    };

    // 2
    let color = document.querySelector("#color");
    let myColor = localStorage.getItem("pageColor");

    if (myColor) {
        document.body.style.backgroundColor = myColor;
    }

    color.onchange = function () {
        document.body.style.backgroundColor = this.value;
        localStorage.setItem("pageColor", this.value);
    };

    // 3
    let task = document.querySelector("#task");
    task.style.marginTop = "20px";
    let btn = document.querySelector("#btn");
    let list = document.querySelector("#list");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    myTasks();

    btn.onclick = function () {
        tasks.push(task.value);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        task.value = "";
        myTasks();
    };
    function myTasks() {
        list.innerHTML = "";

        for (let i = 0; i < tasks.length; i++) {
            let li = document.createElement("li");
            li.textContent = tasks[i];

            let btn1 = document.createElement("button");
            btn1.textContent = "Видалити";
            btn1.style.marginLeft = "15px";

            li.append(btn1);
            list.append(li);

            btn1.onclick = function () {
                tasks.splice(i, 1);

                localStorage.setItem("tasks", JSON.stringify(tasks));
                myTasks();
            };
        }
    }

    // 4
    const cat = {
        name: "Alisa",
        age: 9,
        toys: ["mouse", "laser"],
        health: { vaccinated: true, weight: 6 }
    };

    const myJson = JSON.stringify(cat);

    console.log(myJson);
=======
window.onload = function () {
    // 1
    let input = document.querySelector("#input");
    let save = document.querySelector("#save");
    let show = document.querySelector("#show");
    let clear = document.querySelector("#clear");
    let result = document.querySelector("#result");

    save.onclick = function () {
        sessionStorage.setItem("userText", input.value);
    };

    show.onclick = function () {
        result.textContent =
            sessionStorage.getItem("userText");
    };

    clear.onclick = function () {
        input.value = "";
        result.textContent = "";
        sessionStorage.removeItem("userText");
    };

    // 2
    let color = document.querySelector("#color");
    let myColor = localStorage.getItem("pageColor");

    if (myColor) {
        document.body.style.backgroundColor = myColor;
    }

    color.onchange = function () {
        document.body.style.backgroundColor = this.value;
        localStorage.setItem("pageColor", this.value);
    };

    // 3
    let task = document.querySelector("#task");
    task.style.marginTop = "20px";
    let btn = document.querySelector("#btn");
    let list = document.querySelector("#list");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    myTasks();

    btn.onclick = function () {
        tasks.push(task.value);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        task.value = "";
        myTasks();
    };
    function myTasks() {
        list.innerHTML = "";

        for (let i = 0; i < tasks.length; i++) {
            let li = document.createElement("li");
            li.textContent = tasks[i];

            let btn1 = document.createElement("button");
            btn1.textContent = "Видалити";
            btn1.style.marginLeft = "15px";

            li.append(btn1);
            list.append(li);

            btn1.onclick = function () {
                tasks.splice(i, 1);

                localStorage.setItem("tasks", JSON.stringify(tasks));
                myTasks();
            };
        }
    }

    // 4
    const cat = {
        name: "Alisa",
        age: 9,
        toys: ["mouse", "laser"],
        health: { vaccinated: true, weight: 6 }
    };

    const myJson = JSON.stringify(cat);

    console.log(myJson);
>>>>>>> e4a3a4e2c779064bbf5de385e579de93c796ad23
};