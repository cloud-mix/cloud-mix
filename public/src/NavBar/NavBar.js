import React from 'react';
import LoggedinView from './LoggedinView.js';
import LoggedoutView from './LoggedoutView.js';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import UsersSongsList from '../UsersSongsList/UsersSongsList';


const NavBar = (props) => {
  return props.isLoggedIn === false ?
    (
      <div>
        <LoggedoutView
        handleLoginClick={props.handleLoginClick}
        handleSignupClick={props.handleSignupClick}
        handleUsernameInputLogin={props.handleUsernameInputLogin}
        handleUserCredentialsLogin={props.handleUserCredentialsLogin}
        handleUsernameInputSignup={props.handleUsernameInputSignup}
        handleUserCredentialsSignup={props.handleUserCredentialsSignup}
        logInUrl={props.logInUrl}
        />
      </div>
    ) :
    (
      <div>
        <LoggedinView
        handleLogout={props.handleLogout}
        />
      </div>
    );
};

export default NavBar;
