import React from "react";
import { Button, Modal, NavItem } from "react-materialize";

const CreateSongModal = props => (
  <Modal
    header="Create a song"
    fixedFooter
    trigger={<NavItem>New Jam Session</NavItem>}
  >
    <input
      type="text"
      placeholder="Song Name"
      onChange={e => props.handleUsernameInputLogin(e.target.value)}
    />
    <br />
    <input
      type="text"
      placeholder="Genre"
      onChange={e => props.handleUserCredentialsLogin(e.target.value)}
    />
    <Dropdown trigger={<Button>Maximum number of contributors</Button>}>
      <NavItem>One</NavItem>
      <NavItem>Two</NavItem>
      <NavItem>Three</NavItem>
      <NavItem>Four</NavItem>
      <NavItem>Five</NavItem>
      <NavItem>Six</NavItem>
      <NavItem>Seven</NavItem>
      <NavItem>Eight</NavItem>
      <NavItem>Nine</NavItem>
      <NavItem>Ten</NavItem>
    </Dropdown>

    <Button waves="light" onClick={e => props.handleSignupClick(e)}>
      Create Jam Session
    </Button>

  </Modal>
);

export default CreateSongModal;
