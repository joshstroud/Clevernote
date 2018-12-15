import React from "react";
import { closeDropdown } from "../../actions/ui_actions";
import { connect } from "react-redux";
import { getUsernameFromUser } from "../../util/user_util";

function Dropdown({ dropdown, currentUser, closeDropdown }) {
  if (!dropdown) {
    return null;
  }
  let component;
  let menuClass = "dropdown-menu";

  switch (dropdown) {
    case "side-nav-user":
      component = <UserDropdown currentUser={currentUser} />;
      menuClass += " user-dropdown-menu";
      break;
    default:
      component = null;
  }

  return (
    <div className="dropdown-background" onClick={closeDropdown}>
      <div className={menuClass} onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const UserDropdown = ({ currentUser }) => {
  const username = getUsernameFromUser(currentUser);
  return (
    <ul>
      <li className="user-dropdown-header">Account</li>
      <li className="user-dropdown-main-account">Img {username}</li>
      <li className="dropdown-row dropdown-line-break-above">
        Sign out {username}
      </li>
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    dropdown: state.ui.dropdown,
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeDropdown: () => dispatch(closeDropdown())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dropdown);
