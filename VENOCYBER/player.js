/* player.js */

class AudioPlayer {
  constructor(audioElement) {
    // Initialize the audio element
    this.audioElement = audioElement;
  }

  play() {
    this.audioElement.play();
  }

  pause() {
    this.audioElement.pause();
  }

  stop() {
    this.audioElement.pause();
    this.audioElement.currentTime = 0;
  }

  setVolume(volume) {
    this.audioElement.volume = volume;
  }

  setCurrentTime(time) {
    this.audioElement.currentTime = time;
  }
}

export default AudioPlayer;
