import React from "react";
import SongListEntry from "./SongListEntry";
import { Row, Col, Grid, Preloader } from "react-materialize";
import axios from 'axios';
import convertToUrls from '../../audioHelpers/convertToUrls.js';

class SongList extends React.Component {
  constructor() {
    super();
    this.state = {
      completed: [],
      soon: [],
      loaded: 0
    };

    this.getMostRecentSongs = this.getMostRecentSongs.bind(this);
    this.getSoonToBeCompletedSongs = this.getSoonToBeCompletedSongs.bind(this);
  }


  componentWillMount(){
    this.getMostRecentSongs();
    this.getSoonToBeCompletedSongs();
  }
  getRecentAndSoon() {
    this.getMostRecentSongs();
    this.getSoonToBeCompletedSongs();
    this.setState({refetchSongs: false});
  }
  getMostRecentSongs(){
    axios.get('/recent')
      .then((songs) => {
        console.log("In the song list component getting the recent songs: ", songs);
        convertToUrls(songs.data);
        this.setState({
          completed: songs.data
        });
        this.setLoaded();
      })
      .catch((error) => {
        console.log("Couldn't get the recent songs because: ", error);
      })
  }

  getSoonToBeCompletedSongs(){
    axios.get('/soon')
      .then((songs) => {
        console.log("In the song list component getting the soon to be completed songs: ", songs);
        convertToUrls(songs.data);
        this.setState({
          soon: songs.data
        });
        this.setLoaded();
      })
      .catch((error) => {
        console.log("Coudn't get the soon to be completed songs because: ", error);
      })
  }

  setLoaded() {
    this.setState({loaded: this.state.loaded + 1});
  }


  render() {
    {if(this.state.refetchSongs){
      this.getRecentAndSoon();
    }}
    return this.state.loaded === 2 ? (
      <div>
        <Row className="show-grid">
          <Col s={6}>
        {this.state.completed.map((song, i) => (
            <SongListEntry
              currentUser={this.props.currentUser}
              song={this.state.completed[i]}
              isLoggedIn={this.props.isLoggedIn}
              setCurrentSong={this.props.setCurrentSong}
            />
        ))}
        </Col>
        <Col s={6}>
        {this.state.soon.map((song, i) => (
            <SongListEntry
              currentUser={this.props.currentUser}
              song={this.state.soon[i]}
              isLoggedIn={this.props.isLoggedIn}
              setCurrentSong={this.props.setCurrentSong}
            />
         ))}  
         </Col> 
          </Row>

      </div>
    ) : (
      <div className="loading">
        <div className="comingSoon">Jams coming soon</div>
      </div>)
  }
}

export default SongList;
