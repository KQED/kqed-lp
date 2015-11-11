import App from './App.jsx';
import ReactDOM from 'react-dom';
import React from 'react';

export default class DraggableWrapper extends React.Component {
  constructor(props, context) {
     super(props, context)
   }
  render() {
    const { playlist, actions } = this.props;

    return <App playlist={playlist} actions={actions} />
  }
}
