let colorArrays = ["black", "rebeccapurple", "dodgerblue", "limegreen", "orange", "crimson"];
let canvas = document.getElementById("canvas");


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
        let pixels = document.getElementsByClassName("pixel");
        pixels.width = "15px";
        pixels.height = "15px";
        canvas.style.width = "520px";
        canvas.style.height = "520px";
        canvas.style.minWidth = "520px";
        canvas.style.minHeight = "520px";

    } else if (x == 32) {
        
        /*let pixels = document.getElementsByClassName("pixel");
        canvas.style.width = "520px";
        canvas.style.height = "520px";
        pixels.width = "15px";
        pixels.height = "15px";
        canvas.appendChild(pixels);*/
    }

}

resolutionSquare(16);



let paintColor = "black";

//DRAWING LOGIC
canvas.addEventListener("mouseover", function(e) {

    e.target.style.backgroundColor = paintColor;
    canvas.style.backgroundColor = "white";


    /*//CLICK TO ERASE THE COLOR
    if (canvas.addEventListener("click", function(e){
        e.target.style.backgroundColor = "white";
    }));*/

});



//COLOR
let colorButton = document.getElementById("colorSelectButton");
let i = 0;

colorButton.addEventListener("click", function(e){
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
    paintColor = "white";
    //eraserButton.style.border = "10px solid black"
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

    let rainbowMode = 1;

    rainbowButton.style.cssText = "background: linear-gradient(90deg, rgba(255, 0, 0, 1) 0%,rgba(255, 154, 0, 1) 10%,rgba(208, 222, 33, 1) 20%,rgba(79, 220, 74, 1) 30%,rgba(63, 218, 216, 1) 40%,rgba(47, 201, 226, 1) 50%,rgba(28, 127, 238, 1) 60%,rgba(95, 21, 242, 1) 70%,rgba(186, 12, 248, 1) 80%,rgba(251, 7, 217, 1) 90%,rgba(255, 0, 0, 1) 100%);";
    rainbowButton.style.border = "10px solid black"
    rainbowButton.innerHTML = "";

    paintColor = colorArrays[Math.floor(Math.random() * colorArrays.length)];
    colorButton.style.background = "white";
    colorButton.style.color = "black";
    eraserButton.style.background = "white";
    eraserButton.style.color = "black";
});
