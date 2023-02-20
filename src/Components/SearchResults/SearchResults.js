import React from 'react';
import './SearchResults.css';
import {Tracklist} from '../Tracklist/Tracklist.js';

export class SearchResults extends React.Component {
  render(){
    return (
      <div className="SearchResults">
         <h2>Results</h2>
         <Tracklist tracks = {this.props.results} reptiles={['alligator', 'snake', 'lizard']}/>
         
      </div>
    )
  }
}
