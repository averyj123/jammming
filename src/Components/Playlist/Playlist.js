import React from 'react';
import './Playlist.css';
import {Tracklist} from '../Tracklist/Tracklist.js';

export class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event){
    this.props.onNameChange(event.target.value);
  }

  render(){
    return (
    <div className="Playlist">
      <h1>{this.props.name}</h1>
      <input defaultValue={'New Playlist'} onChange = {this.handleNameChange}/>
      <Tracklist results ={this.props.tracks} isRemoval ={true} onRemove = {this.props.onRemove}/>
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
   </div>
    )
  }
}
