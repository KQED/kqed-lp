import React from 'react';
import { DropTarget } from 'react-dnd';
import AudioPlaylist from './audioPlaylist';

const Types = {
  AUDIO: 'audio'
};

const playlistTarget = {

  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      // If you want, you can check whether some nested
      // target already handled drop
      return;
    }

    // Obtain the dragged item
    const item = monitor.getItem();
    
    component.addToPlaylist(item.audioUrl);
    // You can also do nothing and return a drop result,
    // which will be available as monitor.getDropResult()
    // in the drag source's endDrag() method
    return { dropped: true };
  }
};

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver(),
    hasDropped: monitor.getDropResult(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    itemType: monitor.getItemType()
  };
}


class PlaylistContainer extends React.Component {
  constructor(props, context) {
     super(props, context);
     this.addToPlaylist = this.addToPlaylist.bind(this);
   }
   addToPlaylist(item){
    this.props.actions.addToPlaylist(item);
   }
  render() {
    const { isOver, connectDropTarget, hasDropped, playlist, actions, inPlaylist } = this.props;

    return connectDropTarget(
      <div className = "ten wide column react-playlist-padding">
        <h2>Your playlist</h2>
        <div className = {isOver ? "ui green inverted segment" : "ui tertiary inverted segment"}>
          <div className = "ui items">
            {playlist.map(playlistTrack =>
              <AudioPlaylist playlist = {playlistTrack} key = {playlistTrack.id} actions = {actions} />
              )}
          </div>
          <i className = "huge add square icon"></i>
        </div>
      </div>
      )
    }
};

export default DropTarget(Types.AUDIO, playlistTarget, collect)(PlaylistContainer);
