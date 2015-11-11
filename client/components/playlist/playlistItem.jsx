import React from 'react';
import { DragSource } from 'react-dnd';

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
      // Your component receives its own props as usual
      const { id } = this.props;

      // These props are injected by React DnD,
      // as defined by your `collect` function above:
      const { isDragging, connectDragSource } = this.props;

      return connectDragSource(
        <div className="ui segment react-index-top">
          This Should Be Draggable {id}
          {isDragging && ' (and I am being dragged now)'}
        </div>
      );
    }
};

export default DragSource(Types.AUDIO, listSource, collect)(PlaylistItem);
