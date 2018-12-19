import { connect } from "react-redux";
import { withRouter } from "react-router";
import SideNav from "./side_nav";
import { createNote } from "../../actions/note_actions";
import { openDropdown } from "../../actions/ui_actions";
import { findSelectedOrDefaultNotebook } from "../../util/selectors";

const mapStateToProps = (state, ownProps) => {
  let defaultCreationNotebookId = null;
  if (findSelectedOrDefaultNotebook(state)) {
    defaultCreationNotebookId = findSelectedOrDefaultNotebook(state).id;
  }

  return {
    currentUser: state.entities.users[state.session.id],
    notebooks: state.entities.notebooks,
    path: ownProps.location.pathname,
    defaultCreationNotebookId,
    selectedNotebookId: state.ui.selectedNotebookId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNote: note => dispatch(createNote(note)),
    openDropdown: component => dispatch(openDropdown(component))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideNav)
);
