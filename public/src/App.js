import React, { Component } from 'react';
import SongList from './SongList/SongList';
import NavBar from './NavBar/NavBar';
import JamView from './Jam/JamView';
import { Grid, Row, Col } from 'react-bootstrap';


class App extends Component {
  constructor(){
    super();

    this.state = {
      isLoggedIn: false,
      currentUser: '',
    };
  }

  render(){
    return(
      <div>
        <Grid>
          <Row xs={12} md={0} mdPull={0}>
            <Col>
              <NavBar isLoggedIn={this.state.isLoggedIn}/>
            </Col>
          </Row>
          <Row xs={8} md={2} mdPull={2}>
            <Col>
              <SongList />
              <JamView />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
};


export default App;
