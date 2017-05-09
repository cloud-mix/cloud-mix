import {Howl} from 'howler';

// multitrack playback for JamView
  // arguments:
    // urls: array of urls to be played
    // offset: latency offset set by user
    // playCb: callback to set playing to a boolean for play/stop toggle
    // trackCb: callback to set new howler on state (use to in all stop function)
    // firstCb: callback to set firstRec to boolean on first track recording
    // offsets: array of offsets value for tracks
const play = (urls, offset, playCb, trackCb, firstRec, offsets) => {
  let last = urls.length - 1;
  let tracks = [];
  playCb();

  if (firstRec) {
    console.log('with new recording')

    let newRecording = new Howl({
      src: [urls[last]],
        format: 'mp3',
        html5: true,
        sprite: {
          begin: [offset, 360000]
        },
        onend: function() {
          playCb();
        }
    });
    tracks.push(newRecording);
    newRecording.play('begin');

    for (let i = 0; i < last; i++) {
      let track = new Howl({
        src: [urls[i]],
        format: 'mp3',
        html5: true,
        sprite: {
          begin: [offsets[i], 360000]
        }
      });
      tracks.push(track);
      track.play('begin');
    }
  } else {
    console.log('no new recording');

    urls.forEach((url, i) => {
      let track = new Howl({
        src: [url],
        format: 'mp3',
        html5: true,
        sprite: {
          begin: [offsets[i], 360000]
        }
      });
      tracks.push(track);
      track.play('begin');
    });
  }
  trackCb(tracks);
}

export default play;
