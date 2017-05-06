import React from "react";
import { Button, Modal, NavItem } from "react-materialize";
import { Link } from "react-router-dom";

var title = "";
var genre = "";
var contriblimit = 0;

const CreateSongModal = props => {
  return (
    <Modal
      header="Create a Jam Session"
      fixedFooter
      trigger={<NavItem>New Jam Session</NavItem>}
    >
      <input
        type="text"
        placeholder="Song Name"
        onChange={e => {
          title = e.target.value}
        }
      />
      <br />
      <input
        type="text"
        placeholder="Genre"
        onChange={e => genre = e.target.value}
      />

      <input
        type="number"
        placeholder="Number of Contributors. Yourself Included"
        min="2"
        max="10"
        onChange={e =>  contriblimit = Number(e.target.value)}
      />

      <Link to="/jam">
        <Button
          waves="light"
          modal="close"
          onClick={() => {
            props.handleSongCreate(title, genre, contriblimit)}
          }
        >
          Create Jam Session
        </Button>
      </Link>

    </Modal>
  );
}

export default CreateSongModal;
