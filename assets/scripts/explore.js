// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');
  const textArea = document.getElementById('text-to-speak');
  const faceImg = document.querySelector('#explore img');

  const synth = window.speechSynthesis;
  let voices = [];

  voices = synth.getVoices();
  voices.forEach((voice, index) => {
    const option = document.createElement('option');
    option.textContent = `${voice.name} (${voice.lang})`;
    option.value = index; 
    voiceSelect.appendChild(option);
  });
  
  speakButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textArea.value);
    const selectedIndex = voiceSelect.value;
    if (selectedIndex !== 'select') {
      utterance.voice = voices[selectedIndex];
    }

    utterance.addEventListener('start', () => {
      faceImg.src = 'assets/images/smiling-open.png';
    });

    utterance.addEventListener('end', () => {
      faceImg.src = 'assets/images/smiling.png';
    });

    synth.speak(utterance);
  });


}