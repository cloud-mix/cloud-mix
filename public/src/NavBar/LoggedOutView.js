import React from "react";
// import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from "react-bootstrap";
import LoginModal from "../LoginModal";
import { SideNav, Navbar, NavItem } from "react-materialize";


const LoggedoutView = props => {
  return (
    
      <Navbar brand='Cloudmix' className='navBar' right>
          <LoginModal
                handleLoginClick={props.handleLoginClick}
                handleSignupClick={props.handleSignupClick}
                handleUsernameInputLogin={props.handleUsernameInputLogin}
                handleUserCredentialsLogin={props.handleUserCredentialsLogin}
              />

      </Navbar>
      
            
    
  );
};

export default LoggedoutView;
