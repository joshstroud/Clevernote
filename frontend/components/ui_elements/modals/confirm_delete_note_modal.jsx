import { getUsernameFromUser } from "../../../util/user_util";
import React from "react";

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.deleteNote = this.deleteNote.bind(this);
  }

  deleteNote(e) {
    const that = this;
    this.props
      .deleteNote(this.props.selectedNoteId)
      .then(action => that.props.history.push(that.props.path));
    this.props.closeUIElements();
  }

  render() {
    return (
      <div className="confirm-delete-modal">
        <header>Delete Note</header>
        <div className="confirm-delete-modal-message">
          {this.props.notebookName} will be deleted.
        </div>
        <div className="confirm-delete-modal-button-row">
          <button
            className="confirm-delete-modal-cancel-button"
            onClick={this.props.closeUIElements}
          >
            Cancel
          </button>
          <button
            className="confirm-delete-modal-submit-button"
            onClick={this.deleteNote}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default UserDropdown;
