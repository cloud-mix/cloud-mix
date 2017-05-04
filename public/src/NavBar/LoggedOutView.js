import React from "react";
import LoginModal from "../LoginModal";
import { SideNav, Navbar, NavItem } from "react-materialize";

const LoggedoutView = props => {
  return (
    <Navbar  className="navBar">
      <div className="title">
        <img src="../../images/logo_title.png"/>
      </div>
      <LoginModal
        handleLoginClick={props.handleLoginClick}
        validUsername={props.validUsername}
        validPassword={props.validPassword}
        modalStatus={props.modalStatus}
        handleSignupClick={props.handleSignupClick}
        handleUsernameInputLogin={props.handleUsernameInputLogin}
        handleUserCredentialsLogin={props.handleUserCredentialsLogin}
      />
    </Navbar>
  );
};

export default LoggedoutView;
