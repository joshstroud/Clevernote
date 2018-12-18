import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import NotebookActionsDropdownContainer from "../ui_elements/dropdowns/notebook_actions_dropdown_container";

class NotebookIndexItem extends Component {
  constructor(props) {
    super(props);

    this.showActionsDropdown = this.showActionsDropdown.bind(this);
  }

  showActionsDropdown(e) {
    console.log("showing actions dropdown");
    this.props.openDropdown("notebook-index-actions", this.props.notebook.id);
  }

  render() {
    return (
      <div className="notebook-index-item-row">
        <span className="notebook-index-item-title-container">
          <FontAwesomeIcon
            className="notebook-index-item-caret-right"
            icon={faCaretRight}
          />
          <span className="notebook-index-item-title">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              className="notebook-index-item-notebook-icon"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4c4c4c"
                d="M16 8.33c0-.18-.22-.33-.5-.33h-4c-.28 0-.5.15-.5.33v1.34c0 .18.22.33.5.33h4c.28 0 .5-.15.5-.33zM18 6v11a2 2 0 0 1-2 2H9V4h7a2 2 0 0 1 2 2zM6 4h2v15H6z"
              />
            </svg>
            {this.props.notebook.title}
          </span>
          <span className="notebook-index-item-count">
            ({this.props.notebook.num_notes})
          </span>
        </span>

        <div className="notebook-index-item-entry notebook-index-item-created">
          -
        </div>
        <div className="notebook-index-item-entry notebook-index-item-updated">
          {this.props.notebook.time_since_update}
        </div>
        <div className="notebook-index-item-entry notebook-index-item-shared">
          Only you
        </div>
        <div className="notebook-index-item-entry notebook-index-item-actions">
          {" "}
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="note-show-options-button"
            onClick={this.showActionsDropdown}
          >
            <path d="M25 19a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          <NotebookActionsDropdownContainer notebook={this.props.notebook} />
        </div>
      </div>
    );
  }
}

export default NotebookIndexItem;
