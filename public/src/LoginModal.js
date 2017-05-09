import React from "react";
import { Button, Modal, NavItem } from "react-materialize";

//modal that appears when Login is clicked. Created in logged out view
class LoginModal extends React.Component {
  constructor() {
    super();
  }
  render() {
    return(
    <Modal header="Login" fixedFooter trigger={<NavItem>Login</NavItem>}>
      <input
        className="loginInput"
        type="text"
        placeholder="Username"
        onChange={e => this.props.handleUsernameInputLogin(e.target.value)}
      />
      <br />

      <input
        className="loginInput"
        type="password"
        placeholder="Password"
        onChange={e => this.props.handleUserCredentialsLogin(e.target.value)}
      />

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
