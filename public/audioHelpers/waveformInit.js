import WaveSurfer from 'wavesurfer';

const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// initialize the wavesurfer object to generate waveform of recording
  //argumenst:
    // waveCb: callback to set wavesurfer object to state
    // context: callback to set audio context to state to destroy it
const waveformInint = (waveCb, contextCb) => {
  let wavesurfer = WaveSurfer.create({
    container: '.waveform',
    waveColor: getRandomColor()
  });
  waveCb(wavesurfer);
  contextCb(wavesurfer);
}

export default waveformInint;