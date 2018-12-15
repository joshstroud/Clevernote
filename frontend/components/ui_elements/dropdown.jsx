import React from "react";
import UserDropdown from "./user_dropdown";

function Dropdown({ dropdown, currentUser, closeDropdown, history, logout }) {
  if (!dropdown) {
    return null;
  }
  let component;
  let menuClass = "dropdown-menu";

  switch (dropdown) {
    case "side-nav-user":
      component = (
        <UserDropdown
          currentUser={currentUser}
          closeDropdown={closeDropdown}
          history={history}
          logout={logout}
        />
      );
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

export default Dropdown;
