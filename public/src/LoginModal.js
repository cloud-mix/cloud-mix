import React from "react";
import { Button, Modal } from "react-materialize";

const LoginModal = props => (
  <Modal header="Login" fixedFooter trigger={<Button><p>Login</p></Button>}>
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

    <Button waves="light" onClick={e => props.handleSignupClick(e)}>Register</Button>
    <Button waves="light" onClick={e => { props.handleLoginClick(e); this.close()}}>
      Login
    </Button>
  </Modal>
);

export default LoginModal;
