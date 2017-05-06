import React from "react";
import LoggedinView from "./LoggedinView.js";
import LoggedoutView from "./LoggedoutView.js";
import UsersSongsList from "../UsersSongsList/UsersSongsList";

const NavBar = props => {
  return props.isLoggedIn === false
    ? <LoggedoutView
        validUsername={props.validUsername}
        validPassword={props.validPassword}
        modalStatus={props.modalStatus}
        handleLoginClick={props.handleLoginClick}
        handleSignupClick={props.handleSignupClick}
        handleUsernameInputLogin={props.handleUsernameInputLogin}
        handleUserCredentialsLogin={props.handleUserCredentialsLogin}
        logInUrl={props.logInUrl}
      />
    : <LoggedinView
        handleLogout={props.handleLogout}
        username={props.username}
        handleSongCreate={props.handleSongCreate}
      />;
};

export default NavBar;
