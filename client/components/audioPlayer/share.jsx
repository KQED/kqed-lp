import React from 'react';

export default class Share extends React.Component {
  constructor(props) {
    super(props);
    this.share = this.share.bind(this);
  }
  share() {
    console.log('registered');
  }
  render() {
    return (
      <button className="ui button" onClick={this.share}>
        <i className="share square icon"></i>
        Share this track
      </button>
      );
  }
};
