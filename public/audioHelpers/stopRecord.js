const stopRecord = (recorder, isRec) => {
  recorder.stop();
  isRec();
  console.log(recorder.state);
  console.log('recording stopped');
}

export default stopRecord;