import React from 'react';
import './Playlist.css';
import {Tracklist} from '../Tracklist/Tracklist.js';
import Spotify from '../../util/Spotify.js';

export class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event){
    this.props.onNameChange(event.target.value);
  }

  render(){
    Spotify.onSearch('hello');
    return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'} onChange = {this.handleNameChange}/>
      <Tracklist results ={this.props.tracks} isRemoval ={true} onRemove = {this.props.onRemove}/>
      <button className="Playlist-save" onClick ={Spotify.getAccessToken}>SAVE TO SPOTIFY</button>
   </div>
    )
  }
}
