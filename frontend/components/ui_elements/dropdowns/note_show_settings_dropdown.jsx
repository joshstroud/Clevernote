import { getUsernameFromUser } from "../../../util/user_util";
import React from "react";

class NoteShowSettingsDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.moveNoteToNotebook = this.moveNoteToNotebook.bind(this);
    this.duplicateNote = this.duplicateNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  moveNoteToNotebook(e) {
    //console.log("Move note to notebook action");
    this.props.closeUIElements();
    let note = this.props.selectedNote;
  }

  duplicateNote(e) {
    // console.log("Duplicate note action");
    let noteCopy = Object.assign({}, this.props.selectedNote);
    noteCopy.title += " copy";

    const that = this;
    this.props
      .createNote(noteCopy)
      .then(action =>
        that.props.history.push(`${that.props.path}/${action.note.id}`)
      );
    this.props.closeUIElements();
  }

  deleteNote(e) {
    // console.log("Delete note action");
    const that = this;
    // this.props
    //   .deleteNote(this.props.selectedNoteId)
    //   .then(action => that.props.history.push(that.props.path));
    this.props.closeUIElements();
    this.props.openModal("confirm-delete-note");
  }

  render() {
    if (this.props.dropdown !== "note-show-settings") {
      return null;
    }

    return (
      <div className="dropdown-background" onClick={this.props.closeUIElements}>
        <div
          className="dropdown-menu note-show-settings-dropdown-menu"
          onClick={e => e.stopPropagation()}
        >
          <ul>
            {/* <li
              className="note-show-settings-dropdown-row"
              onClick={this.moveNoteToNotebook}
            >
              Move to...
            </li> */}
            <li
              className="note-show-settings-dropdown-row"
              onClick={this.duplicateNote}
            >
              Duplicate note
            </li>
            <li
              className="note-show-settings-dropdown-row"
              onClick={this.deleteNote}
            >
              Delete note
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NoteShowSettingsDropdown;
