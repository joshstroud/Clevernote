import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const NoteShowTag = ({ tag }) => {
  return (
    <button className="note-show-tag">
      {tag.name}
      <FontAwesomeIcon className="tag-angle-down" icon={faChevronDown} />
    </button>
  );
};

export default NoteShowTag;
