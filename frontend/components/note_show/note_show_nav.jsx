import React, { Component } from "react";
import NoteShowSettingsDropdownContainer from "../ui_elements/dropdowns/note_show_settings_dropdown_container";
import { Link } from "react-router-dom";

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
          <button className="note-show-fullscreen-button">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none">
                <path d="M0 0h20v20H0z" />
                <path
                  d="M3.405 4.4v1.997a.7.7 0 0 1-1.4 0V2.774a.69.69 0 0 1 .19-.572A.694.694 0 0 1 2.713 2h3.693a.7.7 0 1 1 0 1.399h-2.02l4.222 4.216a.7.7 0 1 1-.991.991L3.405 4.4zM12.6 17a.7.7 0 1 1 0-1.398h2.019l-4.243-4.239a.7.7 0 1 1 .991-.99L15.6 14.6v-1.996a.7.7 0 0 1 1.4 0V16.3a.7.7 0 0 1-.7.699h-3.7z"
                  fill="#000"
                  opacity=".34"
                />
              </g>
            </svg>
          </button>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            className="note-show-header-divide"
          >
            <g fill="none">
              <path d="M0 0h20v20H0z" />
              <path fill="#CCC" d="M10 18h1V2h-1z" />
            </g>
          </svg>
          <div className="note-show-current-notebook">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="note-show-notebook-icon"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <path
                fill="#7a8083"
                d="M3 2v10h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zM2 1h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2V1zm2 1v10h1V2H4zm2 3v1h4V5H6z"
              />
            </svg>
            <Link
              className="note-show-notebook-title"
              tooltiptext={this.props.notebook.title}
              to="/app/notes"
            >
              {this.props.notebook.title}
            </Link>
          </div>
        </div>
        <div className="note-show-right">
          {/* <button className="note-show-share-button">Share</button> */}
          <svg
            tabindex="0"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="note-show-options-button"
            onClick={this.showSettings}
          >
            <path d="M25 19a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-9 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
          </svg>
          <NoteShowSettingsDropdownContainer />
        </div>
      </header>
    );
  }
}

export default NoteShowNav;
