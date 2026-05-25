let header = document.createElement("header");

header.style.padding = "50px";
header.style.backgroundColor = "yellow";
header.style.position = "fixed";
header.style.left = "0";
header.style.top = "0";
header.style.width = "100%";
header.style.boxSizing = "border-box";
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.gap = "15px";
header.style.zIndex = "1000";

document.body.style.margin = "0";

document.body.append(header);

const menuData = [

    { name: 'Головна', url: '/' },

    { name: 'Про нас', url: '/about' },

    { name: 'Послуги', url: '/services' },

    { name: 'Контакти', url: '/contacts' },

];

for (let item of menuData) {
    let link = document.createElement("a");
    link.textContent = item.name;
    link.href = item.url;
    link.target = "_blank";
    link.style.textDecoration = "none";
    link.style.color = "black";
    link.style.fontSize = "20px";

    header.append(link);
}

let container = document.createElement("div");

container.style.position = "fixed";
container.style.top = "140px";
container.style.left = "0";
container.style.width = "100%";
container.style.height = "100vh";
container.style.overflow = "auto";

document.body.append(container);

for (let row = 1; row <= 10; row++) {
    let line = document.createElement("div");

    line.style.display = "flex";
    line.style.gap = "10px";
    line.style.justifyContent = "center";
    line.style.marginBottom = "10px";

    for (let i = 0; i < row; i++) {
        let circle = document.createElement("div");

        circle.classList.add("circle-element");
        circle.style.width = "50px";
        circle.style.height = "50px";
        circle.style.borderRadius = "50%";
        circle.style.border = "2px solid black";

        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        circle.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

        line.append(circle);
    }
    container.append(line);
}