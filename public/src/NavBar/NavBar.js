import React from 'react';
import LoggedinView from './LoggedinView.js';
import LoggedoutView from './LoggedoutView.js';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import UsersSongsList from '../UsersSongsList/UsersSongsList';

const NavBar = (props) => (
  <div>
    <div>Rendered</div>
    <p>Main NavBar component</p>
    <LoggedinView />
    <LoggedoutView />
  </div>
);

export default NavBar;
