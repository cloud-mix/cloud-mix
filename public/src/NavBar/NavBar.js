import React from 'react';
import LoggedinView from './LoggedinView.js';
import LoggedoutView from './LoggedoutView.js';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import UsersSongsList from '../UsersSongsList/UsersSongsList';


const NavBar = (props) => {
  console.log(props.isLoggedIn);
  return props.isLoggedIn === false ?
    (
      <div>
        <LoggedoutView handleOauthLogin={props.handleOauthLogin}/>
      </div>
    ) :
    (
      <div>
        <LoggedinView handleOauthLogout={props.handleOauthLogout}/>
      </div>
    );
};

export default NavBar;
