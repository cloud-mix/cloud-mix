import WaveSurfer from 'wavesurfer';

const getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const waveformInint = (waveCb, contextCb) => {
  let wavesurfer = WaveSurfer.create({
    container: '.waveform',
    waveColor: getRandomColor()
  });
  waveCb(wavesurfer);
  contextCb(wavesurfer);
}

export default waveformInint;