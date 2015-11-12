import React from 'react';
import Sidebar from 'react-sidebar';
import {DropTarget} from 'react-dnd';
import Audio from '../audioPlayer/audio.jsx';

const Types = {
  AUDIO: 'audio'
};

const playlistTarget = {

  drop(props, monitor, component) {
    console.log('dropped');
    if (monitor.didDrop()) {
      return;
    }

    const item = monitor.getItem();

    component.addToPlaylist(item.audioUrl);

    return { dragged: true };
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    itemType: monitor.getItemType()
  };
}

class SidebarDrag extends React.Component { 
  constructor(props) {
    super(props);
    this.addToPlaylist = this.addToPlaylist.bind(this);
  }
  addToPlaylist(item){
   this.props.actions.addToPlaylist(item);
  }
  render() {
    const { playlist, actions, isOver, connectDropTarget } = this.props;
    const rows = playlist.map(playlistTrack =>
        <a key={playlistTrack.id}><Audio audioUrl = {playlistTrack.audioUrl} actions = {actions} inPlaylist = {true} /></a>
      );
    const sidebarContent = <div className={rows.length > 0 ? "item react-sidebar" : "item react-sidebar-empty"}>{rows}</div>

    return connectDropTarget(
      <div>
        <Sidebar sidebar={sidebarContent}
          open={this.props.sidebarOpen}
          onSetOpen={this.props.toggleSidebar}>
          <div></div>
        </Sidebar>
      </div>
    )
  }
};

export default DropTarget(Types.AUDIO, playlistTarget, collect)(SidebarDrag);
