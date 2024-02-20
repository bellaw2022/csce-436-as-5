let mySound;
let isPlaying = false; // Track play state
let backgroundImage = 'background.webp'; // Initial background image

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('assets/music.mp3');
}

function setup() {
  noCanvas(); // We don't need a canvas

  // Create toggle background button
  const toggleBtn = createButton('Toggle Background');
  toggleBtn.position(20, windowHeight - 80); // Position it at the bottom
  toggleBtn.mousePressed(toggleBackground);

  // Create play music button
  const playButton = createButton('Play Puppy Song');
  playButton.position(20, windowHeight - 40); // Adjust position so both buttons don't overlap
  playButton.mousePressed(toggleMusic);
}

function toggleBackground() {
  // Switch between background images
  backgroundImage = (backgroundImage === 'background.webp') ? 'background2.webp' : 'background.webp';
  document.body.style.backgroundImage = `url('assets/${backgroundImage}')`;
}

function toggleMusic() {
  if (!isPlaying) {
    mySound.play();
    isPlaying = true;
  } else {
    mySound.pause();
    isPlaying = false;
  }
}
