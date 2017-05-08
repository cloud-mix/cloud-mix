import React from "react";
import {Route} from 'react-router-dom';
import LoginModal from "../LoginModal";
import { SideNav, Navbar, NavItem } from "react-materialize";
import {Link} from 'react-router-dom';
import CreateSongModal from '../CreateSongModal';

const LoggedinView = props => (
  <div>
    <Navbar className='navBar'>

      <Link to="/"
        onClick={() => {
          if (props.wavesurfer && props.waveInput) {
            props.wavesurfer.destroy();
            props.waveInput.destroy();
          }
        }}
      >
        <div className="title">
          <img src="../../images/logo_title.png"/>
        </div>
      </Link>

      <Link to="/" onClick={() => props.handleLogout()}>
        <NavItem className="logout">
          Logout
        </NavItem>
      </Link>

      <Route exact path="/" render={() => (
        <Link to="/songs">
          <NavItem className="logout" onClick={() => props.setUserSongs(false)}>
             Find Songs
          </NavItem>
        </Link>
      )}/>


      <Route exact path="/" render={() => (
        <CreateSongModal
          handleSongCreate={props.handleSongCreate}
        />
      )}/>


      <Route exact path="/" render={() => (
        <Link to="/songs">
        <NavItem onClick={() => props.setUserSongs(true)}>
          {props.username}
        </NavItem>
        </Link>
      )}/>

    </Navbar>
  </div>
);

export default LoggedinView;
