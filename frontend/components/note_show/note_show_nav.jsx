import React, { Component } from "react";
import NoteShowSettingsDropdownContainer from "../ui_elements/note_show_settings_container";

class NoteShowNav extends Component {
  constructor(props) {
    super(props);

    this.showSettings = this.showSettings.bind(this);
  }

  showSettings(e) {
    this.props.openDropdown("note-show-settings");
  }

  render() {
    return (
      <header className="note-show-nav">
        <div className="note-show-left">
          <button className="note-show-fullscreen-button">FS</button>
          <div className="note-show-current-notebook">
            | {this.props.notebook.title}
          </div>
        </div>
        <div className="note-show-right">
          {/* <button className="note-show-share-button">Share</button> */}
          <button className="options-button" onClick={this.showSettings}>
            ⚙
          </button>
          <NoteShowSettingsDropdownContainer />
        </div>
      </header>
    );
  }
}

export default NoteShowNav;
