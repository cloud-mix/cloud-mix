const stopRecord = (recorder, isRec, tracks) => {
  recorder.stop();
  tracks.forEach(track => track.stop());
  isRec();
  console.log(recorder.state);
  console.log('recording stopped');
}

export default stopRecord;