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
import FooterModal from './FooterModal.js';
import getSongs from '../audioHelpers/getSongs.js';

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
      loaded: 0
    };
    getSongs(this);
    this.signupUser = this.signupUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.handleSuccessfulUpload = this.handleSuccessfulUpload.bind(this);
    this.setCurrentSong = this.setCurrentSong.bind(this);
    this.handleSongCreate = this.handleSongCreate.bind(this);
    this.setUserSongs = this.setUserSongs.bind(this);
  }


  setLoaded() {
    this.setState({loaded: this.state.loaded + 1});
  }

  // handles user login
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

  //if true is passed in then only the users songs will appear in all songs list
  setUserSongs(bool) {
    this.setState({userSongs: bool});
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

  //shows success sweetAlert
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
  }

  //sets the wavesurfer object to the state 
  setWavesurfer(wave) {
    this.setState({wavesurfer: wave});
  }

  //same as above but for live input
  setWaveInput(wave) {
    this.setState({waveInput: wave});
  }

  render() {
    return (
      <Router>
        <div>

          <NavBar
            setUserSongs={this.setUserSongs}
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

          <Route exact path="/" render={() =>
            <Jumbotron
              currentUser={this.state.currentUser}
              isLoggedIn={this.state.isLoggedIn}
              completed={this.state.completed}
            />
          }/>

          <Route
            exact
            path="/"
            render={() => (
              <SongList
                loaded={this.state.loaded}
                completed={this.state.completed}
                soon={this.state.soon}
                currentUser={this.state.currentUser}
                isLoggedIn={this.state.isLoggedIn}
                setCurrentSong={this.setCurrentSong}
              />
            )}
          />


            <Route
              path="/allSongs"
              render={() => (
                <AllSongsList
                  isLoggedIn={this.state.isLoggedIn}
                  setCurrentSong={this.setCurrentSong}
                  currentUser={this.state.currentUser}
                  userSongs={this.state.userSongs}
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

                <FooterModal />

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
              this.setState({ showUploadSuccess: false });
              getSongs(this);
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
