import { getUsernameFromUser } from "../../../util/user_util";
import React from "react";
import merge from "lodash/merge";

class CreateNotebookModal extends React.Component {
  constructor(props) {
    super(props);
    this.createNotebook = this.createNotebook.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      title: ""
    };
  }

  createNotebook(e) {
    const that = that;
    const newNotebook = {
      owner_id: this.props.currentUserId,
      title: this.state.title
    };
    this.props.createNotebook(newNotebook);
    this.props.closeUIElements();
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ title: e.target.value });
  }

  render() {
    return (
      <div className="modal">
        <div className="modal-wrapper">
          <div className="modal-header modal-header-margin">
            <div>Create new notebook</div>
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              xmlns="http://www.w3.org/2000/svg"
              className="modal-close"
              onClick={this.props.closeUIElements}
            >
              <path
                id="hover-darken"
                fill="#b3b3b3"
                d="M7.728 6.314l4.95-4.95L11.263-.05 6.313 4.9 1.365-.05-.05 1.364l4.95 4.95-4.95 4.95 1.414 1.414 4.95-4.95 4.95 4.95 1.414-1.415-4.95-4.95z"
              />
            </svg>
          </div>
          <p className="modal-text">
            Notebooks are useful for grouping notes around a common topic. They
            can be private or shared.
          </p>

          <div className="modal-input-container">
            <div className="modal-label-wrapper">
              <label className="modal-label">Name</label>
            </div>
            <div className="modal-input-wrapper">
              <input
                type="text"
                className="modal-input"
                value={this.state.title}
                onChange={this.handleChange}
                placeholder="Notebook name"
              />
            </div>
          </div>
        </div>
        <div className="modal-button-wrapper">
          <div className="modal-button-row">
            <button
              className="modal-submit-button"
              onClick={this.createNotebook}
            >
              Continue
            </button>
            <button
              className="modal-cancel-button"
              onClick={this.props.closeUIElements}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateNotebookModal;
