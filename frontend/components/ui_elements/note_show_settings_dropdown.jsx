import { getUsernameFromUser } from "../../util/user_util";
import React from "react";

class NoteShowSettingsDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.moveNoteToNotebook = this.moveNoteToNotebook.bind(this);
    this.duplicateNote = this.duplicateNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  moveNoteToNotebook(e) {
    console.log("Move note to notebook action");
    this.props.closeDropdown();
  }

  duplicateNote(e) {
    console.log("Duplicate note action");
    this.props.closeDropdown();
  }

  deleteNote(e) {
    console.log("Delete note action");
    this.props.closeDropdown();
    debugger;
    this.props.deleteNote(this.props.selectedNoteId);
  }

  render() {
    return (
      <ul>
        <li
          className="note-show-settings-dropdown-row"
          onClick={this.moveNoteToNotebook}
        >
          Move to...
        </li>
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
    );
  }
}

export default NoteShowSettingsDropdown;
