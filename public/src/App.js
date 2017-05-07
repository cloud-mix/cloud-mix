import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SongList from "./SongList/SongList";
import AllSongsList from './AllSongs/AllSongsList';
import NavBar from "./NavBar/NavBar";
import JamView from "./Jam/JamView";
import axios from "axios";
import LoginModal from "./LoginModal";
import { Footer } from "react-materialize";
import Jumbotron from "./Jumbotron";
import SweetAlert from "sweetalert-react";
import convertToUrls from '../audioHelpers/convertToUrls.js';

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
      validUsername: null,
      validPassword: null,
      showLoginError: false,
      showSignupError: false,
      currentSong: {url:[]},
      wavesurfer: null,
      waveInput: null,
      allSongs: [],
      refetchSongs: false
    };

    this.signupUser = this.signupUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.handleSuccessfulUpload = this.handleSuccessfulUpload.bind(this);
    this.setCurrentSong = this.setCurrentSong.bind(this);
    this.handleSongCreate = this.handleSongCreate.bind(this);
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
        if (user.data !== "Invalid Login Credentials") {
          this.setState({
            currentUser: user.data.username,
            isLoggedIn: true,
            loginUserCredentials: ""
          });
        } else {
          this.setState({ showLoginError: true });
        }
      });
  }
  setCurrentSong(song) {
    this.setState({currentSong: song});
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

  handleSuccessfulUpload() {
    this.setState({showUploadSuccess: true})
  }

  handleLoginClick(e) {
    e.preventDefault();
    if (
      this.state.loginUsernameInput.length >= 6 ||
      this.state.loginUserCredentials.length >= 6
    ) {
      this.setState({
        validUsername: true,
        validPassword: true
      });
      this.loginUser();
    } else {
      this.setState({
        validUsername: false,
        validPassword: false,
        showSignupError: true
      });
    }
  }

  handleSignupClick() {
    if (
      this.state.loginUsernameInput.length >= 6 ||
      this.state.loginUserCredentials.length >= 6
    ) {
      this.setState({
        validUsername: true,
        validPassword: true
      });
      this.handleModalStatus();
      this.signupUser();
    } else {
      this.setState({
        validUsername: false,
        validPassword: false
      });
    }
  }

  handleLogout() {
    console.log("handleLogout triggerd");
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

  handleSongCreate(title, genre, contributors) {
    this.setState({currentSong: {
      title: title,
      genre: genre,
      contriblimit: contributors,
      url: [],
      offsets: []
    }})
    console.log("IN HANDLE SONG CREATE, state is", this.state);
  }

  handleModalStatus() {
    if (
      this.state.validUsername === true && this.state.validPassword === true
    ) {
      this.setState({
        modalStatus: "close"
      });
    }
  }

  setWavesurfer(wave) {
    this.setState({wavesurfer: wave});
  }

  setWaveInput(wave) {
    this.setState({waveInput: wave});
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
            handleUserCredentialsLogin={this.handleUserCredentialsLogin.bind(this)}
            handleLoginClick={this.handleLoginClick.bind(this)}
            handleSignupClick={this.handleSignupClick.bind(this)}
            handleLogout={this.handleLogout.bind(this)}
            validUsername={this.state.validUsername}
            validPassword={this.state.validPassword}
            modalStatus={this.state.modalStatus}
            handleSongCreate={this.handleSongCreate}
            wavesurfer={this.state.wavesurfer}
            waveInput={this.state.waveInput}
          />

          <Route exact path="/" render={() => <Jumbotron />} />

          <Route
            exact
            path="/"
            render={() => (
              <SongList
                refetchSongs={this.state.refetchSongs}
                currentUser={this.state.currentUser}
                isLoggedIn={this.state.isLoggedIn}
                setCurrentSong={this.setCurrentSong}
              />
            )}
          />


            <Route
              path="/songs"
              render={() => (
                <AllSongsList
                  isLoggedIn={this.state.isLoggedIn}
                  setCurrentSong={this.setCurrentSong}
                  currentUser={this.state.currentUser}
                />
              )}
            />


          <Route
            path="/jam"
            render={() => (
              <JamView
                handleSuccessfulUpload={this.handleSuccessfulUpload}
                currentSong={this.state.currentSong}
                currentUser={this.state.currentUser}
                setCurrentSong={this.setCurrentSong}
                setWavesurfer={this.setWavesurfer.bind(this)}
                setWaveInput={this.setWaveInput.bind(this)}
              />
            )}
          />

          <Footer
            copyrights="&copy; 2017 Cloudmix"
            moreLinks={
              <a className="grey-text text-lighten-4 right" href="#!">
                More Links
              </a>
            }
          />
          <SweetAlert
            show={this.state.showSignupError}
            title="Registration Error"
            text="Both your username and password must be at least 6 characters long."
            type="error"
            onConfirm={() => {
              console.log("confirm");
              this.setState({ showSignupError: false });
            }}
            onEscapeKey={() => this.setState({ showSignupError: false })}
            onOutsideClick={() => this.setState({ showSignupError: false })}
          />
          <SweetAlert
            show={this.state.showLoginError}
            title="Login Error"
            text="Please check your username and password and try again."
            type="error"
            onConfirm={() => {
              console.log("confirm");
              this.setState({ showLoginError: false });
            }}
            onEscapeKey={() => this.setState({ showLoginError: false })}
            onOutsideClick={() => this.setState({ showLoginError: false })}
          />
          <SweetAlert
            show={this.state.showUploadSuccess}
            title="Upload successful"
            text="Your contribution was recorded successfully!"
            type="success"
            onConfirm={() => {
              console.log("confirm");
              this.setState({ showUploadSuccess: false, refetchSongs:true });

            }}
            onEscapeKey={() => this.setState({ showUploadSuccess: false })}
            onOutsideClick={() => this.setState({ showUploadSuccess: false })}
          />

        </div>
      </Router>
    );
  }
}

export default App;
