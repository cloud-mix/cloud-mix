import React from "react";
import LoggedinView from "./LoggedinView.js";
import LoggedoutView from "./LoggedoutView.js";
import UsersSongsList from "../UsersSongsList/UsersSongsList";

const NavBar = props => {
  return props.isLoggedIn === false
    ? <LoggedoutView
        handleLoginClick={props.handleLoginClick}
        handleSignupClick={props.handleSignupClick}
        handleUsernameInputLogin={props.handleUsernameInputLogin}
        handleUserCredentialsLogin={props.handleUserCredentialsLogin}
        logInUrl={props.logInUrl}
      />
    : <LoggedinView
        handleLogout={props.handleLogout}
        username={props.username}
        handleSongCreateTitleInput={props.handleSongCreateTitleInput}
        handleSongCreateGenreInput={props.handleSongCreateGenreInput}
        handleSongCreateContributorLimit={
          props.handleSongCreateContributorLimit
        }
        handleSongCreateClick={props.handleSongCreateClick}
      />;
};

export default NavBar;
