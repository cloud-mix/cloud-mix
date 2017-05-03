import React from "react";
import {Link} from 'react-router-dom';
import { Card, CardTitle } from "react-materialize";
// import { Col, Grid, Row } from 'react-bootstrap';

var SongListEntry = props => (
  <Link to="/jam">
    <Card
      className="small"
      header={
        <CardTitle image="http://s.bellevuecollege.edu/kbcs/uploads/2013/03/Waveform-Transmission.jpg">
          {props.song}
        </CardTitle>
      }
      actions={[<a href="#">Song Status</a>]}
      onClick={() => {
        props.setSongTitle(props.song);
      }}
    >
      <b>Genre:</b> Example <br />
      <b>Max Contributors:</b> 5 <br />
      <b>Started by:</b> ExampleUser
    </Card>
  </Link>
);

export default SongListEntry;
