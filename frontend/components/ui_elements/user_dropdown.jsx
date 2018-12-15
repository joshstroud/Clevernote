import { getUsernameFromUser } from "../../util/user_util";
import React from "react";

class UserDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut(e) {
    this.props.closeDropdown();
    this.props.logout();
    this.props.history.push("/");
  }

  render() {
    const username = getUsernameFromUser(this.props.currentUser);
    return (
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
    );
  }
}

export default UserDropdown;
