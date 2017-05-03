import React from "react";
// import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from "react-bootstrap";
import LoginModal from "../LoginModal";
import { SideNav, Navbar, NavItem } from "react-materialize";
import {Link} from 'react-router-dom';
import CreateSongModal from '../CreateSongModal';

const LoggedinView = props => (
  <div>
    <Navbar brand='Cloudmix' className='navBar' right>
      <CreateSongModal
        handleSongCreateTitleInput={props.handleSongCreateTitleInput}
        handleSongCreateGenreInput={props.handleSongCreateGenreInput}
        handleSongCreateContributorLimit={props.handleSongCreateContributorLimit}
        handleSongCreateClick={props.handleSongCreateClick}
      />
      <NavItem>
        <Link to="/"  onClick={() => props.handleLogout()}>
         Logout
        </Link>
      </NavItem>
    </Navbar>
  </div>
);

export default LoggedinView;
