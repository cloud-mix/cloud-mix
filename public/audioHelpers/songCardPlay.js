import {Howl} from 'howler';

const songCardPlay = (song, playCb, tracksCb) => {
  let tracks = [];
  playCb();

  song.url.forEach((url, i) => {
    let track = new Howl({
      src: [url],
      format: 'mp3',
      html5: true,
      sprite: {
        begin: [song.offsets[i], 360000]
      }
    });
    tracks.push(track);
    track.play('begin');
  });
  tracksCb(tracks);
}

export default songCardPlay;