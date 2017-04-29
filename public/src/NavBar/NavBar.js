import React from 'react';
import LoggedinView from './LoggedinView.js';
import LoggedoutView from './LoggedoutView.js';

const NavBar = (props) => {
  console.log(props.isLoggedIn);
  if(props){
    return (
      <LoggedinView />
    )
  } else {
    return <LoggedoutView />
  }
}
  
  



export default NavBar;
