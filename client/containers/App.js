import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Playlist from '../components/playlist/playlistContainer.js';
import * as PlaylistActions from '../actions/playlist.js';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlaylistActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
