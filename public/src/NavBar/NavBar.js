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
        <LoggedoutView />
      </div>
    ) :
    (
      <div>
        <LoggedinView />
      </div>
    )
  }
}

export default NavBar;
