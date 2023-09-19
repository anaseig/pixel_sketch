let colorArray = ["black", "rebeccapurple", "dodgerblue", "#4169e1", "limegreen", "#1cac78", "#ffd800", "orange", "crimson", "gray"];
let canvas = document.getElementById("canvas");
let container = document.getElementById("container");
let pixels = document.getElementsByClassName("pixel");


//RESOLUTION LOGIC
function canvasResolution(x) {

    //PIXEL GRID
    for (let j = 1; j <= x; j++) {
        for (let i = 1; i <= x; i++) {
            let pixel = document.createElement("div");
            pixel.className = "pixel";
            canvas.appendChild(pixel);
        }
    }

    //PIXEL SIZE CHANGE
    for (let i = 0; i < pixels.length; i++) {

        if (x === 16) {
            pixels[i].style.width = "30px";
            pixels[i].style.height = "30px";

            pixels[15].style.borderRadius = "0px 20px 0px 0px";
            pixels[240].style.borderRadius = "0px 0px 0px 20px";

        } else if (x === 32) {
            pixels[i].style.width = "15px";
            pixels[i].style.height = "15px";

            pixels[31].style.borderRadius = "0px 20px 0px 0px";
            pixels[992].style.borderRadius = "0px 0px 0px 20px";

        } else if (x === 48) {
            pixels[i].style.width = "10px";
            pixels[i].style.height = "10px";

            pixels[47].style.borderRadius = "0px 20px 0px 0px";
            pixels[2256].style.borderRadius = "0px 0px 0px 20px";

        } else if (x === 64) {
            pixels[i].style.width = "7.5px";
            pixels[i].style.height = "7.5px";

            pixels[63].style.borderRadius = "0px 20px 0px 0px";
            pixels[4032].style.borderRadius = "0px 0px 0px 20px";
        }
    }
}


//DRAWING LOGIC
let rainbowMode = false;
let paintColor = "black";
let draw;

container.addEventListener("mousedown", (e) => {
    draw = true;
    e.preventDefault();
});
container.addEventListener("mouseup", (e) => {
    draw = false;
});

canvas.addEventListener("mouseover", function(e) {
    
    //NORMAL DRAWING VS RAINBOW DRAWING
    if (draw) {
        if (rainbowMode == false) {
            e.target.style.backgroundColor = paintColor;
            canvas.style.background = "white";
        } else {
            e.target.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        }
    }
});


///------BUTTONS SECTION------///

//COLOR BUTTON
let colorButton = document.getElementById("colorSelectButton");
let i = 1; //COLOR INDEX

colorButton.addEventListener("click", function(e){
    let colorSelection = colorArray[i];
    paintColor = colorSelection;
    rainbowMode = false;

    //TO GO THROUGH THE COLOR ARRAY WHEN CLICKED
    i+= 1;
    if (i >= colorArray.length) {
        i = 0;
    }

    console.log(i);

    //STYLE CHANGES OF THE BUTTONS
    colorButton.style.background = colorSelection;
    colorButton.style.color = "white";
    eraserButton.style.background = "white";
    eraserButton.style.color = "black";
    rainbowButton.style.background = "white";
    rainbowButton.style.border = "0px solid black";
    rainbowButton.innerHTML = "rainbow";
});


//ERASER BUTTON
let eraserButton = document.getElementById("eraserButton");

eraserButton.addEventListener("click", function(e){
    rainbowMode = false;
    paintColor = "white";
    i = 0;

    console.log(i);
    //STYLE CHANGES OF THE BUTTONS
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
    rainbowMode = true;
    i = 0;

    console.log(i);
    //STYLE CHANGES OF THE BUTTONS
    rainbowButton.style.cssText = "background: linear-gradient(90deg, rgba(255, 0, 0, 1) 0%,rgba(255, 154, 0, 1) 10%,rgba(208, 222, 33, 1) 20%,rgba(79, 220, 74, 1) 30%,rgba(63, 218, 216, 1) 40%,rgba(47, 201, 226, 1) 50%,rgba(28, 127, 238, 1) 60%,rgba(95, 21, 242, 1) 70%,rgba(186, 12, 248, 1) 80%,rgba(251, 7, 217, 1) 90%,rgba(255, 0, 0, 1) 100%);";
    rainbowButton.style.border = "10px solid black"
    rainbowButton.innerHTML = "";
    colorButton.style.background = "white";
    colorButton.style.color = "black";
    eraserButton.style.background = "white";
    eraserButton.style.color = "black";
});


//REMOVES OLD PIXEL WHEN RESOLUTION CHANGES
function removeOldPixels(size) {
    let pixel = document.querySelectorAll(".pixel");
    
    for (let i = 0; i < pixel.length; i++) {
        let removePixel = pixel[i];
        removePixel.parentNode.removeChild(removePixel);
    }
    canvasResolution(size);
}


//RESOLUTION BUTTON
let resolutionButton = document.getElementById("resolutionButton");
let size = 16;
canvasResolution(size);

resolutionButton.addEventListener("click", function(e){
    size += 16;
    if (size > 64) {
        size = 16;
    }

    resolutionButton.innerText = `${size}px`;
    removeOldPixels(size);
});