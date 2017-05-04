import React from "react";
import {Link} from 'react-router-dom';
import { Card, CardTitle } from "react-materialize";

var SongListEntry = props => {
  let status = ''
  props.song.cont === 0 ? status = `Completed` : status = `Only ${props.song.cont} jam left`;
  return props.isLoggedIn ? (
    <Link to="/jam">
      <Card
        className="small"
        header={
          <CardTitle image="http://s.bellevuecollege.edu/kbcs/uploads/2013/03/Waveform-Transmission.jpg">
            {props.song.title}
          </CardTitle>
        }
        onClick={() => {
          props.setSongTitle(props.song);
        }}
      >
        <b>Genre:</b> {props.song.genre} <br />
        <b>{status}</b><br />
        <b>Started by:</b> {props.song.creator}
      </Card>
    </Link>
  ) : (
    <Card
      className="small"
      header={
        <CardTitle image="http://s.bellevuecollege.edu/kbcs/uploads/2013/03/Waveform-Transmission.jpg">
          {props.song.title}
        </CardTitle>
      }
    >
      <b>Genre:</b> {props.song.genre} <br />
      <b>{status}</b><br />
      <b>Started by:</b> {props.song.creator}
    </Card>
  );
};

export default SongListEntry;
