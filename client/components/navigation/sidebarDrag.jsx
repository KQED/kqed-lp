import React from 'react';
import Sidebar from 'react-sidebar';
import {DropTarget} from 'react-dnd';

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
    const { playlist, actions } = this.props;
    const rows = playlist.map(playlistAudio =>
        <a key={playlistAudio.id}>{playlistAudio.audioUrl}</a>
      );
    const sidebarContent = <div className="item react-sidebar">{rows}</div>
    const { position } = this.props;
    const { isOver, connectDropTarget } = this.props;

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
