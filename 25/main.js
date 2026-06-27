window.onload = function () {
    // 1
    let canvas = document.querySelector("#canvas");
    let ctx = canvas.getContext("2d");

    ctx.fillStyle = "grey";
    ctx.fillRect(20, 20, 120, 100);

    ctx.fillStyle = "yellow";
    ctx.fillRect(80, 60, 120, 100);

    ctx.fillStyle = "red";
    ctx.fillRect(140, 100, 120, 100);

    // 2
    let canvas1 = document.querySelector("#canvas1");
    let ctx1 = canvas1.getContext("2d");

    function myGradient(color1, color2) {
        let gradient = ctx1.createLinearGradient(0, 0, canvas1.width, 0);

        gradient.addColorStop(0, color1);
        gradient.addColorStop(1, color2);

        ctx1.fillStyle = gradient;
        ctx1.fillRect(0, 0, canvas1.width, canvas1.height);
    }

    myGradient("lightblue", "blue");

    // 3
    let canvas2 = document.querySelector("#canvas2");
    let ctx2 = canvas2.getContext("2d");

    function myLine(x1, y1, x2, y2) {
        ctx2.beginPath();

        ctx2.moveTo(x1, y1);
        ctx2.lineTo(x2, y2);

        ctx2.stroke();
    }

    myLine(20, 20, 220, 150);

    // 4
    function line(x1, y1, x2, y2, color, width) {
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

        svg.setAttribute("width", 200);
        svg.setAttribute("height", 200);

        let line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");

        line1.setAttribute("x1", x1);
        line1.setAttribute("y1", y1);
        line1.setAttribute("x2", x2);
        line1.setAttribute("y2", y2);
        line1.setAttribute("stroke", color);
        line1.setAttribute("stroke-width", width);

        svg.append(line1);

        document.querySelector("#container").append(svg);
    }
    line(20, 20, 200, 150, "red", 3);

    // 5
    function myRect(width, height, fillColor, strokeColor, strokeWidth) {
        let svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");

        svg1.setAttribute("width", 300);
        svg1.setAttribute("height", 200);

        let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

        rect.setAttribute("x", 50);
        rect.setAttribute("y", 50);
        rect.setAttribute("width", width);
        rect.setAttribute("height", height);
        rect.setAttribute("fill", fillColor);
        rect.setAttribute("stroke", strokeColor);
        rect.setAttribute("stroke-width", strokeWidth);

        svg1.append(rect);

        document.querySelector("#box").append(svg1);
    }
    myRect(100, 50, "pink", "black", 1);
};