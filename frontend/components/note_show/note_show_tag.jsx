import React, { Component } from "react";

const NoteShowTag = ({ tag }) => {
  return <button className="note-show-tag">{tag.name}</button>;
};

export default NoteShowTag;
