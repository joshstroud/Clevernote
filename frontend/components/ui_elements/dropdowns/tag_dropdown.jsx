import { getUsernameFromUser } from "../../../util/user_util";
import React from "react";

class TagDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.deleteTag = this.deleteTag.bind(this);
  }

  deleteTag(e) {
    this.props.closeUIElements();
    this.props.openModal("confirm-delete-tag", this.props.tag.id);
  }

  render() {
    if (
      this.props.dropdown !== "tags-index-delete-tag" ||
      this.props.selectedComponentId !== this.props.tag.id
    ) {
      return null;
    }

    return (
      <div
        className="dropdown-background-relative"
        onClick={this.props.closeUIElements}
      >
        <div
          className="dropdown-menu tags-index-delete-tag-dropdown"
          onClick={e => e.stopPropagation()}
          onBlur={this.props.closeUIElements}
          tabIndex="0"
          ref={input => input && input.focus()}
        >
          <ul>
            <li
              className="note-show-settings-dropdown-row"
              onClick={this.deleteTag}
            >
              Delete tag...
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

// in dropdown menu

export default TagDropdown;
