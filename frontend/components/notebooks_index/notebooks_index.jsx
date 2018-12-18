import React, { Component } from "react";
import NotebookIndexItem from "./notebook_index_item";

class NotebooksIndex extends Component {
  componentDidMount() {
    this.props.fetchNotebooks();
  }

  render() {
    const notebookItems = Object.keys(this.props.notebooks).map(notebookId => {
      return (
        <NotebookIndexItem
          key={notebookId}
          notebook={this.props.notebooks[notebookId]}
          openDropdown={this.props.openDropdown}
        />
      );
    });

    return (
      <section className="notebook-index-wrapper">
        <header className="notebook-index-header">
          <div className="notebook-index-header-text">Notebooks</div>
        </header>
        <div className="notebook-index-subheader-row">
          <div className="notebook-index-subheader-title">My notebook list</div>
          <button className="notebook-index-new-notebook-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#00a82d"
                id="69a"
                d="M19 17v-2h2v2h2v2h-2v2h-2v-2h-2v-2h2zm-1-2.874a4.002 4.002 0 0 0-2.952 4.497H9V4h7c1.105 0 2 .873 2 1.95v8.176zM6 4h2v14.623H6V4zm9.5 4h-4c-.276 0-.5.15-.5.333v1.334c0 .184.224.333.5.333h4c.276 0 .5-.15.5-.333V8.333C16 8.15 15.776 8 15.5 8z"
              />
            </svg>
            New Notebook
          </button>
        </div>
        <div className="notebook-index-list">
          <header className="notebook-index-list-header">
            <div className="notebook-index-list-header-column notebook-index-list-header-title">
              Title
            </div>
            <div className="notebook-index-list-header-column notebook-index-list-header-created">
              Created By
            </div>
            <div className="notebook-index-list-header-column notebook-index-list-header-updated">
              Updated
            </div>
            <div className="notebook-index-list-header-column notebook-index-list-header-shared">
              Shared With
            </div>
            <div className="notebook-index-list-header-column notebook-index-list-header-actions">
              Actions
            </div>
          </header>
          <div>{notebookItems}</div>
        </div>
      </section>
    );
  }
}

export default NotebooksIndex;
