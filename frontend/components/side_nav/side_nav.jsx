import React, { Component } from "react";
import UserDropdownContainer from "../ui_elements/dropdowns/user_dropdown_container";
import { getUsernameFromUser } from "../../util/user_util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SideNavNotebookListItem from "./side_nav_notebook_list_item";
import { ALL_NOTES_NOTEBOOK } from "../../util/note_util";
import {
  faChevronDown,
  faCaretRight,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { findSelectedOrDefaultNotebook } from "../../util/selectors";

class SideNav extends Component {
  constructor(props) {
    super(props);

    const username = getUsernameFromUser(this.props.currentUser);

    const selectedCategory = this.findSelectedCategory();

    this.state = {
      username,
      selectedCategory,
      notebookListOpen: false
    };

    this.createNewNote = this.createNewNote.bind(this);
    this.openUserDropdown = this.openUserDropdown.bind(this);
    this.toggleNotebookList = this.toggleNotebookList.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.findSelectedCategory() !== prevState.selectedCategory) {
      this.setState({ selectedCategory: this.findSelectedCategory() });
    }
  }

  findSelectedCategory() {
    let path = this.props.history.location.pathname;

    // matchProfile = matchPath(, {
    //   path: "/app/notes/",
    //   exact: "true"
    // });
    if (/app\/notes\/(\d+)?/.test(path)) {
      return "All Notes";
    } else if (path.includes("app/notebooks")) {
      return "Notebooks";
    } else if (path.includes("app/tags")) {
      return "Tags";
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
      notebook_id: this.props.defaultCreationNotebookId
    };

    const that = this;
    this.props.createNote(blankNote).then(res => {
      if (that.props.selectedNotebookId === -1) {
        that.props.history.push(`/app/notes/${res.note.id}`);
      } else {
        that.props.history.push(
          `/app/notebooks/${this.props.selectedNotebookId}/notes/${res.note.id}`
        );
      }
    });
  }

  openUserDropdown(e) {
    this.props.openDropdown("side-nav-user");
  }

  toggleNotebookList(e) {
    e.preventDefault();
    this.setState({ notebookListOpen: !this.state.notebookListOpen });
  }

  renderNotebookCaret() {
    if (this.state.notebookListOpen) {
      return (
        <FontAwesomeIcon
          className="side-nav-caret-down"
          icon={faCaretDown}
          onClick={this.toggleNotebookList}
        />
      );
    } else {
      return (
        <FontAwesomeIcon
          className="side-nav-caret-right"
          icon={faCaretRight}
          onClick={this.toggleNotebookList}
        />
      );
    }
  }

  renderNotebookList() {
    if (
      !this.state.notebookListOpen ||
      Object.keys(this.props.notebooks).length === 0
    ) {
      return null;
    }

    const notebookItems = Object.values(this.props.notebooks).map(notebook => {
      return <SideNavNotebookListItem key={notebook.id} notebook={notebook} />;
    });

    return notebookItems;
  }

  render() {
    return (
      <section className="side-nav-wrapper">
        <div className="side-nav-user-row" onClick={this.openUserDropdown}>
          <div className="side-nav-user-avatar" />
          <div className="side-nav-user">{this.state.username}</div>
          <FontAwesomeIcon
            className="side-nav-chevron-down"
            icon={faChevronDown}
          />
        </div>
        <UserDropdownContainer />
        <div
          className="side-nav-create-button-row"
          onClick={this.createNewNote}
        >
          <div className="side-nav-create-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              className="side-nav-create-button-icon"
              data-event-off="click"
            >
              <g fill="none">
                <path d="M0 0h30v30H0z" />
                <circle cx="15" cy="15" r="14" fill="#00A82D" />
                <rect width="14" height="2" x="8" y="14" fill="#FFF" rx="1" />
                <rect width="2" height="14" x="14" y="8" fill="#FFF" rx="1" />
              </g>
            </svg>
            <div>New Note</div>
          </div>
        </div>
        <div className="side-nav-links">
          <Link to="/app/notes/">
            <div className={this.setSelected("All Notes")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ccc"
                  id="14a"
                  d="M16 16h2v-1h-2a.997.997 0 0 0-1 1v3h1v-3zM8 4h8a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1.5 4a.5.5 0 0 0 0 1h5a.5.5 0 1 0 0-1h-5zm0 3a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1h-5zm0 3a.5.5 0 1 0 0 1h3a.5.5 0 1 0 0-1h-3z"
                />
              </svg>
              <span>All Notes</span>
            </div>
          </Link>

          <div
            className={this.setSelected("Notebooks") + " side-nav-notebook-row"}
          >
            {this.renderNotebookCaret()}
            <Link to="/app/notebooks/" className="side-nav-notebook-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ccc"
                  d="M9 4h7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H9V4zM6 4h2v15H6V4zm5.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-4z"
                />
              </svg>
              <span>Notebooks</span>
            </Link>
          </div>
          {this.renderNotebookList()}
          <Link to="/app/tags/">
            <div className={this.setSelected("Tags")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ccc"
                  id="10a"
                  d="M10.265 9.005a2 2 0 1 0 3.47 0H18v9.5a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5v-9.5h4.265zM9.5 16a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1h-5zm0-2a.5.5 0 1 0 0 1h5a.5.5 0 1 0 0-1h-5zm4.235-4.995H18l-4.982-4.606a1.5 1.5 0 0 0-2.036 0L6 9.005h4.265a2 2 0 0 1 3.47 0z"
                />
              </svg>
              <span>Tags</span>
            </div>
          </Link>
        </div>
      </section>
    );
  }
}

// <!-- trash -->
{
  /* <div className={this.setSelected(null)}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="#ccc"
      id="8a"
      d="M5 7.496a.5.5 0 0 1 .5-.5L8.996 7V5.25c0-.69.305-1.25 1.008-1.25H14c.703 0 1 .556 1 1.247v1.75H18.5a.5.5 0 1 1 0 1h-13a.5.5 0 0 1-.5-.5zm5.25-2.001a.25.25 0 0 0-.25.25v1.002c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25V5.745a.25.25 0 0 0-.25-.25h-3.5zm6.205 12.567c0 .69-.57.935-1.273.935H8.818c-.703 0-1.273-.56-1.273-1.25l-.548-8.748H17l-.546 9.063z"
    />
  </svg>
  <span>Trash</span>
</div>; */
}

export default SideNav;
