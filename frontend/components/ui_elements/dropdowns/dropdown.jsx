import React from "react";
import UserDropdownContainer from "./user_dropdown_container";
import NoteShowSettingsDropdownContainer from "./note_show_settings_dropdown_container";
import { connect } from "react-redux";

function Dropdown({ dropdown }) {
  // if (!dropdown) {
  //   return null;
  // }
  // let component;
  // let menuClass = "dropdown-menu";
  // switch (dropdown) {
  //   case "side-nav-user":
  //     component = <UserDropdownContainer />;
  //     menuClass += " user-dropdown-menu";
  //     break;
  //   case "note-show-settings":
  //     component = <NoteShowSettingsDropdownContainer />;
  //     menuClass += " note-show-settings-dropdown-menu";
  //     break;
  //   default:
  //     component = null;
  // }
  // return (
  //   <div className="dropdown-background" onClick={closeDropdown}>
  //     <div className={menuClass} onClick={e => e.stopPropagation()}>
  //       {component}
  //     </div>
  //   </div>
  // );
}

const mapStateToProps = state => {
  dropdown: state.ui.dropdown;
};

export default connect(mapStateToProps)(Dropdown);
