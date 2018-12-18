import { connect } from "react-redux";
import NotebooksIndex from "./notebooks_index";
import { fetchNotebooks } from "../../actions/notebook_actions";
import { withRouter } from "react-router";

const mapStateToProps = (state, ownProps) => {
  return {
    notebooks: state.entities.notebooks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNotebooks: notebooks => dispatch(fetchNotebooks(notebooks))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NotebooksIndex)
);
