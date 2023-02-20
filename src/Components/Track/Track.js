import React from 'react';
import './Track.css';

export class Track extends React.Component {
   constructor(props){
      super(props);
      this.state={isRemoval: this.props.isRemoval};
      this.addTrack = this.addTrack.bind(this);   
      this.removeTrack = this.removeTrack.bind(this);
      this.handleClick = this.handleClick.bind(this);
   }

   renderAction() {
      const text = this.state.isRemoval ? '-' : '+';
      return text;
   }

   addTrack() {
      const track = {name: this.props.name, artist: this.props.artist, album: this.props.album, id: this.props.id};
      this.props.onAdd(track);
      //this.props.onAdd({name: this.props.name, artist: this.props.artist, album: this.props.album, id: this.props.key});
   }

   removeTrack() {
      const track = {name: this.props.name, artist: this.props.artist, album: this.props.album, id: this.props.id};
      this.props.onRemove(track);
   }

   handleClick() {
      if(this.state.isRemoval) {
         this.removeTrack();
      } else {
         this.addTrack();
      }
   }

  render(){
    return (
      <div className="Track">
      <div className="Track-information">
         <h3> {this.props.name} </h3>
         <p> {this.props.artist} | {this.props.album} </p>
      </div>
         <button className="Track-action" onClick = {this.handleClick}>{this.renderAction()}</button>
      </div>
    )
  }
}
