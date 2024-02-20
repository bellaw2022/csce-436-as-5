document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const images = [
      'assets/dog1.jpg',
      'assets/dog2.webp',
      'assets/dog3.jpeg',
      'assets/dog4.jpeg',
      'assets/dog5.jpeg',
      'assets/dog6.webp',
      'assets/dog7.jpeg',
      'assets/dog8.jpeg'
    ];
  
    // Populate gallery with images
    images.forEach((src, index) => {
      const img = document.createElement('img');
      img.src = src;
      img.style.height = '100px'; // Set a fixed height for all images
      img.style.width = 'auto';
      img.setAttribute('data-index', index);
      img.addEventListener('click', () => openModal(index, false));
      gallery.appendChild(img);
    });
  
    // Modal view
    const modal = document.createElement('div');
    modal.className = 'modal';
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    document.body.appendChild(modal);
    modal.appendChild(modalContent);
  
    let currentIndex = 0; // Index of the current image in the slideshow
    let slideshowInterval;
  
    function openModal(index, isSlideshow) {
      currentIndex = index;
      updateModalImage(isSlideshow);
      modal.style.display = 'block';
      if (isSlideshow) {
        startSlideshow();
      }
    }
  
    function updateModalImage(isSlideshow) {
      // Clear existing modal content
      modalContent.innerHTML = '';
  
      // Re-create close button
      const closeSpan = document.createElement('span');
      closeSpan.innerHTML = '&times;';
      closeSpan.className = 'close';
      closeSpan.onclick = () => closeModal();
      modalContent.appendChild(closeSpan);
  
      // Create and add new image element
      const img = document.createElement('img');
      img.src = images[currentIndex];
      img.style.cssText = isSlideshow ? 'width:100%' : 'max-width:500px; max-height:500px;';
      modalContent.appendChild(img);
  
      // Create and add toggle view button
      const toggleButton = document.createElement('button');
      toggleButton.id = 'toggle-view';
      toggleButton.textContent = isSlideshow ? 'Stop Slideshow' : 'Start Slideshow';
      toggleButton.addEventListener('click', () => {
        if (isSlideshow) {
          stopSlideshow();
        } else {
          openModal(currentIndex, true);
        }
      });
      modalContent.appendChild(toggleButton);
    }
  
    function closeModal() {
      modal.style.display = 'none';
      if (slideshowInterval) {
        stopSlideshow();
      }
    }
  
    function startSlideshow() {
      slideshowInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateModalImage(true);
      }, 3000); // Change image every 3 seconds
    }
  
    function stopSlideshow() {
      clearInterval(slideshowInterval);
      slideshowInterval = null; // Ensure to clear the interval ID
      openModal(currentIndex, false); // Open modal without slideshow
    }
  
    // Add keyboard navigation
    document.addEventListener('keydown', (event) => {
      if (modal.style.display === 'block') {
        if (event.key === 'ArrowRight') {
          currentIndex = (currentIndex + 1) % images.length;
          updateModalImage(true);
        } else if (event.key === 'ArrowLeft') {
          currentIndex = (currentIndex - 1 + images.length) % images.length;
          updateModalImage(true);
        }
      }
    });
  
    // Add the gallery to modal view button
    const galleryViewButton = document.createElement('button');
    galleryViewButton.textContent = 'Gallery View';
    galleryViewButton.addEventListener('click', () => openModal(currentIndex, false));
    document.body.appendChild(galleryViewButton);
  
    // Add the slideshow view button
    const slideshowViewButton = document.createElement('button');
    slideshowViewButton.textContent = 'Slideshow View';
    slideshowViewButton.addEventListener('click', () => openModal(currentIndex, true));
    document.body.appendChild(slideshowViewButton);


    // Music setup
    let myMusic; // Variable to hold the music
    let musicLoaded = false;

    // Load the music file
    function preload() {
        // Ensure p5.js is correctly integrated
        if (typeof loadSound === 'function') {
            myMusic = loadSound('assets/music.mp3'); // Adjust path as necessary
            musicLoaded = true;
        }
    }

    function setup() {
        if (musicLoaded) {
            noCanvas(); // If you're not using p5 for drawing

            // Create and insert the playMusic button
            const playMusicButton = document.createElement('button');
            playMusicButton.textContent = 'Play Music';
            playMusicButton.id = 'playMusic';
            document.body.insertBefore(playMusicButton, document.body.firstChild); // Adjust placement as necessary

            playMusicButton.addEventListener('click', toggleMusic);
        }
    }

    function toggleMusic() {
        // Check if the web audio context is suspended
        if (getAudioContext().state === 'suspended') {
            getAudioContext().resume();
        }
    
        if (myMusic.isPlaying()) {
            myMusic.pause();
            document.getElementById('playMusic').textContent = 'Play Music';
        } else {
            myMusic.loop(); // Or myMusic.play() if you don't want it to loop
            document.getElementById('playMusic').textContent = 'Pause Music';
        }
    }

    // Ensure preload and setup are called
    preload();
    setup();
  });
  