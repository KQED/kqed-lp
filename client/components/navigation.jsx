import React from 'react';
import Sidebar from 'react-sidebar';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  onSetSidebarOpen() {
        if(this.state.sidebarOpen === true) {
            this.setState({sidebarOpen: false});
          } else {
            this.setState({sidebarOpen: true});
          }
      }
    render() {
      let sidebarContent = <a className="item">Test content</a>

      return (
        <div>
          <div className="ui top attached inverted menu">
            <div className="item" onClick={this.onSetSidebarOpen}>
              <Sidebar sidebar={sidebarContent}
                open={this.state.sidebarOpen}
                onSetOpen={this.onSetSidebarOpen}>
                <i className="sidebar icon"></i>
              </Sidebar>
            </div>
            <a className="right item">KQED LP</a>
          </div>
        </div>
      );
   }
};
