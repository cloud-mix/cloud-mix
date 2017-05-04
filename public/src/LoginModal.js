import React from "react";
import { Button, Modal, NavItem } from "react-materialize";

const LoginModal = props => (
  <Modal header="Login" fixedFooter trigger={<NavItem>Login</NavItem>}>
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
    <Button
      waves="light"
      modal="close"
      onClick={e => {
        props.handleLoginClick(e);
      }}
    >
      Login
    </Button> <br /><br />
    <Button
      waves="light"
      modal="close"
      onClick={e => {
        props.handleSignupClick(e);
      }}
    >
      Register
    </Button>
  </Modal>
);

export default LoginModal;
