import React from "react";
import {Route} from 'react-router-dom';
import LoginModal from "../LoginModal";
import { SideNav, Navbar, NavItem } from "react-materialize";
import {Link} from 'react-router-dom';
import CreateSongModal from '../CreateSongModal';

const LoggedinView = props => (
  <div>
    <Navbar className='navBar'>
      <div className="title">
        <img src="../../images/logo_title.png"/>
      </div>

      <Route exact path="/" render={() => (
        <NavItem>
          <Link to="/" onClick={() => props.handleLogout()}>
            Logout
          </Link>
        </NavItem>
      )}/>

      <Route exact path="/" render={() => (
        <CreateSongModal
          handleSongCreateTitleInput={props.handleSongCreateTitleInput}
          handleSongCreateGenreInput={props.handleSongCreateGenreInput}
          handleSongCreateContributorLimit={props.handleSongCreateContributorLimit}
          handleSongCreateClick={props.handleSongCreateClick}
        />
      )}/>

      <Route exact path="/" render={() => (
        <NavItem>
          {props.username}
        </NavItem>
      )}/>

    </Navbar>
  </div>
);

export default LoggedinView;
