import React from "react";
import { closeUIElements } from "../../../actions/ui_actions";
import { connect } from "react-redux";
import ConfirmDeleteNoteModalContainer from "./confirm_delete_note_modal_container";
import RenameNotebookModalContainer from "./rename_notebook_modal_container";
import CreateNotebookModalContainer from "./create_notebook_modal_container";

function Modal({ modal, closeUIElements }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "confirm-delete-note":
      component = <ConfirmDeleteNoteModalContainer />;
      break;
    case "rename-notebook":
      component = <RenameNotebookModalContainer />;
      break;
    case "create-notebook":
      component = <CreateNotebookModalContainer />;
      break;
    default:
      return null;
  }

  // disable clicking outside modal to close it, since Evernote default behavior is to not respond if we click out
  // <div className="modal-background" onClick={closeUIElements}>

  return (
    <div className="modal-background">
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeUIElements: () => dispatch(closeUIElements())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
