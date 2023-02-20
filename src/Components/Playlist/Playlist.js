import React from 'react';
import './Playlist.css';
import {Tracklist} from '../Tracklist/Tracklist.js';

export class Playlist extends React.Component {
  render(){
    return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'}/>
      <h1>tracklist will go here</h1>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
   </div>
    )
  }
}
