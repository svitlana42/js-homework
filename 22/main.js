// 1
let num = 6;

new Promise(function (resolve, reject) {
    resolve(num);
})
    .then(function (value) {
        return value + 7;
    })
    .then(function (value) {
        return value * 2;
    })
    .then(function (value) {
        return value - 3;
    })
    .then(function (value) {
        console.log("Результат: ", value);
    })
    .catch(function (error) {
        console.log(error);
    });

// 2
function upperText(text) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (text === "") {
                reject("Порожній рядок");
            }
            else {
                resolve(text.toUpperCase());
            }
        }, 2000);
    });
}
upperText("hello prog academy")
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    });

// 3
function numbers(a, b) {
    return new Promise(function (resolve, reject) {
        if (a > b) {
            resolve(a + " більше за " + b);
        }
        else if (b > a) {
            resolve(b + " більше за " + a);
        }
        else {
            reject("Числа рівні");
        }
    });
}
numbers(7, 12)
    .then(function (result) {
        console.log(result);
    })
    .catch(function (error) {
        console.log(error);
    });