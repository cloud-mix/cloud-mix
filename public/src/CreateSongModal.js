import React from "react";
import { Button, Modal, NavItem } from "react-materialize";
import { Link } from "react-router-dom";

var title = "";
var genre = "";
var contriblimit = 2;

//modal that appears when you create a new jam

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
      <div className="maxContrib">Max. Number of Contributors:</div>
      <p className="range-field">
        <input type="range" id="test5" min="2" max="10" onChange={(e) => {contriblimit = e.target.value;
        console.log(contriblimit) }}/>
      </p>

      <Link to="/jam">
        <Button
          waves="light"
          modal="close"
          onClick={() => {
            console.log(contriblimit);
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
