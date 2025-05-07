// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const audioElement = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;
    if (horn === 'air-horn') {
      hornImage.src = 'assets/images/air-horn.svg';
      hornImage.alt = 'Air Horn';
      audioElement.src = 'assets/audio/air-horn.mp3';
    } else if (horn === 'car-horn') {
      hornImage.src = 'assets/images/car-horn.svg';
      hornImage.alt = 'Car Horn';
      audioElement.src = 'assets/audio/car-horn.mp3';
    } else if (horn === 'party-horn') {
      hornImage.src = 'assets/images/party-horn.svg';
      hornImage.alt = 'Party Horn';
      audioElement.src = 'assets/audio/party-horn.mp3';
    }
  });

  volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value;
    // Update icon
    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
    audioElement.volume = volume / 100;
  });

  playButton.addEventListener('click', () => {
    audioElement.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });

}