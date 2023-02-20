import './App.css';
import React from 'react';
import {Playlist} from '../Playlist/Playlist.js';
import {SearchBar} from '../SearchBar/SearchBar.js';
import {SearchResults} from '../SearchResults/SearchResults.js';
import {Track} from '../Track/Track.js';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name: 'hello', artist: 'me', album: 'whatever', id: '123'}, {name: 'hi there', artist: 'you', album: 'what', id: '456'}],
      playlistName: 'funnyfun fun playlist',
      playlistTracks: [{name: 'my playlist 1', artist: 'bobby bob', album: 'bobtastic', id: '001'}, {name: 'my playlist 2', artist: 'tim', album: 'timazing', id: '002'}]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
  return;
  }
  this.setState({playlistTracks: this.state.playlistTracks.concat(track)});
  }

  removeTrack(track) {
    this.setState({playlistTracks: this.state.playlistTracks.filter(playTrack =>{
      return track.id !== playTrack.id;
    })})
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    const trackURIs = []
  }

  render(){
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
          <Track/>
          <SearchBar />
        <div className="App-playlist">
          <SearchResults results = {this.state.searchResults} onAdd = {this.addTrack}/>
          <Playlist name= {this.state.playlistName} tracks= {this.state.playlistTracks}  onRemove ={this.removeTrack} onNameChange= {this.updatePlaylistName}/>
        </div>
      </div>
    </div>
    )
  }
}