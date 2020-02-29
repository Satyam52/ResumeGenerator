import "./login.css";
import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import PropTypes from "prop-types";

function Login({ login, isAuthenticated }) {
  const [formData, setformData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = formData;

  const onChangeHandler = e => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    login({ email, password });
  };
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Fragment>
      <div className="login">
        <div className="login-triangle"></div>

        <h2 className="login-header">Log in</h2>

        <form className="login-container" onSubmit={e => onSubmit(e)}>
          <p>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={e => onChangeHandler(e)}
              name="email"
              required
            />
          </p>
          <p>
            <input
              type="password"
              value={password}
              onChange={e => onChangeHandler(e)}
              placeholder="Password"
              name="password"
              minLength="6"
            />
          </p>
          <p>
            <input type="submit" value="Log in" />
          </p>
          <p>
            Don't have an account?<Link to="/register">{"  "}Register</Link>
          </p>
        </form>
      </div>
    </Fragment>
  );
}
Login.protoTypes = {
  login: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { login })(Login);
