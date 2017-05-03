// import WaveSurfer from 'wavesurfer';

// const getRandomColor = () => {
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++ ) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

const waveformVisual = (url, wavesurfer) => {
  // let wavesurfer = WaveSurfer.create({
  //   container: '.waveform',
  //   waveColor: getRandomColor()
  // });
  wavesurfer.load(url);
}

export default waveformVisual;