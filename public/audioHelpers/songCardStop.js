// stop played audio on song card in SongListEntry
  // arguments:
    // tracks: array of tacks to be stopped
    // playCb: callback to set playing t a boolean (play/stop toggle)
const songCardStop = (tracks, playCb) => {
  playCb();
  tracks.forEach(track => track.stop());
}

export default songCardStop;