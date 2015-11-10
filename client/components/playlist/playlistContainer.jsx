import React from 'react';
import {DropTarget} from 'react-dnd';

const Types = {
  AUDIO: 'audio'
};

const playlistTarget = {

  // hover(props, monitor, component) {
  //   console.log('hovering');
  //   // This is fired very often and lets you perform side effects
  //   // in response to the hover. You can't handle enter and leave
  //   // here—if you need them, put monitor.isOver() into collect() so you
  //   // can just use componentWillReceiveProps() to handle enter/leave.

  //   // You can access the coordinates if you need them
  //   const clientOffset = monitor.getClientOffset();
  //   const componentRect = findDOMNode(component).getBoundingClientRect();

  //   // You can check whether we're over a nested drop target
  //   const isJustOverThisOne = monitor.isOver({ shallow: true });

  // },

  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      // If you want, you can check whether some nested
      // target already handled drop
      return;
    }

    // Obtain the dragged item
    const item = monitor.getItem();

    // You can do something with it
    // ChessActions.movePiece(item.fromPosition, props.position);

    // You can also do nothing and return a drop result,
    // which will be available as monitor.getDropResult()
    // in the drag source's endDrag() method
    return { moved: true };
  }
};

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connect.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver(),
    isOverCurrent: monitor.isOver({ shallow: true }),
    itemType: monitor.getItemType()
  };
}


class PlaylistContainer extends React.Component {
  render() {
    const { position } = this.props;
    const { isOver, connectDropTarget } = this.props;
    return connectDropTarget(
      <div className="ten wide column">
        <h2>Your playlist</h2>
        <div className={isOver ? "ui green inverted segment" : "ui tertiary inverted segment"}>
          <i className="huge add square icon"></i>
          <div className="ui items">
          </div>
        </div>
      </div>
      )
    }
};

export default DropTarget(Types.AUDIO, playlistTarget, collect)(PlaylistContainer);
