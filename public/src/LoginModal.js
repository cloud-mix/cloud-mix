import React from "react";
import { Button, Modal, NavItem } from "react-materialize";

class LoginModal extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
    <Modal header="Login" fixedFooter trigger={<NavItem>Login</NavItem>}>
      <input
        type="text"
        placeholder="Username"
        onChange={e => this.props.handleUsernameInputLogin(e.target.value)}
      />
      <br />
      {/*{this.props.validUsername === false
        ? <p>Username must be at least 6 characters long</p>
        : <div />}*/}
      <input
        type="password"
        placeholder="Password"
        onChange={e => this.props.handleUserCredentialsLogin(e.target.value)}
      />

      {/*{this.props.validPassword === false
        ? <p>Password must be at least 6 characters long</p>
        : <div />}*/}

      <Button
        waves="light"
        modal="close"
        onClick={e => {
          this.props.handleLoginClick(e);
        }}
      >
        Login
      </Button> <br /><br />
      <Button
        waves="light"
        modal="close"
        onClick={e => {
          this.props.handleSignupClick(e);
        }}
      >
        Register
      </Button>
    </Modal>);
  }
}

export default LoginModal;
