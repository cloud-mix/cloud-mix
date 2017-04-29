import React from 'react';
import LoggedinView from './LoggedinView.js';
import LoggedoutView from './LoggedoutView.js';

const NavBar = () => (
  <div>
    <LoggedinView />
    {/*<LoggedoutView />*/}
  </div>
);

export default NavBar;
