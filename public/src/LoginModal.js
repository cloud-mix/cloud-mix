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
    {props.validUsername === false ? (
        <p>Username must be at least 6 characters long</p>
      ) :
      (
        <div></div>
      )
    }
    <input
      type="password"
      placeholder="Password"
      onChange={e => props.handleUserCredentialsLogin(e.target.value)}
    />

    {props.validPassword === false ? (
        <p>Password must be at least 6 characters long</p>
      ) :
      (
        <div></div>
      )
    }


    <Button
      waves="light"
      modal={props.modalStatus}
      onClick={e => {
        props.handleLoginClick(e);
      }}
    >
      Login
    </Button> <br /><br />
    <Button
      waves="light"
      modal={props.modalStatus}
      onClick={e => {
        props.handleSignupClick(e);
      }}
    >
      Register
    </Button>
  </Modal>
);

export default LoginModal;
