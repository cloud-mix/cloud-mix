import WaveSurfer from 'wavesurfer';
import '../../node_modules/wavesurfer/dist/plugin/wavesurfer.microphone.min.js';

// creates a new audio context to render visual audio input
// on JamView
  // arguments:
    // waveCb: callback to set wavesurfer object to state
    // context: callback to set audio context to state to destroy it
const inputVisual = (waveCb, contextCb) => {
  let inputWave = WaveSurfer.create({
    container: '#input',
    waveColor: 'green'
  });
  let microphone = Object.create(WaveSurfer.Microphone);
  microphone.init({
    wavesurfer: inputWave
  });
  microphone.start();
  microphone.on('deviceReady', function(stream) {
    console.log('Device ready!', stream);
  });
  microphone.on('deviceError', function(code) {
    console.warn('Device error: ' + code);
  });
  microphone.play();
  waveCb(inputWave);
  contextCb(inputWave);
}

export default inputVisual;