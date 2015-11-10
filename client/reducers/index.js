import { combineReducers } from 'redux';
import playlist from './playlistReducer';

const rootReducer = combineReducers({
  playlist
});

export default rootReducer;
