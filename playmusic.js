let mySound;
let isPlaying = false; // Track play state

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('assets/music.mp3');
}

function setup() {
  noCanvas(); // Do not create a canvas
  // Create a "Play Puppy Song" button
  const playButton = createButton('Play Puppy Song');
  playButton.mousePressed(toggleMusic); // Use toggleMusic to control play/pause
}

function toggleMusic() {
  if (!isPlaying) {
    mySound.play();
    isPlaying = true; // Update play state
  } else {
    mySound.pause(); // Pause instead of stop to resume from the same position
    isPlaying = false; // Update play state
  }
}