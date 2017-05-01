import React from "react";

const NewRecording = function(props){
  return props.userWouldLikeToCreateSong === true ? (
    <div>
      <p>New Song inside New Recording Component</p>
      <input
      type="text"
      placeholder="title"
      onChange={(e) => props.getTitle(e.target.value)}/>
      <input
      type="text"
      placeholder="genre"
      onChange={(e) => props.getGenre(e.target.value)}
      />
      <input
      type="number"
      name="contributorLimit"
      min="1"
      max="9"
      onChange={(e) => props.getContributorLimit(e.target.value)}
      />
      <input type="submit" value="Create Song"/>
    </div>
  ) :
  (
    <div>
      <p>New Contribution inside New Recording Component</p>
    </div>
  );
}

export default NewRecording;
