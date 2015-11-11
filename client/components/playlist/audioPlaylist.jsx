import React from 'react';

export default class AudioPlaylist extends React.Component {
  constructor(props, context) {
     super(props, context);
   }
  render() {
    const { playlist, actions } = this.props;
    return (
      <div>
        {playlist[0].audioUrl}
      </div>
    )
  }
};
