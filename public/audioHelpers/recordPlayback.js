import {Howl} from 'howler';

// plays audio track while recording
  //arguments:
    // urls: array of urls to be played
    // offsets: array of offsets
    // trackCb: callback to set tracks (use for stop)
const recordPlayback = (urls, offsets, trackCb) => {
  let tracks = [];
  urls.forEach((url, i) => {
    let track = new Howl({
      src: [url],
      format: 'mp3',
      html5: true,
      sprite: {
        begin: [offsets[i], 60000]
      }
    });
    tracks.push(track);
    track.play('begin');
  });
  trackCb(tracks);
}

export default recordPlayback;