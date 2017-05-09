import recordPlayback from './recordPlayback.js';

// start recording on the jamView
  // arguments:
    // recorder: recorder object
    // urls: array of urls to play during recording
    // isRec: callback to set isRec as a boolean to state (use for record/stop toggle)
    // firstRec: boolean to check if it is the first recording
    // firstCb: callback to set firstRec boolean
    // offsets: array of offsets for playback
    // trackCb: callback to set tracks in playback (used for stop)
const record = (recorder, urls, isRec, firstRec, firstCb, offsets, trackCb) => {
  if (!firstRec) {
    firstCb();
  } else {
    urls.pop();
  }
  recorder.start();
  isRec();
  if (urls.length > 0) {
    recordPlayback(urls, offsets, trackCb);
  }
  console.log(recorder.state);
  console.log('recording started');
}

export default record;