import React from 'react';
import './SearchResults.css';
import {Tracklist} from '../Tracklist/Tracklist.js';

export class SearchResults extends React.Component {
  render(){
    //this.props.onAdd({name: 'please work', artist: 'me (please)', album: 'who cares', id: '003'})
    return (
      <div className="SearchResults">
         <h2>Results</h2>
         <Tracklist results = {this.props.results} onAdd = {this.props.onAdd} isRemoval = {false}/>
      </div>
    )
  }
}
