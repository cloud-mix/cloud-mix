import React, { Component } from 'react';
import WaveformVisual from './WaveformVisual.js'
import getUserMedia from '../../audioHelpers/getUserMedia.js';
import stopRecord from '../../audioHelpers/stopRecord.js';
import record from '../../audioHelpers/record.js';
import play from '../../audioHelpers/play.js';
import { Button } from "react-materialize";
import axios from 'axios';
import saveAs from 'save-as';


class JamView extends Component {
  constructor() {
    super();
    this.state = {
      recorder: null,
      recording: false,
      urls: [],
      offset: 0,
      firstRec: false,
      change: false, 
      playing: false
    }
    this.uploadToAmazon = this.uploadToAmazon.bind(this);
  }

  componentDidMount() {
    //TODO: grab existing track and set to urls
    getUserMedia(
      this.setUrl.bind(this),
      this.setRecorder.bind(this)
    );
  }

  uploadToAmazon(){
         axios.post('/upload', {
           file: './song.mp3',
           key: this.props.currentUser + '/' + this.props.currentUser + '_' + this.props.songCreateTitle + '_' + this.state.urls.length + '.mp3'
        })
  }

  handleOnSongSubmitClick(){
    e.preventDefault();
    this.uploadToAmazon();
  }

  setRecorder(recorder) {
    this.setState({recorder: recorder});
  }

  setRecording() {
    this.setState({recording: !this.state.recording});
  }

  setUrl(url) {
    this.state.urls.push(url);
    this.setState({change: !this.state.change});
  }

  setOffset(offset) {
    this.setState({offset: offset});
  }

  setTrackOffset(i, offset) {
    this.state.urls[i].offset = offset;
    this.setState({change: !this.state.change});
  }

  setFirstRec() {
    this.setState({firstRec: !this.state.firstRec});
  }

  render() {
    return (
      <div className="jamView">

        <div className="jam_header">
          <h2>Title: {this.props.songCreateTitle}</h2>
          <h3>Genre: {this.props.songCreateGenre}</h3>
        </div>

        {this.state.recording ? (

          <Button className='red' floating large waves='light' icon='mic_off'
            onClick={() => {
              stopRecord(this.state.recorder, this.setRecording.bind(this));
            }}
          ></Button>
       
        ) : (
          <Button className='recordButton'  floating large waves='light' icon='mic_none'
            onClick={() => {
              record(
                this.state.recorder,
                this.state.urls,
                this.setRecording.bind(this),
                this.state.firstRec,
                this.setFirstRec.bind(this)
              );
            }}
          ></Button>

        )}
        <Button floating large  waves='light' icon='play_arrow' onClick={() => {
          play(this.state.urls, this.state.offset, this.setTrackOffset.bind(this));
        }}></Button>
        {this.state.urls > 1 ? (
          <input onChange={e => {
            this.setOffset(e.target.value);
            console.log('current offset is', e.target.value);
          }}></input>
        ) : null}

        {this.state.urls.map((url, i) => {
          return <WaveformVisual key={i} url={url.url} />
        })}

        <Button onClick={(e) => this.uploadToAmazon(e)}>
          Submit
        </Button>

      </div>
    );
  }
}


export default JamView;
