import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/navigation.jsx';
 
class App extends React.Component{
  render() {
    return (
      <div>
      <Navigation />
      Other content goes here
      </div>
    )
  }
};
 
ReactDOM.render(<App />, document.getElementById('app'));
