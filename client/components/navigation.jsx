import React from 'react';
import Sidebar from 'react-sidebar';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }
  toggleSidebar() {
    this.setState({sidebarOpen: !this.state.sidebarOpen});
  }
  render() {
    let sidebarContent = <a className="item">Test content</a>

    return (
      <div>
        <div className="ui top attached inverted menu">
          <div className="item react-index-top" onClick={this.toggleSidebar}>
            <i className="sidebar icon"></i>
          </div>
          <a className="ui right item react-index-top">KQED LP</a>
          <div className="ui right item react-index-top">
            <i className="user icon"></i>
            Log in
          </div>
        </div>
        <Sidebar sidebar={sidebarContent}
          open={this.state.sidebarOpen}
          onSetOpen={this.toggleSidebar}>
          <div></div>
        </Sidebar>
      </div>
    );
  }
};
