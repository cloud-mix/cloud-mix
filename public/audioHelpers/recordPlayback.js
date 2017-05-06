import {Howl} from 'howler';

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