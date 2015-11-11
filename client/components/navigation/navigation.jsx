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
    const { playlist, actions } = this.props;

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
        </div>
          <SidebarDrag playlist={playlist} actions={actions} sidebarOpen={this.state.sidebarOpen} toggleSidebar={this.toggleSidebar}/>
      </div>
    );
  }
};
