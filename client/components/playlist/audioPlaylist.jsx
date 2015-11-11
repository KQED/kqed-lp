import React from 'react';
import Audio from '../audioPlayer/audio.jsx';

export default class AudioPlaylist extends React.Component {
  constructor(props, context) {
     super(props, context);
   }
  render() {
    const { playlist, actions } = this.props;
    return (
      <div className="ui segment">
        <Audio audioUrl = {playlist.audioUrl} actions = {actions} inPlaylist = {true} />
      </div>
    )
  }
};
