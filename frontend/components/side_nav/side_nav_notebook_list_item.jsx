import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideNavNotebookListItem extends Component {
  render() {
    return (
      <Link to={`/app/notebooks/${this.props.notebook.id}`}>
        <div className="side-nav-row side-nav-notebook-list-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-nav-notebook-icon"
            fill="#ccc"
            width="14"
            height="14"
            viewBox="0 0 14 14"
          >
            <path
              id="31a"
              d="M3 2v10h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zM2 1h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2V1zm2 1v10h1V2H4zm2 3v1h4V5H6z"
            />
          </svg>
          <span className="side-nav-notebook-list-item-text">
            {this.props.notebook.title}
          </span>
        </div>
      </Link>
    );
  }
}

export default SideNavNotebookListItem;
