import React from "react";
// import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from "react-bootstrap";
import LoginModal from "../LoginModal";
import { SideNav, Navbar, NavItem } from "react-materialize";
import CreateSongModal from '../CreateSongModal';

const LoggedinView = props => (
  <div>
    <Navbar brand='Cloudmix' className='navBar' right>
       <CreateSongModal />
       <NavItem>
        <a href="/" onClick={() => props.handleLogout()}>Logout</a>
       </NavItem>
       
       

    </Navbar>
  </div>
);

export default LoggedinView;
