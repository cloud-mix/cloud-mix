import React, { Component } from 'react';
import SongList from './SongList/SongList';
import NavBar from './NavBar/NavBar';
import JamView from './Jam/JamView';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: false,
      currentUser: '',
      loginUrl: '',
      signupUsernameInput: '',
      signupUserCredentials: '',
      loginUsernameInput: '',
      loginUserCredentials: ''
    };

    this.signupUser = this.signupUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  loginUser(){
    axios.get('/users/' + this.state.loginUsernameInput + '/' +  this.state.loginUserCredentials)
    .then((user) => {
      console.log(user);
      this.setState({
        currentUser: user.data.username,
        isLoggedIn: true,
        loginUserCredentials: ''
      });
    })
    .catch((error) => {
      console.log("Error logging in: ", error);
    });
  }

  signupUser(){
    axios.post('/signup', {
      username: this.state.signupUsernameInput,
      password: this.state.signupUserCredentials
    })
    .then((user) => {
      console.log(user, ' succesfully signed up!');
      this.setState({
        currentUser: user.data.username,
        isLoggedIn: true,
        signupUsernameInput: '',
        signupUserCredentials: ''
      });
    })
    .catch((err) => {
      console.log("Error signing up user because: ", err);
    })
  }

  handleLoginClick(){
    if(this.state.loginUsernameInput.length > 6 && this.state.loginUserCredentials.length > 6){
      this.loginUser();
    }
  }

  handleSignupClick(){
    if(this.state.signupUsernameInput.length > 6 && this.state.signupUserCredentials.length > 6){
      console.log(this.state.signupUserCredentials);
      console.log(this.state.signupUsernameInput);
      this.signupUser();
    }
  }

  handleLogout(){
    this.setState({
      currentUser: '',
      loginUsernameInput: '',
      loginUserCredentials: '',
      signupUsernameInput: '',
      signupUserCredentials: '',
      isLoggedIn: !this.state.isLoggedIn
    });
  }

  loginUrl(){
    this.setState({
      loginUrl: 'users/' + this.state.loginUsernameInput + '/' + this.state.loginUserCredentials
    })
  }

  handleUsernameInputLogin(loginUsername){
    this.setState({
      loginUsernameInput: loginUsername
    });
  }

  handleUserCredentialsLogin(loginCredentials){
    this.setState({
      loginUserCredentials: loginCredentials
    });
  }

  handleUsernameInputSignup(signupUsername){
    this.setState({
      signupUsernameInput: signupUsername
    });
  }

  handleUserCredentialsSignup(signupCredentials){
    this.setState({
      signupUserCredentials: signupCredentials
    });
  }

  render(){
    return(
      <div>
        <Grid>
          <Row xs={12} md={0} mdPull={0}>
            <Col>
              <NavBar
              isLoggedIn={this.state.isLoggedIn}
              logInUrl={this.state.logInUrl}
              handleUsernameInputLogin={this.handleUsernameInputLogin.bind(this)}
              handleUserCredentialsLogin={this.handleUserCredentialsLogin.bind(this)}
              handleLoginClick={this.handleLoginClick.bind(this)}
              handleUsernameInputSignup={this.handleUsernameInputSignup.bind(this)}
              handleUserCredentialsSignup={this.handleUserCredentialsSignup.bind(this)}
              handleSignupClick={this.handleSignupClick.bind(this)}
              handleLogout={this.handleLogout.bind(this)}
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
