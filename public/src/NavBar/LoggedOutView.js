import React from "react";
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from "react-bootstrap";
import LoginModal from "../LoginModal";

const LoggedoutView = props => {
  return (
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
            <LoginModal
              handleLoginClick={props.handleLoginClick}
              handleSignupClick={props.handleSignupClick}
              handleUsernameInputLogin={props.handleUsernameInputLogin}
              handleUserCredentialsLogin={props.handleUserCredentialsLogin}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default LoggedoutView;
