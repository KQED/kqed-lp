import React from 'react';

export default class AddToPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      added: false
    };
    this.add = this.add.bind(this);
  }
  add() {
    this.setState({added: !this.state.added});
  }
  render() {
    return (
      <button className="ui button" onClick={this.add}>
        <i className={!this.state.added ? "add square icon" : "minus square icon"}></i>
        {!this.state.added ? "Add To Playlist" : "Remove From Playlist"}
      </button>
      );
  }
};
