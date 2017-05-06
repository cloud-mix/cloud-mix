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


  componentDidMount(){
    this.getMostRecentSongs();
    this.getSoonToBeCompletedSongs();
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
    console.log(this.state.completed);
    console.log(this.state.soon);

    return this.state.loaded === 2 ? (
      <div>
        <Row className="show-grid">
         <Col s={6}><SongListEntry
           song={this.state.completed[0]}
           setSongTitle={this.props.setSongTitle}
           setGenre={this.props.setGenre}
           isLoggedIn={this.props.isLoggedIn}
         /></Col>
         <Col s={6}><SongListEntry
           song={this.state.soon[0]}
           setSongTitle={this.props.setSongTitle}
           setGenre={this.props.setGenre}
           isLoggedIn={this.props.isLoggedIn}
         /></Col>
        </Row>

        <Row className="show-grid">
          <Col s={6}><SongListEntry
            song={this.state.completed[1]}
            setSongTitle={this.props.setSongTitle}
            setGenre={this.props.setGenre}
            isLoggedIn={this.props.isLoggedIn}
          /></Col>
          <Col s={6}><SongListEntry
            song={this.state.soon[1]}
            setSongTitle={this.props.setSongTitle}
            setGenre={this.props.setGenre}
            isLoggedIn={this.props.isLoggedIn}
          /></Col>
        </Row>
        <Row className="show-grid">
          <Col s={6}><SongListEntry
            song={this.state.completed[2]}
            setSongTitle={this.props.setSongTitle}
            setGenre={this.props.setGenre}
            isLoggedIn={this.props.isLoggedIn}
          /></Col>
          <Col s={6}><SongListEntry
            song={this.state.soon[2]}
            setSongTitle={this.props.setSongTitle}
            setGenre={this.props.setGenre}
            isLoggedIn={this.props.isLoggedIn}
          /></Col>
        </Row>
        <Row className="show-grid">
          <Col s={6}><SongListEntry
            song={this.state.completed[3]}
            setSongTitle={this.props.setSongTitle}
            setGenre={this.props.setGenre}
            isLoggedIn={this.props.isLoggedIn}
          /></Col>
          <Col s={6}><SongListEntry
            song={this.state.soon[3]}
            setSongTitle={this.props.setSongTitle}
            setGenre={this.props.setGenre}
            isLoggedIn={this.props.isLoggedIn}
          /></Col>
        </Row>
        </div>
    ) : (
      <div className="loading">
        <div className="comingSoon">Jams coming soon</div>
      </div>)
  }
}

export default SongList;




// <Row>
//   <Col s={4}>
//     <Preloader size='big'/>
//   </Col>
// </Row>