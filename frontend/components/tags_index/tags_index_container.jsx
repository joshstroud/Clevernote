import { connect } from "react-redux";
import TagsIndex from "./tags_index";
import { fetchTags, fetchTaggings } from "../../actions/tag_actions";
import { withRouter } from "react-router";
import { openDropdown, openModal } from "../../actions/ui_actions";
import { currentUserTags } from "../../util/selectors";

const mapStateToProps = (state, ownProps) => {
  return {
    tags: currentUserTags(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openDropdown: (component, componentId) =>
      dispatch(openDropdown(component, componentId)),
    fetchTags: () => dispatch(fetchTags()),
    fetchTaggings: () => dispatch(fetchTaggings())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TagsIndex)
);
