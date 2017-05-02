import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import UsersSongsListEntry from "./UsersSongsListEntry";

class UsersSongsList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <p>In the UsersSongsList Component</p>
      </div>
    );
  }
}

export default UsersSongsList;
