import { getUsernameFromUser } from "../../../util/user_util";
import React from "react";

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut(e) {
    this.props.closeUIElements();
    this.props.logout();
    this.props.history.push("/");
  }

  render() {
    if (this.props.dropdown !== "side-nav-user") {
      return null;
    }

    const currentUser = this.props.currentUser;
    const username = currentUser
      ? getUsernameFromUser(this.props.currentUser)
      : "";
    return (
      <div className="dropdown-background" onClick={this.props.closeUIElements}>
        <div
          className="dropdown-menu user-dropdown-menu"
          onClick={e => e.stopPropagation()}
        >
          <ul>
            <li className="user-dropdown-header">Account</li>
            <li className="user-dropdown-account-wrapper">
              <div className="user-dropdown-main-account">
                <span className="side-nav-user-avatar" />
                <div className="user-dropdown-username">{username}</div>
              </div>
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                className="user-dropdown-checkmark"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#00ADFF"
                  d="M1.538 4.5L0 6l4.103 4 9.23-8.5L11.795 0 4.103 7z"
                />
              </svg>
            </li>

            <li>
              <div className="dropdown-line-break-above" />
            </li>
            <li className="user-dropdown-row" onClick={this.signOut}>
              Sign out {username}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserDropdown;
