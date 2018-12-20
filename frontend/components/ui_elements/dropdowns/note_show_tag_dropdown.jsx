import { getUsernameFromUser } from "../../../util/user_util";
import React from "react";

class NoteShowTagDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.removeTag = this.removeTag.bind(this);
  }

  removeTag(e) {
    console.log("Remove tag");
    this.props.closeUIElements();
    this.props.deleteTagging(this.props.tagging.id);
  }

  render() {
    if (
      this.props.dropdown === "note-show-tag" &&
      this.props.tagging.id === this.props.selectedComponentId
    ) {
      return (
        <div className="dropdown-background-relative">
          <div
            className="dropdown-menu note-show-tag-relative-position"
            onClick={e => e.stopPropagation()}
            tabIndex="0"
            onBlur={this.props.closeUIElements}
            ref={input => input && input.focus()}
          >
            <ul>
              <li
                className="note-show-settings-dropdown-row"
                onClick={this.removeTag}
              >
                Remove
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

export default NoteShowTagDropdown;
