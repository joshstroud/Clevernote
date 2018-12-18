import { getUsernameFromUser } from "../../../util/user_util";
import React from "react";

class NotebookActionsDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.deleteNotebook = this.deleteNotebook.bind(this);
    this.renameNotebook = this.renameNotebook.bind(this);
  }

  renameNotebook(e) {
    console.log("Rename notebook action");
    this.props.closeUIElements();
    this.props.openModal("rename-notebook");
  }

  deleteNotebook(e) {
    console.log("Delete notebook action");
    this.props.closeUIElements();
    this.props.deleteNotebook(this.props.notebook.id);
  }

  render() {
    if (
      this.props.dropdown === "notebook-index-actions" &&
      this.props.notebook.id === this.props.selectedComponentId
    ) {
      return (
        <div className="dropdown-background-relative">
          <div
            className="dropdown-menu dropdown-relative-position"
            onClick={e => e.stopPropagation()}
            tabIndex="0"
            onBlur={this.props.closeUIElements}
            ref={input => input && input.focus()}
          >
            <ul>
              <li
                className="note-show-settings-dropdown-row"
                onClick={this.renameNotebook}
              >
                Rename notebook
              </li>
              <li
                className="note-show-settings-dropdown-row"
                onClick={this.deleteNotebook}
              >
                Delete notebook
              </li>
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default NotebookActionsDropdown;
