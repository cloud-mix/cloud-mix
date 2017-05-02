import React from "react";
import SongListEntry from "./SongListEntry";

var SongList = function(props) {
  return (
    <div>
      <p>In the SongList Component</p>
      <SongListEntry songs={props.allSongs} />
    </div>
  );
};

export default SongList;
