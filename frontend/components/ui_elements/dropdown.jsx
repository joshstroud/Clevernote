import React from "react";
import UserDropdown from "./user_dropdown";
import NoteShowSettingsDropdown from "./note_show_settings_dropdown";

function Dropdown({
  dropdown,
  currentUser,
  closeDropdown,
  history,
  logout,
  deleteNote,
  selectedNoteId
}) {
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
    case "note-show-settings":
      component = (
        <NoteShowSettingsDropdown
          closeDropdown={closeDropdown}
          history={history}
          deleteNote={deleteNote}
          selectedNoteId={selectedNoteId}
        />
      );
      menuClass += " note-show-settings-dropdown-menu";
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
