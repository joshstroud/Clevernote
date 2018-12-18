import React, { Component } from "react";
import ReactQuill from "react-quill";
import merge from "lodash/merge";

class NoteShowEditor extends Component {
  constructor(props) {
    super(props);
    if (props.note) {
      this.state = {
        body: props.note.body,
        title: props.note.title
      };
    } else {
      this.state = {
        body: "",
        title: "",
        focus: false
      };
    }

    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.saveNote = this.saveNote.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleEditorFocus = this.handleEditorFocus.bind(this);
    this.handleEditorBlur = this.handleEditorBlur.bind(this);

    // quill editor options
    this.modules = {
      toolbar: [
        [{ font: [] }],
        [{ size: ["small", false, "large", "huge"] }], // custom dropdown
        ["bold", "italic", "underline", "strike"], // toggled buttons
        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        ["blockquote", "code-block"],
        [{ align: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }], // superscript/subscript
        ["clean"], // remove formatting button

        ["link", "image", "video", "formula"] // misc
      ]
    };

    // this.formats = [
    //   "header",
    //   "bold",
    //   "italic",
    //   "underline",
    //   "strike",
    //   "blockquote",
    //   "list",
    //   "bullet",
    //   "indent",
    //   "link",
    //   "image"
    // ];
  }

  componentDidMount() {
    const node = document.getElementsByClassName("ql-toolbar")[0];
    node.addEventListener("mousedown", this.handleToolbarClick);
  }

  handleToolbarClick(e) {
    e.preventDefault();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.props.note) {
      return;
    }

    if (
      (!prevProps.note && this.props.note) ||
      (prevProps.note &&
        (prevProps.note.title !== this.props.note.title ||
          prevProps.note.body) !== this.props.note.body)
    ) {
      this.setState({
        body: this.props.note.body,
        title: this.props.note.title
      });
    }

    if (prevProps.selectedNoteId !== this.props.selectedNoteId) {
      $(".ql-editor").scrollTop(0);
    }
  }

  handleEditorChange(value) {
    this.setState({ body: value });
  }

  saveNote(e) {
    e.preventDefault();
    let updatedNote = merge({}, this.props.note, {
      body: this.state.body,
      title: this.state.title
    });

    this.props.updateNote(updatedNote);
  }

  handleTitleChange(e) {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }

  handleEditorFocus(e) {
    this.setState({ focus: true });
  }

  handleEditorBlur(e) {
    this.setState({ focus: false });
  }

  computeWrapperClass() {
    if (this.props.selectedNoteId) {
      return "note-show-editor-wrapper";
    } else {
      return "note-show-editor-wrapper editor-hidden";
    }
  }

  render() {
    const titleValue = this.state.title === "Untitled" ? "" : this.state.title;

    let editorClassName = "note-show-quill";
    if (this.state.focus) {
      editorClassName = "note-show-quill show-toolbar-animation";
    }
    return (
      <div className={this.computeWrapperClass()}>
        <div className="note-show-editor-title-row">
          <input
            type="text"
            className="note-show-editor-title"
            value={titleValue}
            onChange={this.handleTitleChange}
            placeholder="Title"
          />
          <button
            onClick={this.saveNote}
            className="modal-submit-button note-show-save-button"
          >
            Save
          </button>
        </div>
        <ReactQuill
          className={editorClassName}
          value={this.state.body}
          onChange={this.handleEditorChange}
          placeholder="Start writing"
          theme="snow"
          modules={this.modules}
          onFocus={this.handleEditorFocus}
          onBlur={this.handleEditorBlur}
        >
          <div className="note-show-editing-area" />
        </ReactQuill>
      </div>
    );
  }
}

export default NoteShowEditor;
