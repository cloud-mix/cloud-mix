import React from "react";
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from "react-bootstrap";
import ModalView from "../ModalView";

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
            <ModalView
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
