import React from "react";
import SongListEntry from "./SongListEntry";
import { Row, Col, Grid, Preloader } from "react-materialize";
import axios from 'axios';
import convertToUrls from '../../audioHelpers/convertToUrls.js';

const SongList = (props) => {

    return props.loaded >= 2 ? (
      <div>
        <Row className="show-grid">
          <Col s={6}>
        {props.completed.map((song, i) => (
            <SongListEntry
              currentUser={props.currentUser}
              song={props.completed[i]}
              isLoggedIn={props.isLoggedIn}
              setCurrentSong={props.setCurrentSong}
            />
        ))}
        </Col>
        <Col s={6}>
        {props.soon.map((song, i) => (
            <SongListEntry
              currentUser={props.currentUser}
              song={props.soon[i]}
              isLoggedIn={props.isLoggedIn}
              setCurrentSong={props.setCurrentSong}
            />
         ))}
         </Col>
          </Row>

      </div>
    ) : <div className="loading"></div>
  }

export default SongList;
