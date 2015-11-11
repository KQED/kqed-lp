import React from 'react';

export default class AddToPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      added: this.props.inPlaylist
    };
    this.addRemove = this.addRemove.bind(this);
  }
  addRemove() {
    this.setState({added: !this.state.added});
    if(!this.state.added) {
      this.props.actions.addToPlaylist(this.props.audioUrl);
    } else {
      this.props.actions.removeFromPlaylist(this.props.audioUrl);
    }
  }
  render() {
    return (
      <button className="ui button" onClick={this.addRemove}>
        <i className={!this.state.added ? "add square icon" : "minus square icon"}></i>
        {!this.state.added ? "Add To Playlist" : "Remove From Playlist"}
      </button>
      );
  }
};
