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
            <li className="user-dropdown-main-account">Img {username}</li>

            <li
              className="user-dropdown-row dropdown-line-break-above"
              onClick={this.signOut}
            >
              Sign out {username}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserDropdown;
