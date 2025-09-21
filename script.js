// --- Image Lightbox Functionality ---
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const galleryImages = document.querySelectorAll('.gallery-image');
const closeBtn = document.querySelector('#lightbox .close-btn');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImage.src = image.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// --- YouTube Video Modal Functionality ---
const videoModal = document.getElementById('video-modal');
const youtubePlayer = document.getElementById('youtube-player');
const videoItems = document.querySelectorAll('.video-item');
const videoCloseBtn = document.querySelector('#video-modal .close-btn');

videoItems.forEach(videoItem => {
    videoItem.addEventListener('click', () => {
        const videoId = videoItem.dataset.videoId;
        youtubePlayer.src = https://www.youtube.com/embed/${videoId}?autoplay=1;
        videoModal.style.display = 'flex';
    });
});

videoCloseBtn.addEventListener('click', () => {
    videoModal.style.display = 'none';
    youtubePlayer.src = ''; // Stop the video
});

videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.style.display = 'none';
        youtubePlayer.src = ''; // Stop the video
    }
});
