let container = document.getElementById("container");

function resolution(x, y) {
    for (let j = 1; j <= y; j++) {
        for (let i = 1; i <= x; i++) {
            let pixels = document.createElement("div");
            pixels.className = "pixel";

            container.appendChild(pixels);
        }
    }
}

resolution(16, 16);

//DRAWING LOGIC
let canvas = document.getElementById("container");

canvas.addEventListener("mouseover", function(e) {

    let pixels = document.getElementsByClassName("pixel");
    e.target.style.backgroundColor = "black";
    canvas.style.backgroundColor = "white";
});