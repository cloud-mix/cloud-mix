import React from "react";
import { Card, CardTitle } from "react-materialize";
// import { Col, Grid, Row } from 'react-bootstrap';

var SongListEntry = function(props) {
  return (

          <Card
            className="small"
            header={
              <CardTitle image="http://s.bellevuecollege.edu/kbcs/uploads/2013/03/Waveform-Transmission.jpg">
                Example Song
              </CardTitle>
            }
            actions={[<a href="#">Song Status</a>]}
          >
            <b>Genre:</b> Example <br />
            <b>Max Contributors:</b> 5 <br />
            <b>Started by:</b> ExampleUser
          </Card>

  );
};

export default SongListEntry;
