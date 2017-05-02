import recordPlayback from './recordPlayback.js';

const record = (recorder, urls, isRec, firstRec, firstCb) => {
  if (!firstRec) {
    firstCb();
  } else {
    urls.pop();
  }
  recorder.start();
  isRec();
  if (urls.length > 0) {
    recordPlayback(urls);
  }
  console.log(recorder.state);
  console.log('recording started');
}

export default record;