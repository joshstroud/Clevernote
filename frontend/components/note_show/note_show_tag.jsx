import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import NoteShowTagDropdownContainer from "../ui_elements/dropdowns/note_show_tag_dropdown_container";

const NoteShowTag = ({ tag, tagging, openDropdown }) => {
  return (
    <div className="note-show-tag-wrapper">
      <button className="note-show-tag">
        {tag.name}
        <FontAwesomeIcon
          className="tag-chevron-down"
          icon={faChevronDown}
          onClick={() => {
            openDropdown("note-show-tag", tagging.id);
          }}
        />
      </button>
      <NoteShowTagDropdownContainer tagging={tagging} />
    </div>
  );
};

export default NoteShowTag;
