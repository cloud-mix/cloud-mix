import {Howl} from 'howler';

const play = (urls, offset, cb) => {
  let last = urls.length - 1;
  let newRecording = new Howl({
    src: [urls[last].url],
      format: 'mp3',
      html5: true,
      sprite: {
        begin: [offset, 60000]
      }
  });
  cb(last, offset);
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