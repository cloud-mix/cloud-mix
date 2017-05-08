import React, { Component } from 'react';
import { Row, Col, Grid } from "react-materialize";
import SongListEntry from '../SongList/SongListEntry';
import axios from 'axios';
import blobUtil from "blob-util";
import convertToUrls from '../../audioHelpers/convertToUrls.js';

class AllSongsList extends Component {
  constructor(){
    super();
    this.state = {
      songs: [],
      goodToGo: 0,
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
        var userSongs = [];
        if (this.props.userSongs) {
          songs.data.forEach(song => {
            if(song.contributors.includes(this.props.currentUser)){
              userSongs.push(song);
            }
          })
          userSongs = [userSongs.slice(0, Math.floor(userSongs.length / 2)), userSongs.slice(Math.floor(userSongs.length / 2), userSongs.length)];
      } else {
          userSongs = [songs.data.slice(0, Math.floor(songs.data.length / 2)), songs.data.slice(Math.floor(songs.data.length / 2), songs.data.length)];
        }
        this.setState({
          songs: userSongs
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
    return  this.state.goodToGo > 0 ? 
      (<div className="allSongs">
        <Row className="show-grid">
          <Col s={6}>
          {this.state.songs[0].map(song => (
              <SongListEntry
                song={song}
                isLoggedIn={this.props.isLoggedIn}
                setCurrentSong={this.props.setCurrentSong}
                currentUser={this.props.currentUser}
              />
          ))}
          </Col>
          <Col s={6}>
          {this.state.songs[1].map(song => (
              <SongListEntry
                song={song}
                isLoggedIn={this.props.isLoggedIn}
                setCurrentSong={this.props.setCurrentSong}
                currentUser={this.props.currentUser}

              />
          ))}
          </Col>
        </Row>
      </div>  
    ) : <div className="loading"></div>
  };
};


export default AllSongsList;
