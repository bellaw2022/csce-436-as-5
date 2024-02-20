let canvas = null;
let drawing = false;

function setup() {
  // Placeholder for setup, actual canvas creation is controlled by toggleCanvas
}

function draw() {
  if (drawing) {
    if (mouseIsPressed) {
      fill(0); // Use black color for drawing
      noStroke();
      circle(mouseX, mouseY, 20); // Draw circle at mouse position
    }
  }
}

function toggleCanvas() {
  if (!drawing) {
    canvas = createCanvas(400, 400);
    canvas.parent('body'); // Adjust based on where you want the canvas to appear
    background(255); // Start with a white background
    drawing = true;
  } else {
    drawing = false;
    removeCanvas();
  }
}

// Make sure this part is within a script tag or a separate JS file that is linked after the p5.js library in your HTML
document.getElementById('draw-button').addEventListener('click', toggleCanvas);
