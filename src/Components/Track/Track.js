import React from 'react';
import './Track.css';

export class Track extends React.Component {
   constructor(props){
      super(props);
      this.state={isRemoval: false};
   }

   renderAction() {
      const text = this.state.isRemoval ? '-' : '+';
      return text;
   }
  render(){
    return (
      <div className="Track">
      <div className="Track-information">
         <h3> track name will go here </h3>
         <p> track artist will go here | track album will go here </p>
      </div>
         <button className="Track-action">{this.renderAction()}</button>
      </div>
    )
  }
}