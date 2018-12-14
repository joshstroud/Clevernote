import React, { Component } from "react";
import ReactQuill from "react-quill";

class NoteShowEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      body: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ body: value });
  }

  render() {
    return (
      <div className="note-show-editor-wrapper">
        <ReactQuill value={this.state.body} onChange={this.handleChange} />
      </div>
    );
  }
}

export default NoteShowEditor;
