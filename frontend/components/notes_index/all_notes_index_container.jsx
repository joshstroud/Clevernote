import { connect } from "react-redux";
import NotesIndex from "./notes_index";
import { fetchAllNotes } from "../../actions/note_actions";
import { currentUserNotes } from "../../util/selectors";

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.entities.notes,
    title: "All Notes"
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllNotes: () => dispatch(fetchAllNotes())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesIndex);
