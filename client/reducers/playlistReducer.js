import { ADD_TO_PLAYLIST, REMOVE_FROM_PLAYLIST } from '../actions/playlist';

const initialPlaylist = [
  { audioUrl: "testUrl",
    id: 0
  }
];

export default function playlists(state = initialPlaylist, action) {
  switch (action.type) {
    case ADD_TO_PLAYLIST:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          audioUrl: action.audioUrl
        }, 
        ...state
      ];
    case REMOVE_FROM_PLAYLIST:
      return state.filter(audio =>
              audio.audioUrl !== action.audioUrl
            );
    default:
      return state
  }
}
