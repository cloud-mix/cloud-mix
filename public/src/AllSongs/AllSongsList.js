import React, { Component } from 'react';
import { Row, Col, Grid } from "react-materialize";
import AllSongsListEntry from './AllSongsListEntry';
import axios from 'axios';
import blobUtil from "blob-util";
import convertToUrls from '../../audioHelpers/convertToUrls.js';

class AllSongsList extends Component {
  constructor(){
    super();
    this.state = {
      songs: [],
      goodToGo: 0
    }

    this.getAllSongs = this.getAllSongs.bind(this);
  }

  componentDidMount(){
    this.getAllSongs();
  }

  getAllSongs(){
    axios.get('/songs')
      .then((songs) => {
        console.log("In the all songs list component getting the songs: ", songs);
        convertToUrls(songs.data);
        this.setState({
          songs: songs.data
        });
        this.setLoaded();
      })
      .catch((error) => {
        console.log("Couldn't get the songs because: ", error);
      });
  }

   setLoaded() {
    this.setState({goodToGo: this.state.goodToGo + 1});
  }



  render(){
    console.log("I got the songs to be populating the dang array", this.state.songs.length)

    return this.state.goodToGo > 0 ? (
        <div>
        {console.log(this.state.songs.length)};
        {this.state.songs.map((song) => {
          console.log("Each darn song: ", song);
          <Row className="show-grid">
            <Col s={6}>
              <AllSongsListEntry
                song={song}
                isLoggedIn={this.props.isLoggedIn}
                setCurrentSong={this.props.setCurrentSong}
              />
            </Col>
          </Row>
        })}
        </div>
      ) :
      (
        <div className="loading">
          <div className="comingSoon">Jams coming soon</div>
        </div>
      )
  }
}


export default AllSongsList;
