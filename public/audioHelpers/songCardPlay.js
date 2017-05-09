import {Howl} from 'howler';

// play all track on a song card in SongListEntry
  //arguments:
    // song: song object
    // playCb: callback to set playing to a boolean to state (for play/stop toggle)
    // tracksCb: callback to set tracks to state (use for stop)
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