import { ADD_TO_PLAYLIST, REMOVE_FROM_PLAYLIST } from '../actions/playlist';

export default function counter(state = 0, action) {
  switch (action.type) {
    case ADD_TO_PLAYLIST:
      return state + 1
    case REMOVE_FROM_PLAYLIST:
      return state - 1
    default:
      return state
  }
}
