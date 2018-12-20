import { connect } from "react-redux";
import NotebooksIndex from "./notebooks_index";
import { fetchNotebooks } from "../../actions/notebook_actions";
import { withRouter } from "react-router";
import { openDropdown, openModal } from "../../actions/ui_actions";
import { currentUserNotebooks } from "../../util/selectors";

const mapStateToProps = (state, ownProps) => {
  return {
    notebooks: currentUserNotebooks(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNotebooks: notebooks => dispatch(fetchNotebooks(notebooks)),
    openDropdown: (component, componentId) =>
      dispatch(openDropdown(component, componentId)),
    openCreateNotebookModal: () => dispatch(openModal("create-notebook"))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NotebooksIndex)
);
