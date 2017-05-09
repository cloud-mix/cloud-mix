// stop played audio on JamView
  // arguments:
    // tracks: array of tacks to be stopped
    // playCb: callback to set playing t a boolean (play/stop toggle)
const stopPlayback = (tracks, playCb) => {
  playCb();
  tracks.forEach(track => track.stop());
}

export default stopPlayback;
