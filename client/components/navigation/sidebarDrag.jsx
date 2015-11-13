import React from 'react';
import Sidebar from 'react-sidebar';
import {DropTarget} from 'react-dnd';
import Audio from '../audioPlayer/audio.jsx';

//draggable item and drop target must have same value for drag and drop to work
const Types = {
  AUDIO: 'audio'
};
//this enables droppable behavior into the sidebar
const playlistTarget = {

  drop(props, monitor, component) {

    if (monitor.didDrop()) {
      return;
    }
    
    //gets track that has been dropped into sidebar
    const item = monitor.getItem();
    
    //if dropped into sidebar, add track to the playlist in redux
    component.addToPlaylist(item.audioUrl);

    return { dragged: true };
  }
};
//these are methods to monitor the drag and drop status/behavior
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
    //iterates through all playlist tracks in redux store and adds them to sidebar
    const rows = playlist.map(playlistTrack =>
        <a key={playlistTrack.id}><Audio audioUrl = {playlistTrack.audioUrl} actions = {actions} inPlaylist = {true} /></a>
      );
    const sidebarContent = <div className={rows.length > 0 ? "item react-sidebar" : "item react-sidebar-empty"}>{rows}</div>
    //must use this special return render to make drag and drop work
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
