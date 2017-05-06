import React from "react";
import {Link} from 'react-router-dom';
import { Card, CardTitle, Button } from "react-materialize";
import play from '../../audioHelpers/play.js';

var SongListEntry = props => {
  let status = '';
  props.song.cont === 0 ? status = `Completed` : status = `Only ${props.song.cont} jam left`;
  return (
    <Card
      className="small buttonCard"
      header={
        <CardTitle image="http://s.bellevuecollege.edu/kbcs/uploads/2013/03/Waveform-Transmission.jpg">
          {props.song.title}
          {props.song.cont !== 0 && props.isLoggedIn ? (
            <Link to="/jam">
              <div className="jamRequest"
                onClick={() => {
                  props.setSongTitle(props.song.title);
                  props.setGenre(props.song.genre);
                }}
              >Come Jam !</div>
              </Link>
          ) : null}
          {props.song.cont !== 0 && !props.isLoggedIn ? (
            <div className="jamRequest">Log In to Jam !</div>
          ) : null}
        </CardTitle>
      }
    >
      <b>Genre:</b> {props.song.genre} <br />
      <b>{status}</b><br />
      <b>Started by:</b> {props.song.creator}
      <div className="buttonContainer">
        <Button
          className="cardButton"
          floating large
          waves='light'
          icon='play_arrow'
          onClick={() => {
            console.log('playing');
          }}
        ></Button>
      </div>
    </Card>
  );
};

export default SongListEntry;
