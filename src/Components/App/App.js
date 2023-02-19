import './App.css';
import React from 'react';
import {Playlist} from '../Playlist/Playlist.js';
import {SearchBar} from '../SearchBar/SearchBar.js';
import {SearchResults} from '../SearchResults/SearchResults.js';
import {Track} from '../Track/Track.js';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchResults: [{name: 'hello', artist: 'me', album: 'whatever', id: '123'}, {name: 'hi there', artist: 'you', album: 'what', id: '456'}]}
  }
  render(){
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
          <Track/>
          <SearchBar />
        <div className="App-playlist">
          <SearchResults results = {this.state.searchResults}/>
          <Playlist />
        </div>
      </div>
    </div>
    )
  }
}


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
