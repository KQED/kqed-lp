import React from 'react';
import SidebarDrag from './sidebarDrag.jsx';

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

    return (
      <div>
        <div className="ui top attached inverted menu">
          <div className="item react-index-top" onClick={this.toggleSidebar}>
            <i className="sidebar icon"></i>
          </div>
          <a className="item react-index-top">KQED LP</a>
          <div className="ui right item react-index-top">
            <i className="user icon"></i>
            Log in
          </div>
          <div className="ui right item react-index-top">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
        </div>
          <SidebarDrag sidebarOpen={this.state.sidebarOpen} toggleSidebar={this.toggleSidebar}/>
      </div>
    );
  }
};
