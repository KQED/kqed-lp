import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import DraggableWrapper from '../draggableWrapper.jsx';
import * as PlaylistActions from '../actions/playlist.js';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlaylistActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DraggableWrapper);
