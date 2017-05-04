import React from "react";
import { Button, Modal, NavItem, Dropdown } from "react-materialize";
import { Link } from "react-router-dom";

const CreateSongModal = props => (
  <Modal
    header="Create a Jam Session"
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

    <input
    type="number"
    placeholder="Number of Contributors. Yourself Included"
    min="2"
    max="10"
    onChange={e => props.handleSongCreateContributorLimit(e.target.value)}
    />

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
