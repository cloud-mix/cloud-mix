import React, { Component } from 'react';
import { Row, Col, Grid } from "react-materialize";
import AllSongsListEntry from './AllSongsListEntry';
import axios from 'axios';
import blobUtil from "blob-util";
import convertToUrls from '../../audioHelpers/convertToUrls.js';

var AllSongsList = function(props){

      console.log("I got the songs to be populating the dang array", props.songs);
    return props.songs.length > 0 ? (
        <div>
        {props.songs.map((song) => {
          console.log("Each darn song: ", song);
          <Row className="show-grid">
            <Col s={6}>
              <AllSongsListEntry
                song={song}
                isLoggedIn={props.isLoggedIn}
                setCurrentSong={props.setCurrentSong}
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
      );
  };


export default AllSongsList;
