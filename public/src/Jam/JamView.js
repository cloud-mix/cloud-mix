import React from "react";
import NewRecording from './NewRecording';
import PreviousRecording from './PreviousRecording';

const JamView = function(props){
  return(
    <div>
      <p>Jamview Component</p>
      <NewRecording
      getTitle={props.handleSongCreateTitleInput}
      getGenre={props.handleSongCreateGenreInput}
      getContributorLimit={props.handleSongCreateContributorLimit}
      userWouldLikeToCreateSong={props.userWouldLikeToCreateSong}
      />
      <PreviousRecording />
    </div>
  );
};

export default JamView;
