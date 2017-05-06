const songCardStop = (tracks, playCb) => {
  playCb();
  tracks.forEach(track => track.stop());
}

export default songCardStop;