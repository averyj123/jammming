import React from 'react';
import './Tracklist.css';

export class Tracklist extends React.Component {
  constructor(props) {
    super(props);
    this.reptiles= ['alligator', 'snake', 'lizard'];
  }
  render() {
    const reptiles=this.props.reptiles;
    return  (
    <div>
      <h1>{reptiles}</h1>
    <ol>
      { this.reptiles.map(reptile => (
        <li key={reptile}>{reptile}</li>
      ))}
    </ol>
    </div>
  );}
  /*
  render(){
    return (
    <div className="TrackList">
     {this.props.tracks.map( (track) => {
      <h1>{track}</h1>
        //return <h1 key = {track.id}>{track}</h1>;
      }
      )}
   </div>
    )
  }*/
}
