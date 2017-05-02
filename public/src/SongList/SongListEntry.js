import React from "react";
import { Card, CardTitle } from "react-materialize";
import { Col } from 'react-bootstrap';

var SongListEntry = function(props) {
  return (
    <Card
      className="small"
      header={
        <CardTitle image="https://res.cloudinary.com/demo/video/upload/h_200,w_500,fl_waveform,co_black,b_white/bumblebee.png">
          Example Song
        </CardTitle>
      }
      actions={[<a href="#">Creator</a>]}
    >
      Genre: Example
    </Card>
  );
};

export default SongListEntry;
