let headerId = document.getElementById("main-header");
console.log(headerId);

let className = document.getElementsByClassName("container");
console.log(className);

let tagName = document.getElementsByTagName("div");
console.log(tagName);

let first = document.querySelector("li:first-child");
console.log(first);

let last = document.querySelector("li:last-child");
console.log(last);

let third = document.querySelector("li:nth-child(3)");
console.log(third);

let all = document.querySelectorAll("ul li");
console.log(all);

let array = Array.from(all);
console.log(array);

let listItems = document.querySelectorAll("ul.nav > li");
console.log(listItems);

let listItem = document.querySelectorAll("li:nth-child(2)");
console.log(listItem);
