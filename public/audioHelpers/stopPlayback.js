const stopPlayback = (tracks, playCb) => {
  playCb();
  tracks.forEach(track => track.stop());
}

export default stopPlayback;
