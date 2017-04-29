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
        <p>In The App Component</p>
        <NavBar />
        <SongList />
        <JamView />
      </div>
    );
  }
};


export default App;
