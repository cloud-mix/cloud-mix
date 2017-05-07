import axios from 'axios';
import convertToUrls from './convertToUrls';

var getSongs = function (context) {
    axios.get('/recent')
      .then((songs) => {
        console.log("In the song list component getting the recent songs: ", songs);
        convertToUrls(songs.data);
        context.setState({
          completed: songs.data
        });
        context.setLoaded();
      })
      .catch((error) => {
        console.log("Couldn't get the recent songs because: ", error);
      })


    axios.get('/soon')
      .then((songs) => {
        console.log("In the song list component getting the soon to be completed songs: ", songs);
        convertToUrls(songs.data);
        context.setState({
          soon: songs.data
        });
        context.setLoaded();
      })
      .catch((error) => {
        console.log("Coudn't get the soon to be completed songs because: ", error);
      })
  }

  export default getSongs;

