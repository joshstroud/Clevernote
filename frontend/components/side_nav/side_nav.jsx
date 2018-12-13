import React, { Component } from "react";
import SideNavNotebooKIndex from "./side_nav_notebook_index";

class SideNav extends Component {
  render() {
    return (
      <section className="side-nav-wrapper">
        <div className="side-nav-user-row">
          <div className="side-nav-user">Demo User ▼</div>
        </div>
        <div className="side-nav-create-button-row">
          <div className="side-nav-create-button"> + New Note</div>
        </div>
        <div className="side-nav-row">Shortcuts</div>
        <div className="side-nav-row">All Notes</div>
        <div className="side-nav-row">Notebooks</div>
        <div className="side-nav-row">Shared with Me</div>
        <div className="side-nav-row">Tags</div>
        <div className="side-nav-row">Trash</div>
      </section>
    );
  }
}

export default SideNav;
