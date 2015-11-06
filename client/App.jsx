import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/navigation.jsx';
import Audio from './components/audio.jsx';
 
class App extends React.Component{
  render() {
    return (
      <div>
        <Navigation />
        <div className="ui grid">
          <Audio />
        </div>
      </div>
    )
  }
};
 
ReactDOM.render(<App />, document.getElementById('app'));
