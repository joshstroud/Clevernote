import React, { Component } from "react";
import SideNavNotebooKIndex from "./side_nav_notebook_index";
import { matchPath } from "react-router";

class SideNav extends Component {
  constructor(props) {
    super(props);

    const username = this.props.currentUserEmail.substring(
      0,
      this.props.currentUserEmail.indexOf("@")
    );

    const selectedCategory = this.findSelectedCategory();

    this.state = {
      username,
      selectedCategory
    };
  }

  findSelectedCategory() {
    let path = this.props.history.location.pathname;

    // matchProfile = matchPath(, {
    //   path: "/app/notes/",
    //   exact: "true"
    // });

    if (path === "/app/notes") {
      return "All Notes";
    }
  }

  setSelected(category) {
    let className = "side-nav-row";
    if (this.state.selectedCategory === category) {
      className += " side-nav-category-selected";
    }
    return className;
  }

  render() {
    return (
      <section className="side-nav-wrapper">
        <div className="side-nav-user-row">
          <div className="side-nav-user">{this.state.username} ▼</div>
        </div>
        <div className="side-nav-create-button-row">
          <div className="side-nav-create-button"> + New Note</div>
        </div>
        <div className={this.setSelected(null)}>Shortcuts</div>
        <div className={this.setSelected("All Notes")}>All Notes</div>
        <div className={this.setSelected("Notebooks")}>Notebooks</div>
        <div className={this.setSelected(null)}>Shared with Me</div>
        <div className={this.setSelected("Tags")}>Tags</div>
        <div className={this.setSelected(null)}>Trash</div>
      </section>
    );
  }
}

export default SideNav;
