import './App.css';
import React from 'react';
import {Playlist} from '../Playlist/Playlist.js';
import {SearchBar} from '../SearchBar/SearchBar.js';
import {SearchResults} from '../SearchResults/SearchResults.js';
import { getAccessToken, search } from '../../util/Spotify';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name: 'hello', artist: 'adele', album: '25', id: '62PaSfnXSMyLshYJrlTuL3'}, {name: 'all star', artist: 'smash mouth', album: 'all star smash hits', id: '22c2pt75xtnDddA5Zlm0yy'}],
      playlistName: '',
      playlistTracks: [{name: 'mr. brightside', artist: 'the killers', album: 'direct hits', id: '5zvJ6DUahHHjeknQPn7iAH'}, {name: 'toxic', artist: 'britney spears', album: 'in the zone', id: '6I9VzXrHxO9rA9A5euc8Ak'}]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    //this.search = this.search.bind(this);
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
    const trackURIs = [];
    for (const track in this.state.playlistTracks) {
      let uri = 'spotify:track:'+this.state.playlistTracks[track].id;
      trackURIs.push(uri);
    }
  }
  /*
  search(term) {
    console.log(term);
  }*/

  render(){
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
          <SearchBar onSearch = {search}/>
        <div className="App-playlist">
          <SearchResults results = {this.state.searchResults} onAdd = {this.addTrack}/>
          <Playlist name= {this.state.playlistName} tracks= {this.state.playlistTracks}  onRemove ={this.removeTrack} onNameChange= {this.updatePlaylistName} onSave = {this.savePlaylist}/>
        </div>
      </div>
    </div>
    )
  }
}