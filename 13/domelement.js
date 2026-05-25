// 1
let first = document.querySelectorAll("#tree > li");
console.log("Перший рівень:", first.length);

let second = document.querySelectorAll("#tree > li > ul > li");
console.log("Другий рівень:", second.length);

// 2
const booksArray = [

    {

        title: 'Пригоди Аліси в Країні Див',

        year: 1865,

        rating: 4.5

    },

    {

        title: '1984',

        year: 1949,

        rating: 4.8

    },

    {

        title: 'Гаррі Поттер та філософський камінь',

        year: 1997,

        rating: 4.7

    }

];

let tableBook = document.getElementById("books-table");

for (let book of booksArray) {
    let row = document.createElement("tr");

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.year}</td>
    <td>${book.rating}</td>`;

    tableBook.append(row);
}

// 3
const elementsArray = [

    { tag: 'p', text: 'Елемент 1' },

    { tag: 'div', text: 'Елемент 2' },

    { tag: 'span', text: 'Елемент 3' }

];

const container = document.getElementById("container");

function myElements(elementObject) {
    let newElement = document.createElement(elementObject.tag);
    newElement.textContent = elementObject.text;
    return newElement;
}

for (let element of elementsArray) {
    let result = myElements(element);

    result.style.marginBottom = "10px";

    container.append(result);
}

// 4
const myBlock = document.getElementById("block");

const array = [

    { text: 'Елемент 1', usePrepend: true },

    { text: 'Елемент 2', usePrepend: false },

    { text: 'Елемент 3', usePrepend: true }

];

array.forEach(item => {
    const p = document.createElement("p");
    p.textContent = item.text;

    if (item.usePrepend) {
        myBlock.prepend(p);
    }
    else {
        container.append(p);
    }
});
