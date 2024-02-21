let mySound;
let isPlaying = false;
let backgroundImage = 'background.webp'; 

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('assets/music.mp3');
}

function setup() {
  noCanvas(); 

  const toggleBtn = createButton('Go to Sleep');
  toggleBtn.id('toggle-background-btn');
  toggleBtn.class('button-56'); 
  toggleBtn.mousePressed(toggleBackground);
  

  const playButton = createButton('Play Puppy Song');
  playButton.class('button-56'); 
  playButton.mousePressed(toggleMusic);

  document.body.style.position = 'relative'; 
  toggleBtn.style('position', 'absolute');
  toggleBtn.style('bottom', '-145px'); 
  toggleBtn.style('left', '20px');

  playButton.style('position', 'absolute');
  playButton.style('bottom', '-185px'); 
  playButton.style('left', '20px'); 

}

function toggleBackground() {
  backgroundImage = (backgroundImage === 'back1.jpg') ? 'day.jpg' : 'back1.jpg';
  document.body.style.backgroundImage = `url('assets/${backgroundImage}')`;

  const toggleBtn = document.getElementById('toggle-background-btn');
    if (toggleBtn.innerHTML === 'Go to Sleep') {
    toggleBtn.innerHTML = 'Wake Up';
  } else {
    toggleBtn.innerHTML = 'Go to Sleep';
  }
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
