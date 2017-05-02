import React from "react";
import { Button, Modal } from "react-materialize";

const CreateSongModal = props => (
  <Modal header="Create a song" fixedFooter trigger={<Button><p>New Jam Session</p></Button>}>
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

    <Button waves="light" onClick={e => props.handleSignupClick(e)}>Create Jam Session</Button>

  </Modal>
);

export default CreateSongModal;
