import React from 'react';
import LoggedinView from './LoggedinView.js';
import LoggedoutView from './LoggedoutView.js';

const NavBar = () => (
  <div>
    <div>Rendered</div>
    <p>Main NavBar component</p>
    <LoggedinView />
    <LoggedoutView />
  </div>
);

export default NavBar;
