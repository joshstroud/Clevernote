import { connect } from "react-redux";
import NotebooksIndex from "./notebooks_index";
import { fetchNotes } from "../../actions/note_actions";
import { selectNote } from "../../actions/ui_actions";
import { withRouter } from "react-router";

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NotebooksIndex)
);
