import React from "react";
import SongListEntry from "./SongListEntry";
import axios from "axios";
<<<<<<< HEAD
// import { Row, Col } from "react-materialize";
import { Grid, Row, Col } from 'react-bootstrap';

class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: [1,2,3,4],
      soon: [1,2,3,4]
    };
  }
  // componentDidMount() {
  //   axios.get("/completed").then(function(completed) {
  //     axios.get("/soon").then(function(soon){
  //       this.setState({completed: completed.data, soon: soon.data});
  //     })
  //   });
  // }
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col md={6} lg={6}><SongListEntry song={this.state.completed[0]} /></Col>
          <Col md={6} lg={6}><SongListEntry song={this.state.soon[0]} /></Col>
        </Row>
        <Row className="show-grid">
          <Col md={6} lg={6}><SongListEntry song={this.state.completed[1]} /></Col>
          <Col md={6} lg={6}><SongListEntry song={this.state.soon[1]} /></Col>
        </Row>
        <Row className="show-grid">
          <Col md={6} lg={6}><SongListEntry song={this.state.completed[2]} /></Col>
          <Col md={6} lg={6}><SongListEntry song={this.state.soon[2]} /></Col>
        </Row>
        <Row className="show-grid">
          <Col md={6} lg={6}><SongListEntry song={this.state.completed[3]} /></Col>
          <Col md={6} lg={6}><SongListEntry song={this.state.soon[3]} /></Col>
        </Row>

      </Grid>
    );
  }
}


export default SongList;
