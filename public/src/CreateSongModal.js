import React from "react";
import { Button, Modal, NavItem, Dropdown } from "react-materialize";
import { Link } from "react-router-dom";

const CreateSongModal = props => (
  <Modal
    header="Create a song"
    fixedFooter
    trigger={<NavItem>New Jam Session</NavItem>}
  >
    <input
      type="text"
      placeholder="Song Name"
      onChange={e => props.handleSongCreateTitleInput(e.target.value)}
    />
    <br />
    <input
      type="text"
      placeholder="Genre"
      onChange={e => props.handleSongCreateGenreInput(e.target.value)}
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

    <Link to="/jam">
      <Button
        waves="light"
        modal="close"
        onClick={() => props.handleSongCreateClick()}
      >
        Create Jam Session
      </Button>
    </Link>

  </Modal>
);

export default CreateSongModal;
