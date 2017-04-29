import React, { Component } from 'react';
import SongListEntry from './SongListEntry';

class SongList extends Component {
  constructor(){
    super();

    this.state = {};
  }


  render(){
    return(
      <div>
        <p>In the SongList Component</p>
        <SongListEntry />
      </div>
      );
  }
};


export default SongList;
