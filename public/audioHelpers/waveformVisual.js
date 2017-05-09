// generate the waveform visual of recording
  //arguments:
    // url: url of newly recorded audio
    // wavesurfer: waveserfure object
const waveformVisual = (url, wavesurfer) => {
  wavesurfer.load(url);
}

export default waveformVisual;