import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DraggableWrapper from '../draggableWrapper.jsx';
import * as PlaylistActions from '../actions/playlist.js';

//This app passes in redux data to child components
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
//grabs playlist props from playlist reducer (will need to add on this as more reducers are added)
function mapStateToProps(state) {
  return {
    playlist: state.playlist
  };
}
//grabs all actions from playlistActions (will need to add action files as app grows)
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PlaylistActions, dispatch)
  }
}
//connects app to actions and reducers
export default connect(mapStateToProps, mapDispatchToProps)(App);
