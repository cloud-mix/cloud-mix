import React from "react";
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from "react-bootstrap";

const LoggedoutView = () => (
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
          <div className="oauthbtn"><a href="/auth/facebook" target="_blank">Login</a></div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default LoggedoutView;
