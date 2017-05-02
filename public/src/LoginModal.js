import React from "react";
import { SideNav, Button, Modal, NavItem } from "react-materialize";

const LoginModal = props => (
  <Modal header="Login" fixedFooter trigger={<NavItem>Login</NavItem>} >
    <input
      type="text"
      placeholder="Username"
      onChange={e => props.handleUsernameInputLogin(e.target.value)}
    />
    <br />
    <input
      type="password"
      placeholder="Password"
      onChange={e => props.handleUserCredentialsLogin(e.target.value)}
    />

    <Button waves="light" onClick={e => {props.handleSignupClick(e); }}>Register</Button>
    <Button waves="light" onClick={e => {props.handleLoginClick(e); }}>
      Login
    </Button>
  </Modal>
);

export default LoginModal;
