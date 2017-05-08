import React, { Component } from 'react';
import { Row, Col, Grid, Button } from "react-materialize";
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
      term: '',
      searchedSongsA: [],
      searchedSongsB: []
    }

    this.getAllSongs = this.getAllSongs.bind(this);
  }

  componentDidMount(){
    this.getAllSongs();
  }

  handleSongSearchInput(term){
    this.setState({term: term});
  }

  handleSongSearchClick(){
    if(this.state.term.length > 0){
      console.log("In the handleSongSearchClick func: ", this.state.songs);
      console.log("In the handleSongSearchClick func: ", this.state.term);
      this.setState({
        searchedSongsA: this.state.songs[0].map(song => song.title.split('').includes(this.state.term.split(''))),
        searchedSongsB: this.state.songs[1].map(song => song.title.split('').includes(this.state.term.split('')))
      })
    } else {
      this.setState({
        searchedSongsA: [],
        searchedSongsB: []
      });
    }
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
    console.log("Checking the songs: ", this.state.songs);
    console.log("Checkin the term: ", this.state.term);
    return this.state.searchedSongsA.length > 0 && this.state.searchedSongsB.length > 0 ?
    (
      <div>
        <div>
          <input
          type="text"
          placeholder={this.state.term}
          className="searchField"
          onChange={(e) => this.handleSongSearchInput(e.target.value)}
          />
          <Button
          waves="light"
          onClick={() => this.handleSongSearchClick()}
          >
            Search
          </Button>
        </div>

        <div className="allSongs">
          <Row className="show-grid">
          {this.state.searchedSongsA.map(song => (
            <Col s={6}>
              <SongListEntry
                song={song}
                isLoggedIn={this.props.isLoggedIn}
                setCurrentSong={this.props.setCurrentSong}
                currentUser={this.props.currentUser}
              />
            </Col>
          ))}

          {this.state.searchedSongsB.map(song => (
            <Col s={6}>
              <SongListEntry
                song={song}
                isLoggedIn={this.props.isLoggedIn}
                setCurrentSong={this.props.setCurrentSong}
                currentUser={this.props.currentUser}
              />
            </Col>
          ))}
          </Row>
        </div>
      </div>
    ) :
    this.state.goodToGo > 0 ?
      (
        <div>
          <div>
            <input
            type="text"
            placeholder="Search Songs..."
            className="searchField"
            onChange={(e) => this.handleSongSearchInput(e.target.value)}
            />
            <Button
          waves="light"
          onClick={() => this.handleSongSearchClick()}
          >
            Search
          </Button>
          </div>

          <div className="allSongs">
          <Row className="show-grid">
          {this.state.songs[0].map(song => (
            <Col s={6}>
              <SongListEntry
                song={song}
                isLoggedIn={this.props.isLoggedIn}
                setCurrentSong={this.props.setCurrentSong}
                currentUser={this.props.currentUser}
              />
            </Col>
          ))}

          {this.state.songs[1].map(song => (
            <Col s={6}>
              <SongListEntry
                song={song}
                isLoggedIn={this.props.isLoggedIn}
                setCurrentSong={this.props.setCurrentSong}
                currentUser={this.props.currentUser}
              />
            </Col>
          ))}
          </Row>
        </div>
        </div>
    ) : <div className="loading"></div>
  };
};


export default AllSongsList;
