let constraints = {audio: true};
let chunks = [];

// use getUserMedia to get access to user's microphone
// and create the recorder.
  // arguments:
    // urlsCb: callback to set newly recorded data as a url to the state
    // recCb: callback to set the recorder objects to state
    // blobCb: callback to set newly recorded blob to state
const getUserMedia = (urlsCb, recCb, blobCb) => {
  if (navigator.getUserMedia) {
    console.log('getUserMedia supported');
    navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
      let recorder = new MediaRecorder(stream);
      recCb(recorder);
      recorder.onstop = e => {
        let blob = new Blob(chunks, {'type': 'audio/mp3'});
        blobCb(blob);
        chunks = [];
        let url = window.URL.createObjectURL(blob);
        urlsCb(url);
      }
      recorder.ondataavailable = e => {
        return chunks.push(e.data);
      }
    })
    .catch(err => console.log(err));
  } else {
    console.log('getUserMedia not supported on your browser!');
  }
}

export default getUserMedia;