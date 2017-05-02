import React from "react";
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from "react-bootstrap";
import CreateSongModal from '../CreateSongModal';
import { Button } from "react-materialize";
const LoggedinView = props => (
  <div>
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Cloudmix</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
      <Nav pullRight>
        <Button href="/" onClick={() => props.handleLogout()}>Logout</Button>
          </Nav>
        <Nav pullRight>
          <CreateSongModal />
        </Nav>
      

      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default LoggedinView;
