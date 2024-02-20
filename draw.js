let canvas = null;
let drawing = false;

function setup() {
}

function draw() {
  if (drawing) {
    if (mouseIsPressed) {
      fill(0); 
      noStroke();
      circle(mouseX, mouseY, 20); 
    }
  }
}

function toggleCanvas() {
  if (!drawing) {
    canvas = createCanvas(400, 400);
    canvas.parent('body'); 
    background(255); 
    drawing = true;
  } else {
    drawing = false;
    removeCanvas();
  }
}

document.getElementById('draw-button').addEventListener('click', toggleCanvas);
