export const ADD_TO_PLAYLIST = 'ADD_TO_PLAYLIST';
export const REMOVE_FROM_PLAYLIST = 'REMOVE_FROM_PLAYLIST';

export function addToPlaylist(audio) {
  return {
    type: ADD_TO_PLAYLIST,
    audio
  }
}

export function removeFromPlaylist(audio) {
  return {
    type: REMOVE_FROM_PLAYLIST,
    audio
  }
}
