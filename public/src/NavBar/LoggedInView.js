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
        <NavItem>
          <Link to="/" onClick={() => props.handleLogout()}>
            Logout
          </Link>
        </NavItem>
 

      <NavItem>
      <Link to="/songs">
        <div className="searchSongs"
          onClick={() => {
            props.setSongTitle(props.song.title);
            props.setGenre(props.song.genre);
          }}
        >Find Songs</div>
      </Link>
      </NavItem>
      
      <Route exact path="/" render={() => (
        <CreateSongModal
          handleSongCreate={props.handleSongCreate}
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
