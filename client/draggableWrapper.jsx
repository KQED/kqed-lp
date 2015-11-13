import App from './App.jsx';
import ReactDOM from 'react-dom';
import React from 'react';

//this wrapper is needed to enable draggable on app
export default class DraggableWrapper extends React.Component {
  constructor(props, context) {
     super(props, context)
   }
  render() {
    //playlist data and actions come from redux, will be passed down to child components
    const { playlist, actions } = this.props;

    return <App playlist={playlist} actions={actions} />
  }
}
