import React from 'react';
import './SearchResults.css';
import {Tracklist} from '../Tracklist/Tracklist.js';

export class SearchResults extends React.Component {
  render(){
    console.log(this.props.results);
    return (
      <div className="SearchResults">
         <h2>Results</h2>
         <Tracklist results = {this.props.results} onAdd = {this.props.onAdd} isRemoval = {false}/>
      </div>
    )
  }
}
