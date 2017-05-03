import React from "react";
import SongListEntry from "./SongListEntry";
import { Row, Col, Grid } from "react-materialize";

class SongList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: ['Song1','Song2','Song3','Song4'],
      soon: ['SongSoon1','SongSoon2','SongSoon3','SongSoon4']
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
         /></Col>
         <Col s={6}><SongListEntry
           song={this.state.soon[0]}
           setSongTitle={this.props.setSongTitle}
         /></Col>
        </Row>

        <Row className="show-grid">
          <Col s={6}><SongListEntry
            song={this.state.completed[1]}
            setSongTitle={this.props.setSongTitle}
          /></Col>
          <Col s={6}><SongListEntry
            song={this.state.soon[1]}
            setSongTitle={this.props.setSongTitle}
          /></Col>
        </Row>
        <Row className="show-grid">
          <Col s={6}><SongListEntry
            song={this.state.completed[2]}
            setSongTitle={this.props.setSongTitle}
          /></Col>
          <Col s={6}><SongListEntry
            song={this.state.soon[2]}
            setSongTitle={this.props.setSongTitle}
          /></Col>
        </Row>
        <Row className="show-grid">
          <Col s={6}><SongListEntry
            song={this.state.completed[3]}
            setSongTitle={this.props.setSongTitle}
          /></Col>
          <Col s={6}><SongListEntry
            song={this.state.soon[3]}
            setSongTitle={this.props.setSongTitle}
          /></Col>
        </Row>
        </div>
    );
  }
}

export default SongList;