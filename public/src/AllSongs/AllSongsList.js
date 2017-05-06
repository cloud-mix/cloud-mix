import react from 'react';
import { Row, Col, Grid } from "react-materialize";


var AllSongsList = props => {
  return (
    <div>
    {props.allSongs.map((song) => {
      <Row className="show-grid">
        <Col s={6}>
          <SongListEntry
             song={song}
             title={song.title}
             genre={song.genre}
             isLoggedIn={props.isLoggedIn}
          />
        </Col>
      </Row>
    })}

    </div>

  );
};


export default AllSongsList;
