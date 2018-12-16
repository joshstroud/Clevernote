import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const NoteShowTag = ({ tag }) => {
  return (
    <button className="note-show-tag">
      {tag.name}
      <FontAwesomeIcon className="tag-chevron-down" icon={faChevronDown} />
    </button>
  );
};

export default NoteShowTag;
