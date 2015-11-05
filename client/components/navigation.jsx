import React from 'react';
import Sidebar from 'react-sidebar';
 
const Navigation = React.createClass({
  getInitialState: function() {
      return {sidebarOpen: false};
    },
    onSetSidebarOpen: function() {
      if(this.state.sidebarOpen === true) {
          this.setState({sidebarOpen: false});
        } else {
          this.setState({sidebarOpen: true});
        }
    },
  render: function() {
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
});

export default Navigation;
