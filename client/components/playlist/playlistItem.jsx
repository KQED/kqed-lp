import React from 'react';
import { DragSource } from 'react-dnd';
import Audio from '../audioPlayer/audio.jsx';

const Types = {
  AUDIO: 'audio'
};

const listSource = {
  beginDrag(props) {
    // Return the data describing the dragged item
    const item = { audioUrl: props.audioUrl };
    return item;
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    // When dropped on a compatible target, do something
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class PlaylistItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
      // These props are injected by React DnD,
      // as defined by your `collect` function above:
      const { isDragging, connectDragSource } = this.props;
      const { audioUrl, actions, inPlaylist } = this.props;

      return connectDragSource(
        <div className="ui segment react-index-top">
          <Audio audioUrl = {audioUrl} actions = {actions} inPlaylist ={inPlaylist} />
        </div>
      );
    }
};

export default DragSource(Types.AUDIO, listSource, collect)(PlaylistItem);
