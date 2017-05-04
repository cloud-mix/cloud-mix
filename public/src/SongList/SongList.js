import React from "react";
import SongListEntry from "./SongListEntry";
import { Row, Col, Grid } from "react-materialize";

class SongList extends React.Component {
  constructor() {
    super();
    this.state = {
      completed: [
        {title: 'Pain?', genre: 'metal', creator: 'Alex1100', cont: 0},
        {title: 'Hello World', genre: 'Dev Rock', creator: 'newscrash', cont: 0},
        {title: 'Yo Yo', genre: 'hip-hop', creator: 'Kanye', cont: 0},
        {title: 'Beautiful Freak', genre: 'trip-hop', creator: 'hugodol', cont: 0}
      ],
      soon: [
        {title: 'bitchy blob', genre: 'electronic', creator: 'someDude254', cont:5},
        {title: 'Jamz Bros', genre: 'Soul', creator: 'steviewonder', cont: 9},
        {title: 'Run with the Wolf', genre: 'classical', creator: 'mozart', cont: 2},
        {title: 'Hypertension', genre: 'pop', creator: 'asswipe', cont: 6}
      ]
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
      <div>
        <Row className="show-grid">
         <Col s={6}><SongListEntry
           song={this.state.completed[0]}
           setSongTitle={this.props.setSongTitle}
           isLoggedIn={this.props.isLoggedIn}
         /></Col>
         <Col s={6}><SongListEntry
           song={this.state.soon[0]}
           setSongTitle={this.props.setSongTitle}
           isLoggedIn={this.props.isLoggedIn}
         /></Col>
        </Row>

        <Row className="show-grid">
          <Col s={6}><SongListEntry
            song={this.state.completed[1]}
            setSongTitle={this.props.setSongTitle}
            isLoggedIn={this.props.isLoggedIn}
          /></Col>
          <Col s={6}><SongListEntry
            song={this.state.soon[1]}
            setSongTitle={this.props.setSongTitle}
            isLoggedIn={this.props.isLoggedIn}
          /></Col>
        </Row>
        <Row className="show-grid">
          <Col s={6}><SongListEntry
            song={this.state.completed[2]}
            setSongTitle={this.props.setSongTitle}
            isLoggedIn={this.props.isLoggedIn}
          /></Col>
          <Col s={6}><SongListEntry
            song={this.state.soon[2]}
            setSongTitle={this.props.setSongTitle}
            isLoggedIn={this.props.isLoggedIn}
          /></Col>
        </Row>
        <Row className="show-grid">
          <Col s={6}><SongListEntry
            song={this.state.completed[3]}
            setSongTitle={this.props.setSongTitle}
            isLoggedIn={this.props.isLoggedIn}
          /></Col>
          <Col s={6}><SongListEntry
            song={this.state.soon[3]}
            setSongTitle={this.props.setSongTitle}
            isLoggedIn={this.props.isLoggedIn}
          /></Col>
        </Row>
        </div>
    );
  }
}

export default SongList;