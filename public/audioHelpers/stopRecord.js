// stops recording on JamView
  // arguments:
    // recorder: recorder object
    // isRec: callback to set is Rec to a boolean (record/stop playback)
    // tracks: array of tracks to be stopped
const stopRecord = (recorder, isRec, tracks) => {
  recorder.stop();
  tracks.forEach(track => track.stop());
  isRec();
  console.log(recorder.state);
  console.log('recording stopped');
}

export default stopRecord;