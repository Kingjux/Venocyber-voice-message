/* recorder.js */

class AudioRecorder {
  constructor() {
    // Initialize required variables
    this.mediaRecorder = null;
    this.mediaStream = null;
    this.audioChunks = [];
  }

  startRecording() {
    return navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        this.mediaStream = stream;
        this.mediaRecorder = new MediaRecorder(stream);
        this.mediaRecorder.start();
        this.mediaRecorder.addEventListener('dataavailable', event => {
          this.audioChunks.push(event.data);
        });
      })
      .catch(error => {
        console.error('Error accessing microphone:', error);
      });
  }
