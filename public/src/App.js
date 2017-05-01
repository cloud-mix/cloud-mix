import React, { Component } from "react";
import SongList from "./SongList/SongList";
import NavBar from "./NavBar/NavBar";
import JamView from "./Jam/JamView";
import { Grid, Row, Col, Modal } from "react-bootstrap";
import axios from "axios";
import ModalView from "./ModalView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      currentUser: '',
      loginUrl: '',
      signupUsernameInput: '',
      signupUserCredentials: '',
      loginUsernameInput: '',
      loginUserCredentials: '',
      allSongs: [],
      songCreateTitle: '',
      songCreateGenre: '',
      songCreateContributorLimit: '',
      userWouldLikeToCreateSong: false
    };

    this.signupUser = this.signupUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
    // this.createSong = this.createSong.bind(this);
  }


  // createSong(){

  // }

  loginUser(){
    axios.get('/users/' + this.state.loginUsernameInput + '/' +  this.state.loginUserCredentials)
    .then((user) => {
      console.log(user);
      this.setState({
        currentUser: user.data.username,
        isLoggedIn: true,
        loginUserCredentials: ''
      });
  }

  signupUser() {
    axios
      .post("/signup", {
        username: this.state.signupUsernameInput,
        password: this.state.signupUserCredentials
      })
      .then(user => {
        console.log(user, " succesfully signed up!");
        this.setState({
          currentUser: user.data.username,
          isLoggedIn: true,
          signupUsernameInput: "",
          signupUserCredentials: ""
        });
      })
      .catch(err => {
        console.log("Error signing up user because: ", err);
      });
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

  handleLogout() {
    this.setState({
      currentUser: "",
      loginUsernameInput: "",
      loginUserCredentials: "",
      signupUsernameInput: "",
      signupUserCredentials: "",
      isLoggedIn: !this.state.isLoggedIn
    });
  }

  loginUrl() {
    this.setState({
      loginUrl: "users/" +
        this.state.loginUsernameInput +
        "/" +
        this.state.loginUserCredentials
    });
  }

  handleUsernameInputLogin(loginUsername) {
    this.setState({
      loginUsernameInput: loginUsername
    });
  }

  handleUserCredentialsLogin(loginCredentials) {
    this.setState({
      loginUserCredentials: loginCredentials
    });
    console.log(this.state.loginUserCredentials);
  }

  handleUsernameInputSignup(signupUsername) {
    this.setState({
      signupUsernameInput: signupUsername
    });
  }

  handleUserCredentialsSignup(signupCredentials) {
    this.setState({
      signupUserCredentials: signupCredentials
    });
  }

  handleSongCreateTitleInput(title){
    this.setState({
      songCreateTitle: title
    });
  }

  handleSongCreateGenreInput(genre){
    this.setState({
      songCreateGenre: genre
    });
  }

  handleSongCreateContributorLimit(limit){
    this.setState({
      songCreateContributorLimit: limit
    });
  }

  handleSongCreateClick(e){
    e.preventDefault();
    this.setState({
      userWouldLikeToCreateSong: true
    })
  }

  handleCancelSongCreateClick(){
    console.log(this.state.userWouldLikeToCreateSong);
    this.setState({
      userWouldLikeToCreateSong: false
    });
    console.log(this.state.userWouldLikeToCreateSong);
  }

  handleSongSubmitClick(){
    this.createSong();
  }

  render(){
    console.log(this.state.songCreateGenre);
    console.log(this.state.songCreateTitle);
    console.log(this.state.songCreateContributorLimit);
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
              handleSongCreateClick={this.handleSongCreateClick.bind(this)}
              />
            </Col>
          </Row>
          <Row xs={8} md={2} mdPull={2}>
            <Col>
              <SongList />
              <JamView
              userWouldLikeToCreateSong={this.state.userWouldLikeToCreateSong}
              handleSongCreateTitleInput={this.handleSongCreateTitleInput.bind(this)}
              handleSongCreateGenreInput={this.handleSongCreateGenreInput.bind(this)}
              handleSongCreateContributorLimit={this.handleSongCreateContributorLimit.bind(this)}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
};

export default App;
