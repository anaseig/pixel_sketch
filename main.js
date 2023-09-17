let colorArrays = ["black", "rebeccapurple", "dodgerblue", "#4169e1", "limegreen", "#ffd800", "orange", "crimson"];
let canvas = document.getElementById("canvas");
let container = document.getElementById("container");


//RESOLUTION LOGIC
function resolutionSquare(x) {

    for (let j = 1; j <= x; j++) {
        for (let i = 1; i <= x; i++) {
            let pixels = document.createElement("div");
            pixels.className = "pixel";
            pixels.id = "pixel";

            canvas.appendChild(pixels);
        }
    }

    //DIFFERENT CANVAS SIZE ON DIFFERENT RESOLUTIONS
    if (x == 16) {
        canvas.style.width = "520px";
        canvas.style.height = "520px";
        canvas.style.minWidth = "520px";
        canvas.style.minHeight = "520px";

    } else if (x == 32) {
        canvas.style.width = "520px";
        canvas.style.height = "520px";
        canvas.style.minWidth = "520px";
        canvas.style.minHeight = "520px";
    }
}

resolutionSquare(16);


let rainbowMode = false;
let paintColor = "black";



//DRAWING LOGIC
let draw;

container.addEventListener("mousedown", (e) => {
    draw = true;
    e.preventDefault();
});
container.addEventListener("mouseup", (e) => {
    draw = false;
});

canvas.addEventListener("mouseover", function(e) {
    
    if (draw) {

        if (rainbowMode == false) {
            e.target.style.backgroundColor = paintColor;
        } else {
            e.target.style.backgroundColor = colorArrays[Math.floor(Math.random() * colorArrays.length)];
        }

    }

    
});



//COLOR BUTTON
let colorButton = document.getElementById("colorSelectButton");
let i = 0;

colorButton.addEventListener("click", function(e){
    rainbowMode = false;
    i++;

    if (i >= colorArrays.length) {
        i = 0;
    }

    let colorSelection = colorArrays[i];
    paintColor = colorSelection;
    colorButton.style.background = colorSelection;
    colorButton.style.color = "white";

    eraserButton.style.background = "white";
    eraserButton.style.color = "black";
    rainbowButton.style.background = "white";
    rainbowButton.style.border = "none";
    rainbowButton.innerHTML = "rainbow";
    rainbowButton.style.color = "black";
});



//ERASER BUTTON
let eraserButton = document.getElementById("eraserButton");

eraserButton.addEventListener("click", function(e){
    i = -1;
    rainbowMode = false;
    paintColor = "white";
    
    eraserButton.style.background = "rgb(255, 67, 67)";
    eraserButton.style.color = "white";
    
    colorButton.style.background = "white";
    colorButton.style.color = "black";

    rainbowButton.style.background = "white";
    rainbowButton.style.border = "none";
    rainbowButton.innerHTML = "rainbow";
    rainbowButton.style.color = "black";
});



//RAINBOW BUTTON
let rainbowButton = document.getElementById("rainbowButton");

rainbowButton.addEventListener("click", function(e){
    i = -1;
    rainbowMode = true;

    rainbowButton.style.cssText = "background: linear-gradient(90deg, rgba(255, 0, 0, 1) 0%,rgba(255, 154, 0, 1) 10%,rgba(208, 222, 33, 1) 20%,rgba(79, 220, 74, 1) 30%,rgba(63, 218, 216, 1) 40%,rgba(47, 201, 226, 1) 50%,rgba(28, 127, 238, 1) 60%,rgba(95, 21, 242, 1) 70%,rgba(186, 12, 248, 1) 80%,rgba(251, 7, 217, 1) 90%,rgba(255, 0, 0, 1) 100%);";
    rainbowButton.style.border = "10px solid black"
    rainbowButton.innerHTML = "";


    colorButton.style.background = "white";
    colorButton.style.color = "black";

    eraserButton.style.background = "white";
    eraserButton.style.color = "black";
});