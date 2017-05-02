import {Howl} from 'howler';

const recordPlayback = urls => {
  urls.forEach(url => {
    let track = new Howl({
      src: [url.url],
      format: 'mp3',
      html5: true,
      sprite: {
        begin: [url.offset, 60000]
      }
    });

    track.play('begin');
  });
}

export default recordPlayback;