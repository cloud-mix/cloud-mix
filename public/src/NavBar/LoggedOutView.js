import React from "react";
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from "react-bootstrap";

const LoggedoutView = (props) => (
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
          <div className="loginbtn">
            <input type="text" placeholder="username" onChange={(e) => props.handleUsernameInputLogin(e.target.value)} />
            <br/>
            <input type="text" placeholder="password" onChange={(e) => props.handleUserCredentialsLogin(e.target.value)} />
            <br/>
            <a href={props.loginUrl} onClick={() => props.handleLoginClick()}>Login</a>
          </div>
          <div className="signupbtn">
            <input type="text" placeholder="username" onChange={(e) => props.handleUsernameInputSignup(e.target.value)} />
            <br/>
            <input type="text" placeholder="password" onChange={(e) => props.handleUserCredentialsSignup(e.target.value)} />
            <br/>
            <a href="#" onClick={() => props.handleSignupClick()}>Signup</a>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default LoggedoutView;
