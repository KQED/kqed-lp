import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DraggableWrapper from '../draggableWrapper.jsx';
import * as PlaylistActions from '../actions/playlist.js';

class App extends React.Component {
  render() {
    const { playlist, actions } = this.props;
    return (
      <div>
        <DraggableWrapper playlist={playlist} actions={actions} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    playlist: state.playlist
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PlaylistActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
