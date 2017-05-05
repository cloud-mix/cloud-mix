import {Howl} from 'howler';

const play = (urls, offset, offestCb, playCb, trackCb, firstRec) => {
  let last = urls.length - 1;
  playCb();

  console.log('firstRec is', firstRec);

  if (firstRec) {
    console.log('something was recorded');
    let newRecording = new Howl({
      src: [urls[last].url],
        format: 'mp3',
        html5: true,
        onplay: function() {
          console.log('this in track', this.duration());
        },
        sprite: {
          begin: [offset, 360000]
        },
        onend: function() {
          playCb();
        }
    });
    offestCb(last, offset);
    trackCb(newRecording);
    newRecording.play('begin');

    for (let i = 0; i < last; i++) {
      let track = new Howl({
        src: [urls[i].url],
        format: 'mp3',
        html5: true,
        sprite: {
          begin: [urls[i].offset, 360000]
        }
      });
      trackCb(track);
      track.play('begin');
    }
  } else {
    console.log('no recording yet');
  }

}

export default play;