let backgroundImage = 'background.webp'; // Initial background image

function setup() {
  noCanvas(); // We don't need a canvas
  // Create toggle button
  const toggleBtn = createButton('Toggle');
  toggleBtn.position(20, windowHeight - 80); // Position it at the bottom left corner
  toggleBtn.mousePressed(toggleBackground);
}

function toggleBackground() {
  // Switch between back1.jpg and back2.jpg
  backgroundImage = (backgroundImage === 'background.webp') ? 'background2.webp' : 'background.webp';
  // Update the body's background image
  document.body.style.backgroundImage = `url('assets/${backgroundImage}')`;
}

// Make sure to include this script after p5.js in your HTML files
