let constraints = {audio: true};
let chunks = [];

const getUserMedia = (urlsCb, recCb) => {
  if (navigator.getUserMedia) {
    console.log('getUserMedia supported');
    navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
      let recorder = new MediaRecorder(stream);
      recCb(recorder);
      recorder.onstop = e => {
        let blob = new Blob(chunks, {'type': 'audio/mp3'});
        chunks = [];
        let url = window.URL.createObjectURL(blob);
        urlsCb({url: url, offset: 0});
      }
      recorder.ondataavailable = e => chunks.push(e.data);
    })
    .catch(err => console.log(err));
  } else {
    console.log('getUserMedia not supported on your browser!');
  }
}

export default getUserMedia;