const video = document.querySelector('.video');
const playButton = document.querySelector('.player__button');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');
const rewindButton = document.querySelector('.rewind');
const forwardButton = document.querySelector('.forward');

// Toggle play and pause
function togglePlay() {
    if (video.paused) {
        video.play();
        playButton.textContent = '❚ ❚'; // Pause symbol
    } else {
        video.pause();
        playButton.textContent = '►'; // Play symbol
    }
}

// Update progress bar
function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progress.value = percent;
    progressFilled.style.width = `${percent}%`;
}

// Change volume
function updateVolume() {
    video.volume = volume.value / 100;
}

// Change playback speed
function updatePlaybackSpeed() {
    video.playbackRate = playbackSpeed.value;
}

// Rewind video
function rewind() {
    video.currentTime -= 10;
}

// Forward video
function forward() {
    video.currentTime += 25;
}

// Event listeners
playButton.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
volume.addEventListener('input', updateVolume);
playbackSpeed.addEventListener('input', updatePlaybackSpeed);
rewindButton.addEventListener('click', rewind);
forwardButton.addEventListener('click', forward);
