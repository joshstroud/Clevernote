import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderFirstError() {
    if (
      this.props.errors.length > 0 &&
      this.props.errors[0].includes("Password")
    ) {
      return null;
    }

    return <div className="session-errors">{this.props.errors[0]}</div>;
  }

  renderSecondError() {
    let errorsToRender = this.props.errors.slice(1);
    if (
      this.props.errors.length > 0 &&
      this.props.errors[0].includes("Password")
    ) {
      errorsToRender = this.props.errors;
    }

    return (
      <ul className="session-errors">
        {errorsToRender.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  renderSwitchForm() {
    let description = "Don't have an account?";
    let url = "/signup";
    let linkText = "Create account";

    if (this.props.formType === "Continue") {
      description = "Already have an account?";
      url = "/login";
      linkText = "Sign in";
    }

    return (
      <div className="switch-wrapper">
        {description}
        <br />
        <Link to={url} className="switch-link">
          {linkText}
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div className="window-wrapper">
        <section className="form-wrapper">
          <div className="heading">
            <img src={window.images.sessionEvernoteLogo} alt="" />
            <p className="tagline">Remember everything important.</p>
          </div>
          <ol className="login-form-list">
            <form onSubmit={this.handleSubmit} className="login-form">
              <div className="input-wrapper">
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                  className="text-input"
                />
              </div>
              {this.renderFirstError()}
              <div className="input-wrapper">
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  className="text-input"
                  placeholder="Password"
                />
              </div>
              {this.renderSecondError()}

              <input
                className="btn-session-submit"
                type="submit"
                value={this.props.formType}
              />
            </form>
          </ol>
          <p className="terms-of-service">
            By creating an account, you are agreeing to our{" "}
            <span className="ToS-link">Terms of Service </span>
            and <span className="ToS-link">Privacy Policy</span>.
          </p>
          {this.renderSwitchForm()}
        </section>
      </div>
    );
  }
}

export default SessionForm;
