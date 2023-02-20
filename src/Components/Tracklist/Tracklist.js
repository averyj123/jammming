import React from 'react';
import './Tracklist.css';

  export class Tracklist extends React.Component {
    render(){
      return(
        <div className ="TrackList">
          {this.props.results.map( (track) => {
            return (
              <div>
                <h1>name: {track.name}</h1>
                <p>artist:{track.artist}</p>
                <p>album: {track.album}</p>
                <p>id: {track.id}</p>
              </div>)
          })}
        </div>
      )
    }
  }