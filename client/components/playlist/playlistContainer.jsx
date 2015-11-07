import React from 'react';
// import { DragTest } from './dragTest.js';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
// import { Dustbin } from './playlistDustbin.js';

@DragDropContext(HTML5Backend)
export class PlaylistContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ten wide column">
        <h2>Your playlist</h2>
        <div className="ui tertiary inverted segment">
          <i className="huge add square icon"></i>
          <div className="ui items">
          </div>
        </div>
      </div>
      )
    }
};
