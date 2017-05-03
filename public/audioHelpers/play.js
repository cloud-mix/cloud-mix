import {Howl} from 'howler';

const play = (urls, offset, offestCb, playCb, trackCb) => {
  let last = urls.length - 1;
  playCb();
  let newRecording = new Howl({
    src: [urls[last].url],
      format: 'mp3',
      html5: true,
      sprite: {
        begin: [offset, 60000]
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
        begin: [urls[i].offset, 60000]
      }
    });
    track.play('begin');
  }
}

export default play;