import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

class NotebookIndexItem extends Component {
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
              class="notebook-index-item-notebook-icon"
              viewBox="0 0 24 24"
            >
              <path
                fill="#4c4c4c"
                d="M16 8.33c0-.18-.22-.33-.5-.33h-4c-.28 0-.5.15-.5.33v1.34c0 .18.22.33.5.33h4c.28 0 .5-.15.5-.33zM18 6v11a2 2 0 0 1-2 2H9V4h7a2 2 0 0 1 2 2zM6 4h2v15H6z"
              />
            </svg>
            My Notebook
          </span>
          <span className="notebook-index-item-count">(4)</span>
        </span>

        <div className="notebook-index-item-entry notebook-index-item-created">
          -
        </div>
        <div className="notebook-index-item-entry notebook-index-item-updated">
          5 hours ago
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
            onClick={this.showSettings}
          >
            <path d="M25 19a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
        </div>
      </div>
    );
  }
}

export default NotebookIndexItem;
