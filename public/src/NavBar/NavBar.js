import React from "react";
import LoggedinView from "./LoggedinView.js";
import LoggedoutView from "./LoggedoutView.js";
import { Navbar, Nav, NavItem } from "react-bootstrap";
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
        handleSongCreateTitleInput={props.handleSongCreateTitleInput}
        handleSongCreateGenreInput={props.handleSongCreateGenreInput}
        handleSongCreateContributorLimit={props.handleSongCreateContributorLimit}
        handleSongCreateClick={props.handleSongCreateClick}
      />;
};

export default NavBar;
