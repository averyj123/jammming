import React from 'react';
import './Tracklist.css';
import {Track} from '../Track/Track';

  export class Tracklist extends React.Component {
    render(){
      //return (this.props.results.map((track) =>  (<Track isRemoval = {this.props.isRemoval} track = {track} key = {track.id} id = {track.id} name = {track.name} artist = {track.artist} album = {track.album} onAdd = {this.props.onAdd}/>)))
      return this.props.results.map(obj => <h1>{obj.isRemoval}</h1>)
    }
}