import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ten wide column">
        <div className="ui icon input">
          <input type="text" placeholder="Search..." />
          <i className="search link icon"></i>
        </div>
      </div>
    );
  }
}
