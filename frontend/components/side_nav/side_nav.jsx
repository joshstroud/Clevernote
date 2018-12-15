import React, { Component } from "react";
import SideNavNotebooKIndex from "./side_nav_notebook_index";
import { matchPath } from "react-router";
import UserDropdownContainer from "../ui_elements/user_dropdown_container";
import { getUsernameFromUser } from "../../util/user_util";

class SideNav extends Component {
  constructor(props) {
    super(props);

    const username = getUsernameFromUser(this.props.currentUser);

    const selectedCategory = this.findSelectedCategory();

    this.state = {
      username,
      selectedCategory
    };

    this.createNewNote = this.createNewNote.bind(this);
    this.openUserDropdown = this.openUserDropdown.bind(this);
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

  createNewNote(e) {
    const blankNote = {
      title: "Untitled",
      body: "",
      author_id: this.props.currentUser.id,
      notebook_id: 1
      // fix this hard coding when I add notebooks
    };
    const that = this;
    this.props.createNote(blankNote).then(res => {
      that.props.history.push(`${that.props.path}/${res.note.id}`);
    });
  }

  openUserDropdown(e) {
    this.props.openDropdown("side-nav-user");
  }

  render() {
    return (
      <section className="side-nav-wrapper">
        <div className="side-nav-user-row" onClick={this.openUserDropdown}>
          <div className="side-nav-user">{this.state.username} ▼</div>
        </div>
        <UserDropdownContainer />

        <div
          className="side-nav-create-button-row"
          onClick={this.createNewNote}
        >
          <div className="side-nav-create-button">+ New Note</div>
        </div>
        <div className={this.setSelected(null)}>Shortcuts</div>
        <div className={this.setSelected("All Notes")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class=""
          >
            <path
              fill="#ccc"
              id="34a"
              d="M12 4c.177 0 .323.092.449.21.126.116.241.267.358.441.23.35.458.799.68 1.26.222.461.438.934.633 1.312.196.38.396.67.466.723.07.052.397.163.803.24.405.077.9.147 1.389.225.488.078.966.165 1.355.286.193.06.364.128.508.218.145.09.277.207.333.388.056.181.015.359-.052.521a2.37 2.37 0 0 1-.29.492c-.247.337-.586.703-.936 1.066-.351.364-.714.724-.998 1.035-.284.31-.487.604-.513.685-.025.081-.026.441.03.868.054.426.146.94.226 1.45.079.51.148 1.013.157 1.438.005.213-.004.405-.042.578-.037.173-.105.34-.25.45-.144.11-.312.124-.48.108a2.142 2.142 0 0 1-.534-.135c-.382-.14-.819-.365-1.257-.602-.439-.237-.879-.485-1.25-.672-.371-.187-.698-.3-.786-.3-.089 0-.416.113-.787.3-.37.187-.81.436-1.25.672-.438.237-.874.461-1.256.602-.191.07-.368.12-.534.135-.168.016-.336.003-.48-.107-.146-.11-.213-.278-.25-.452a2.505 2.505 0 0 1-.042-.578c.01-.425.078-.929.157-1.439.08-.51.171-1.023.227-1.45.055-.426.054-.786.029-.867-.025-.08-.228-.374-.512-.685-.284-.311-.647-.671-.998-1.034-.352-.364-.69-.73-.935-1.067a2.404 2.404 0 0 1-.29-.493c-.067-.162-.108-.34-.05-.52.055-.182.186-.299.33-.389.145-.09.316-.158.51-.219.388-.121.867-.208 1.355-.286.488-.078.983-.148 1.388-.224.406-.077.734-.189.804-.241.069-.053.27-.343.466-.722.194-.379.411-.851.633-1.313.222-.46.45-.91.68-1.259.115-.174.23-.325.357-.441.126-.116.272-.208.45-.208z"
            />
          </svg>
          All Notes
        </div>
        <div className={this.setSelected("Notebooks")}>Notebooks</div>
        <div className={this.setSelected(null)}>Shared with Me</div>
        <div className={this.setSelected("Tags")}>Tags</div>
        <div className={this.setSelected(null)}>Trash</div>
      </section>
    );
  }
}

export default SideNav;
