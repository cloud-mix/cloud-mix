import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import WaveformVisual from "./WaveformVisual.js";
import getUserMedia from "../../audioHelpers/getUserMedia.js";
import stopRecord from "../../audioHelpers/stopRecord.js";
import record from "../../audioHelpers/record.js";
import play from "../../audioHelpers/play.js";
import stopPlayback from "../../audioHelpers/stopPlayback.js";
import waveformInit from "../../audioHelpers/waveformInit.js";
import waveformVisual from "../../audioHelpers/waveformVisual.js";
import inputVisual from "../../audioHelpers/inputVisual.js";
import { Button, Modal } from "react-materialize";
import axios from "axios";
import blobUtil from "blob-util";

class JamView extends Component {
  constructor() {
    super();
    this.state = {
      recorder: null,
      recording: false,
      offset: 0,
      firstRec: false,
      change: false,
      playing: false,
      tracks: [],
      wavesurfer: null,
      blob: null,
      uploadSuccessful: false
    }

    this.postBlobToDB= this.postBlobToDB.bind(this);
  }

  componentDidMount() {
    getUserMedia(
      this.setUrl.bind(this),
      this.setRecorder.bind(this),
      this.setBlob.bind(this)
    );
    waveformInit(this.setWavesurfer.bind(this));
    inputVisual();
  }

  setBlob(blob) {
    this.setState({ blob: blob });
  }

  postBlobToDB() {
    if (this.state.urls.length < 2) {
      blobUtil.blobToBinaryString(this.state.blob).then(data => {
        axios.post("/songs", {
          title: this.props.songCreateTitle,
          genre: this.props.songCreateGenre,
          contriblimit: this.props.songCreateContributorLimit,
          url: btoa(data),
          contributors: this.props.currentUser,
          username: this.props.currentUser
        });
      });
      this.setState({
        uploadSuccessful: true
      });
      this.props.handleSuccessfulUpload();

    } else {
      blobUtil.blobToBinaryString(this.state.blob).then(data => {
        axios.put("/songs", {
          contributors: this.props.currentUser,
          url: this.state.urls[this.state.urls.length - 1],
          offsets: this.state.offsets[this.state.offsets.length - 1]
        });
      });
      this.setState({
        uploadSuccessful: true
      });
      this.props.handleSuccessfulUpload();
    }
  }

  handleOnSongSubmitClick() {
    e.preventDefault();
    this.postBlobToDB();
  }

  setRecorder(recorder) {
    this.setState({ recorder: recorder });
  }

  setRecording() {
    this.setState({ recording: !this.state.recording });
  }

  setUrl(url) {
    this.props.currentSong.url.push(url);
    this.setState({ change: !this.state.change });
  }

  setOffset(offset) {
    this.setState({ offset: offset });
  }

  setTrackOffset(offset) {
    this.props.currentSong.offsets.push(offset);
    this.setState({ change: !this.state.change });
  }

  setFirstRec() {
    this.setState({ firstRec: !this.state.firstRec });
  }

  setPlaying() {
    this.setState({ playing: !this.state.playing });
  }

  setTrack(tracks) {
    this.setState({ tracks: tracks});
  }

  setWavesurfer(wave) {
    this.setState({ wavesurfer: wave });
  }

  render() {
    console.log(this.props);
    this.state.firstRec ?
      waveformVisual(this.props.currentSong.url[this.props.currentSong.url - 1], this.state.wavesurfer) : null;
    return (
      <div className="jamView">
        <div className="jam_header">
          <h3><b>Title: </b>{this.props.currentSong.title}</h3>
          <h3><b>Genre: </b>{this.props.currentSong.genre}</h3>
        </div>


        <div id="input" />

        {this.state.recording
          ? <Button
              className="red"
              floating
              large
              waves="light"
              icon="mic_off"
              onClick={() => {
                stopRecord(this.state.recorder, this.setRecording.bind(this));
              }}
            />
          : <Button
              className="recordButton"
              floating
              large
              waves="light"
              icon="mic_none"
              onClick={() => {
                record(
                  this.state.recorder,
                  this.props.currentSong.url,
                  this.setRecording.bind(this),
                  this.state.firstRec,
                  this.setFirstRec.bind(this)
                );
              }}
            />}

        {!this.state.playing
          ? <Button
              floating
              large
              waves="light"
              icon="play_arrow"
              onClick={() => {
                play(
                  this.props.currentSong.url,
                  this.state.offset,
                  this.setPlaying.bind(this),
                  this.setTrack.bind(this),
                  this.state.firstRec,
                  this.props.currentSong.offsets
                );
              }}
            />
          : <Button
              floating
              large
              waves="light"
              icon="stop"
              onClick={() => {
                stopPlayback(this.state.tracks, this.setPlaying.bind(this));
              }}
            />}

        {this.state.blob
              ? (
                  <Link to="/"><Button
                    className="submitButton"
                    onClick={e => {this.setTrackOffset(this.state.offset)
                    this.postBlobToDB(e);}}
                  >
                    Submit
                  </Button></Link>)
              : null
          }


        {this.props.currentSong.url.length > 1
          ? <input
              onChange={e => {
                this.setOffset(e.target.value);
                console.log("current offset is", e.target.value);
              }}
            />
          : null}

        <div className="waveform" />

      </div>
    );
  }
}

export default JamView;
