import React from 'react';
import Navigation from './components/navigation/navigation.jsx';
import PlaylistContainer from './components/playlist/playlistContainer.jsx';
import PlaylistItem from './components/playlist/playlistItem.jsx';
import SearchBar from './components/search/searchbar.jsx';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
 
class App extends React.Component {
  constructor(props, context) {
     super(props, context)
   }
  render() {
    const { playlist, actions } = this.props;
    return (
      <div>
        <Navigation playlist = {playlist} actions = {actions} />
        <div className = "ui center aligned grid">
          <PlaylistContainer playlist = {playlist} actions = {actions} />
          <SearchBar />
          <div className = "eight wide column">
            <PlaylistItem audioUrl = {"https://soundcloud.com/nightvaleradio/25-one-year-later-1"} actions = {actions} inPlaylist = {false}/>
          </div>
        </div>
      </div>
    )
  }
};
 

export default DragDropContext(HTML5Backend)(App);
