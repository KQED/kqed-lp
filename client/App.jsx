import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/navigation.jsx';
import Audio from './components/audioPlayer/audio.jsx';
import { PlaylistContainer } from './components/playlist/playlistContainer.jsx';
 
class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="ui center aligned grid">
          <Audio />
          <PlaylistContainer />
        </div>
      </div>
    )
  }
};
 
ReactDOM.render(<App />, document.getElementById('app'));
