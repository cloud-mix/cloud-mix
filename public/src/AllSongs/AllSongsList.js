import React, { Component } from 'react';
import { Row, Col, Grid } from "react-materialize";
import AllSongsListEntry from './AllSongsListEntry';
import axios from 'axios';
import blobUtil from "blob-util";

class AllSongsList extends Component {
  constructor(){
    super();
    this.state = {
      allSongs: [],
      loaded: 0
    }

    this.getAllSongs = this.getAllSongs.bind(this);
  }

  componentDidMount(){
    this.getAllSongs();
  }

  getAllSongs(){
    axios.get('/songs')
      .then((songs) => {
        songs.data.forEach((song) => {
          blobUtil.base64StringToBlob(song.url)
            .then((url) => {
              song.url = url;
            })
        });
        console.log("Got all the songs: ", songs);
        this.setState({
          allSongs: songs.data
        });
        this.setLoaded();
      })
      .catch((error) => {
        console.log("Coundn't get all the songs because: ", error);
      })
  }

   setLoaded() {
    this.setState({loaded: this.state.loaded + 1});
  }



  render(){
    return this.state.loaded === 1 ? (
      <div>
        {this.state.allSongs.map((song) => {
          <Row className="show-grid">
            <Col s={6}>
              <AllSongsListEntry
                song={song}
                setSongTitle={this.props.setSongTitle}
                setGenre={this.props.setGenre}
                isLoggedIn={this.props.isLoggedIn}
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
};


export default AllSongsList;
