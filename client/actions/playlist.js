export const ADD_TO_PLAYLIST = 'ADD_TO_PLAYLIST';
export const REMOVE_FROM_PLAYLIST = 'REMOVE_FROM_PLAYLIST';

export function addToPlaylist(audioUrl) {
  return {
    type: ADD_TO_PLAYLIST,
    audioUrl
  };
}

export function removeFromPlaylist(id) {
  return {
    type: REMOVE_FROM_PLAYLIST,
    id
  };
}
