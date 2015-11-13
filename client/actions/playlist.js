export const ADD_TO_PLAYLIST = 'ADD_TO_PLAYLIST';
export const REMOVE_FROM_PLAYLIST = 'REMOVE_FROM_PLAYLIST';
//two main actions for adding/removing audio from playlist store
export function addToPlaylist(audioUrl) {
  return {
    type: ADD_TO_PLAYLIST,
    audioUrl
  };
}

export function removeFromPlaylist(audioUrl) {
  return {
    type: REMOVE_FROM_PLAYLIST,
    audioUrl
  };
}
