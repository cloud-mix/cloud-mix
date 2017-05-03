import {Howl} from 'howler';

const stopPlayback = (tracks, playCb) => {
  playCb();
  tracks.forEach(track => track.stop());
}

export default stopPlayback;