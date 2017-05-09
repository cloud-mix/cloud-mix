import blobUtil from 'blob-util';


// converts the binary strings into urls blob
// used on get requests before data is set to state
  // songs: array of songs objects received from DB
const convertToUrls = (songs) => {
  songs.forEach(song => {
    song.url.forEach((url, i) => {
      blobUtil.base64StringToBlob(url)
        .then(blob => {
          song.url[i] = window.URL.createObjectURL(blob);
        });
    });
  });
}

export default convertToUrls;