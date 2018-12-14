import { connect } from "react-redux";
import { withRouter } from "react-router";
import SideNav from "./side_nav";
import { dummyNotebooks } from "../../util/dummy_data";
import { createNote } from "../../actions/note_actions";
import { selectNote } from "../../actions/ui_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    notebooks: dummyNotebooks,
    path: "/app/notes"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNote: note => dispatch(createNote(note))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideNav)
);
