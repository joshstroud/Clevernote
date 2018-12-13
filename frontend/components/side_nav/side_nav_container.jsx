import { connect } from "react-redux";
import { withRouter } from "react-router";
import SideNav from "./side_nav";
import { dummyNotebooks } from "../../util/dummy_data";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUserEmail: state.entities.users[state.session.id].email,
    notebooks: dummyNotebooks
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideNav)
);
