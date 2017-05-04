let constraints = {audio: true};
let chunks = [];

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
        urlsCb({url: url, offset: 0});
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