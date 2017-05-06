import blobUtil from 'blob-util';

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