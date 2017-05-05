import WaveSurfer from 'wavesurfer';
import '../../node_modules/wavesurfer/dist/plugin/wavesurfer.microphone.min.js';


const inputVisual = () => {
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
}

export default inputVisual;