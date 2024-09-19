// Get video player and error message elements
const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');
const errorMessage = document.getElementById('errorMessage');

// Get all video buttons
const videoButtons = document.querySelectorAll('.video-btn');

// Add event listeners to each video button
videoButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Set the video source to the button's data-src attribute
    const videoSrc = this.getAttribute('data-src');
    videoSource.src = videoSrc;
    videoPlayer.load(); // Reload the video player with the new source
    videoPlayer.play(); // Auto-play the video

    // Hide error message when video is played through button
    errorMessage.style.display = 'none';
  });
});

// Show an error message when clicking the video screen without using buttons
videoPlayer.addEventListener('click', function() {
  errorMessage.style.display = 'block';
});
