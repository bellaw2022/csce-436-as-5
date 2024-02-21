document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    let images = [
      'assets/dog1.jpg',
      'assets/dog2.webp',
      'assets/dog3.jpeg',
      'assets/dog4.jpeg',
      'assets/dog5.jpeg',
      'assets/dog6.webp',
      'assets/dog7.jpeg',
      'assets/dog8.jpeg'
    ];
  
    function shuffleImages() {
      for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
      }
      populateGallery();
    }
  
    function populateGallery() {
      gallery.innerHTML = ''; 
      images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.style.height = '100px'; 
        img.style.width = 'auto';
        img.setAttribute('data-index', index);
        img.addEventListener('click', () => openModal(index, false));
        gallery.appendChild(img);
      });
    }
  
    populateGallery();
  
    // Modal view setup
    const modal = document.createElement('div');
    modal.className = 'modal';
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    document.body.appendChild(modal);
    modal.appendChild(modalContent);
  
    let currentIndex = 0; 
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
      modalContent.innerHTML = '';
      const closeSpan = document.createElement('span');
      closeSpan.innerHTML = '&times;';
      closeSpan.className = 'close';
      closeSpan.onclick = () => closeModal();
      modalContent.appendChild(closeSpan);
    
      const img = document.createElement('img');
      img.src = images[currentIndex];
      img.style.cssText = isSlideshow ? 'width:100%' : 'max-width:500px; max-height:500px;';
      modalContent.appendChild(img);
  
      const toggleButton = document.createElement('button');
      toggleButton.id = 'toggle-view';
      toggleButton.textContent = isSlideshow ? 'Stop Slideshow' : 'Start Slideshow';
      toggleButton.onclick = () => {
        if (isSlideshow) {
          stopSlideshow();
        } else {
          openModal(currentIndex, true);
        }
      };
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
      }, 3000);
    }
  
    function stopSlideshow() {
      clearInterval(slideshowInterval);
      slideshowInterval = null;
      openModal(currentIndex, false);
    }
  
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
  
    const shuffleButton = document.createElement('button');
    shuffleButton.textContent = 'Shuffle';
    shuffleButton.className = 'button-56';
    shuffleButton.onclick = shuffleImages;
    document.body.appendChild(shuffleButton);

    const galleryViewButton = document.createElement('button');
    galleryViewButton.textContent = 'Gallery View';
    galleryViewButton.addEventListener('click', () => openModal(currentIndex, false));
    galleryViewButton.className = 'button-56';
    document.body.appendChild(galleryViewButton);

    const slideshowViewButton = document.createElement('button');
    slideshowViewButton.textContent = 'Slideshow View';
    slideshowViewButton.addEventListener('click', () => openModal(currentIndex, true));
    slideshowViewButton.className = 'button-56';
    document.body.appendChild(slideshowViewButton);

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    document.body.appendChild(buttonContainer);
    buttonContainer.appendChild(galleryViewButton);
    buttonContainer.appendChild(slideshowViewButton);
    buttonContainer.appendChild(shuffleButton);

    preload();
    setup();
  });
  