import React from "react";
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from "react-bootstrap";

const LoggedinView = (props) => (
  <div>
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Cloudmix</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullLeft>
          <div className="openSongCreateModalBtn">
            <button onClick={(e) => props.showSongCreatePage(e)}>Create Song</button>
          </div>
        </Nav>
        <Nav pullRight>
          <div className="oauthbtn"><a href="/" onClick={() => props.handleLogout()}>Logout</a></div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default LoggedinView;
