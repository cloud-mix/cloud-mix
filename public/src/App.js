import React, { Component } from 'react';
import SongList from './SongList/SongList';
import NavBar from './NavBar/NavBar';
import JamView from './Jam/JamView';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state = {
      isLoggedIn: false,
      currentUser: '',
    };

    this.handleOAuthLogin = this.handleOAuthLogin.bind(this);
    this.handleOauthLogout = this.handleOAuthLogout.bind(this);
  }





  handleOAuthLogin(){
    axios.get('/auth/facebook')
      .then((user) => {
        console.log(user);
        debugger;
        this.setState({
          currentUser: user.username,
          isLoggedIn: true
        });
      })
      .catch((error) => {
        console.log("Error logging in with Facebook Oauth: ", error);
      });
  }


  handleOAuthLogout(){
    axios.get('/logout')
      .then((status) => {
        this.setState({
          currentUser: '',
          isLoggedIn: false
        });
        console.log("User Logged Out");
      })
      .catch((err) => {
        console.log("Error logging user out, try again.", err);
      });
  }

  render(){
    console.log(this.state.isLoggedIn);
    return(
      <div>
        <Grid>
          <Row xs={12} md={0} mdPull={0}>
            <Col>
              <NavBar
              handleOauthLogin={this.handleOAuthLogin}
              handleOauthLogout={this.handleOAuthLogout}
              isLoggedIn={this.state.isLoggedIn}
              />
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
