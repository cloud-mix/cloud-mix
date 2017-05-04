import React from "react";
import {Link} from 'react-router-dom';
import SongCard from './SongCard.js';

var SongListEntry = props => {
  return props.isLoggedIn ? (
    <Link to="/jam">
      <SongCard
        song={props.song}
        setSongTitle={props.setSongTitle}
        setGenre={props.setGenre}
      />
    </Link>
  ) : (
    <SongCard
      song={props.song}
      setSongTitle={props.setSongTitle}
      setGenre={props.setGenre}
    />
  );
};

export default SongListEntry;
