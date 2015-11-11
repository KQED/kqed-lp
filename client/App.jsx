import React from 'react';
import Navigation from './components/navigation/navigation.jsx';
import Audio from './components/audioPlayer/audio.jsx';
import PlaylistContainer from './components/playlist/playlistContainer.jsx';
import PlaylistItem from './components/playlist/playlistItem.jsx';

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
          <Audio audioUrl = {"https://soundcloud.com/kurtledge/birdhouse-in-your-soul-they"} actions = {actions} />
          <PlaylistContainer playlist = {playlist} actions = {actions} />
          <div className = "eight wide column">
            <PlaylistItem audioUrl = {"test2 Url"}/>
          </div>
        </div>
      </div>
    )
  }
};
 

export default DragDropContext(HTML5Backend)(App);
