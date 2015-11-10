import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/navigation.jsx';
import Audio from './components/audioPlayer/audio.jsx';
import PlaylistContainer from './components/playlist/playlistContainer.jsx';
import PlaylistItem from './components/playlist/playlistItem.jsx';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
 
class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="ui center aligned grid">
          <Audio />
          <PlaylistContainer />
          <div className="eight wide column">
            <PlaylistItem />
          </div>
        </div>
      </div>
    )
  }
};
 

export default DragDropContext(HTML5Backend)(App);
