let mySound;
let isPlaying = false;
let backgroundImage = 'background.webp'; 
function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('assets/music.mp3');
}

function setup() {
  noCanvas(); 

  const toggleBtn = createButton('Toggle Background');
  toggleBtn.class('button-56'); 
  toggleBtn.mousePressed(toggleBackground);

  const playButton = createButton('Play Puppy Song');
  playButton.class('button-56'); 
  playButton.mousePressed(toggleMusic);

  document.body.style.position = 'relative'; 
  toggleBtn.style('position', 'absolute');
  toggleBtn.style('bottom', '-220px'); 
  toggleBtn.style('left', '20px');

  playButton.style('position', 'absolute');
  playButton.style('bottom', '-180px'); 
  playButton.style('left', '20px'); 
}

function toggleBackground() {
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
