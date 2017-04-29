import React, { Component } from 'react';
import SongList from './SongList/SongList';
import NavBar from './NavBar/NavBar';
import JamView from './Jam/JamView';

class App extends Component {
  constructor(){
    super();

    this.state = {

    };
  }



  render(){
    return(
      <div>
        <NavBar />
        <p>In The App Component</p>
        <SongList />
        <JamView />
      </div>
    );
  }
};


export default App;
