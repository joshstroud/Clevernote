import { getUsernameFromUser } from "../../../util/user_util";
import React from "react";

class ConfirmDeleteNoteModal extends React.Component {
  constructor(props) {
    super(props);
    this.deleteNote = this.deleteNote.bind(this);
  }

  deleteNote(e) {
    const that = this;
    this.props.deleteNote(this.props.selectedNoteId).then(action => {
      console.log("history change");
      that.props.history.push(that.props.path);
    });
    this.props.closeUIElements();
  }

  render() {
    return (
      <div className="modal">
        <header>
          <div className="modal-wrapper">
            <div className="modal-header">
              <div>Delete note</div>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                xmlns="http://www.w3.org/2000/svg"
                className="modal-close"
                onClick={this.props.closeUIElements}
              >
                <path
                  id="hover-darken"
                  fill="#b3b3b3"
                  d="M7.728 6.314l4.95-4.95L11.263-.05 6.313 4.9 1.365-.05-.05 1.364l4.95 4.95-4.95 4.95 1.414 1.414 4.95-4.95 4.95 4.95 1.414-1.415-4.95-4.95z"
                />
              </svg>
            </div>
          </div>
        </header>
        <div className="modal-message">
          {this.props.noteTitle} will be deleted.
        </div>
        <div className="modal-button-wrapper">
          <div className="modal-button-row">
            <button className="modal-submit-button" onClick={this.deleteNote}>
              Continue
            </button>
            <button
              className="modal-cancel-button"
              onClick={this.props.closeUIElements}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmDeleteNoteModal;
