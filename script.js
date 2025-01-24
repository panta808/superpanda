const googleDrivePlayer = document.getElementById('googleDrivePlayer');
const playlist = document.getElementById('playlist');
const descriptionSection = document.getElementById('descriptionSection');
const videoDescription = document.getElementById('videoDescription');

// Click event listener for both list items and play buttons
playlist.addEventListener('click', (e) => {
    // Check if the play button was clicked
    if (e.target.classList.contains('play-button')) {
        const videoSrc = e.target.closest('li').getAttribute('data-src');
        const descriptionText = e.target.closest('li').getAttribute('data-description');

        // Highlight the selected video in playlist
        const allItems = playlist.querySelectorAll('li');
        allItems.forEach(item => item.classList.remove('active'));
        e.target.closest('li').classList.add('active');

        // Change the iframe source to play the selected video with autoplay
        googleDrivePlayer.src = videoSrc + "?autoplay=1"; // Add autoplay parameter

        // Show the description section and update its content
        descriptionSection.style.display = 'block';
        videoDescription.textContent = descriptionText;
    }
});
