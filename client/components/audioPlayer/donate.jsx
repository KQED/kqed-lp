import React from 'react';

export default class Donate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      donated: false
    };
    this.donate = this.donate.bind(this);
  }
  donate() {
    this.setState({donated: true});
  }
  render() {
    return (
      <button className="ui button" onClick={this.donate}>
        <i className={!this.state.donated ? "dollar icon" : "heart icon"}></i>
        {!this.state.donated ? "Donate" : "Thank You!"}
      </button>

      );
  }
};
