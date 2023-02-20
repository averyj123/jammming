import React from 'react';
import './Tracklist.css';
import {Track} from '../Track/Track';

  export class Tracklist extends React.Component {
    render(){
      return(
          this.props.results.map ((track) => {
            return <Track isRemoval = {this.props.isRemoval} onRemove = {this.props.onRemove} track = {track} key = {track.id} id = {track.id} name = {track.name} artist = {track.artist} album = {track.album} onAdd = {this.props.onAdd}/>}
            ))
    }
}