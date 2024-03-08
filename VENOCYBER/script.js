/* script.js */

// Get the necessary DOM elements
const recordButton = document.getElementById('record-btn');
const stopButton = document.getElementById('stop-btn');
const playButton = document.getElementById('play-btn');
const audioPlayer = document.getElementById('audio-player');

// Initialize the MediaRecorder and MediaStream variables
let mediaRecorder;
let mediaStream;

// Create the MediaRecorder object and start recording when the record button is clicked
recordButton.addEventListener('click', () => {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      mediaStream = stream;
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
    })
    .catch(error => {
      console.error('Error accessing microphone:', error);
    });
});

// Stop recording when the stop button is clicked
stopButton.addEventListener('click', () => {
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop();
    mediaStream.getTracks().forEach(track => track.stop());
  }
});

// Play the recorded audio when the play button is clicked
playButton.addEventListener('click', () => {
  if (audioPlayer.src) {
    audioPlayer.play();
  }
});

// Handle the recording data when the MediaRecorder stops
mediaRecorder.addEventListener('dataavailable', event => {
  audioPlayer.src = URL.createObjectURL(event.data);
});
