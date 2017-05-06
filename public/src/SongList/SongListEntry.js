import React, {Component} from "react";
import {Link} from 'react-router-dom';
import { Card, CardTitle, Button } from "react-materialize";
import songCardPlay from '../../audioHelpers/songCardPlay.js';
import songCardStop from '../../audioHelpers/songCardStop.js';

class SongListEntry extends Component {
  constructor() {
    super();
    this.state = {
      playing: false,
      tracks: []
    }
  }

  setPlaying() {
    this.setState({playing: !this.state.playing});
  }

  setTracks(tracks) {
    this.setState({tracks: tracks})
  }

  render() {
    let status = '';
    this.props.song.contriblimit - this.props.song.contribcount === 0 ? status = `Completed` : status = `Only ${this.props.song.contriblimit - this.props.song.contribcount} jam left`;
    return (
      <Card
        className="small buttonCard"
        header={
          <CardTitle image="http://s.bellevuecollege.edu/kbcs/uploads/2013/03/Waveform-Transmission.jpg">
            {this.props.song.title}
            {this.props.song.contriblimit - this.props.song.contribcount !== 0 && this.props.isLoggedIn && !this.props.song.contributors.includes(this.props.currentUser) ? (
              <Link to="/jam">
                <div className="jamRequest"
                  onClick={() => {
                    this.props.setCurrentSong(this.props.song);
                  }}
                >Come Jam !</div>
                </Link>
            ) : null}
            {this.props.song.contriblimit - this.props.song.contribcount !== 0 && !this.props.isLoggedIn ? (
              <div className="jamRequest">Log In to Jam !</div>
            ) : null}
          </CardTitle>
        }
      >
        <b>Genre:</b> {this.props.song.genre} <br />
        <b>{status}</b><br />
        <b>Started by:</b> {this.props.song.contributors[0]}
        {!this.state.playing ? (
          <div className="buttonContainer">
            <Button
              className="cardButton"
              floating large
              waves='light'
              icon='play_arrow'
              onClick={() => {
                songCardPlay(
                  this.props.song,
                  this.setPlaying.bind(this),
                  this.setTracks.bind(this)
                );
              }}
            ></Button>
          </div>
        ) : (
          <div className="buttonContainer">
            <Button
              className="cardButton"
              floating large
              waves='light'
              icon='stop'
              onClick={() => {
                songCardStop(
                  this.state.tracks,
                  this.setPlaying.bind(this)
                );
              }}
            ></Button>
          </div>
        )}
      </Card>
    );
  };
}

export default SongListEntry;
