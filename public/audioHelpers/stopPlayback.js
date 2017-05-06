import {Howl} from 'howler';

const stopPlayback = (tracks, playCb) => {
  console.log(tracks);
  playCb();
  tracks.forEach(track => track.stop());
}

export default stopPlayback;
