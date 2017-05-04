import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SongList from "./SongList/SongList";
import NavBar from "./NavBar/NavBar";
import JamView from "./Jam/JamView";
import axios from "axios";
import LoginModal from "./LoginModal";
import { Footer } from "react-materialize";
import Jumbotron from "./Jumbotron";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      currentUser: "",
      loginUrl: "",
      signupUsernameInput: "",
      signupUserCredentials: "",
      loginUsernameInput: "",
      loginUserCredentials: "",
      allSongs: [],
      songCreateTitle: "",
      songCreateGenre: "",
      songCreateContributorLimit: 0,
      // userWouldLikeToCreateSong: false
    };

    this.signupUser = this.signupUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
    // this.createSong = this.createSong.bind(this);
  }

  loginUser() {
    axios
      .get(
        "/users/" +
          this.state.loginUsernameInput +
          "/" +
          this.state.loginUserCredentials
      )
      .then(user => {
        this.setState({
          currentUser: user.data.username,
          isLoggedIn: true,
          loginUserCredentials: ""
        });
      });
  }

  signupUser() {
    axios
      .post("/signup", {
        username: this.state.loginUsernameInput,
        password: this.state.loginUserCredentials
      })
      .then(user => {
        console.log(user, " succesfully signed up!");
        this.setState({
          currentUser: user.data.username,
          isLoggedIn: true,
          loginUsernameInput: "",
          loginUserCredentials: ""
        });
      })
      .catch(err => {
        console.log("Error signing up user because: ", err);
      });
  }

  handleLoginClick(e) {
    e.preventDefault();
    if (
      this.state.loginUsernameInput.length >= 6 ||
      this.state.loginUserCredentials.length >= 6
    ) {
      this.loginUser();
    }
  }

  handleSignupClick() {
    if (
      this.state.loginUsernameInput.length >= 6 ||
      this.state.loginUserCredentials.length >= 6
    ) {
      this.signupUser();
    }
  }

  handleLogout() {
    console.log('handleLogout triggerd');
    this.setState({
      currentUser: "",
      loginUsernameInput: "",
      loginUserCredentials: "",
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
  }

  handleSongCreateTitleInput(title) {
    this.setState({
      songCreateTitle: title
    });
  }

  handleSongCreateGenreInput(genre) {
    console.log(genre);
    this.setState({
      songCreateGenre: genre
    });
  }

  handleSongCreateContributorLimit(limit) {
    this.setState({
      songCreateContributorLimit: parseInt(limit, 10)
    });
  }

  handleSongCreateClick() {
    console.log('creating new song');
  }

  render() {
    return (
      <Router>
        <div>

          <NavBar
            isLoggedIn={this.state.isLoggedIn}
            logInUrl={this.state.logInUrl}
            username={this.state.currentUser}
            handleUsernameInputLogin={this.handleUsernameInputLogin.bind(this)}
            handleUserCredentialsLogin={this.handleUserCredentialsLogin.bind(
              this
            )}
            handleLoginClick={this.handleLoginClick.bind(this)}
            handleSignupClick={this.handleSignupClick.bind(this)}
            handleLogout={this.handleLogout.bind(this)}
            handleSongCreateTitleInput={this.handleSongCreateTitleInput.bind(
              this
            )}
            handleSongCreateGenreInput={this.handleSongCreateGenreInput.bind(
              this
            )}
            handleSongCreateContributorLimit={this.handleSongCreateContributorLimit.bind(
              this
            )}
            handleSongCreateClick={this.handleSongCreateClick.bind(this)}
          />

          <Route exact path="/" render={() => <Jumbotron />} />

          <Route exact path="/" render={() => (
            <SongList
              setSongTitle={this.handleSongCreateTitleInput.bind(this)}
              isLoggedIn={this.state.isLoggedIn}
            />
          )} />

          <Route path="/jam" render={() => <JamView
            songCreateTitle={this.state.songCreateTitle}
            songCreateGenre={this.state.songCreateGenre}
            currentUser={this.state.currentUser}
            />}
          />


          <Footer
            copyrights="&copy; 2017 Cloudmix"
            moreLinks={
              <a className="grey-text text-lighten-4 right" href="#!">
                More Links
              </a>
            }>
          </Footer>

        </div>
      </Router>
    );
  }
}

export default App;
