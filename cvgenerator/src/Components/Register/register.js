import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const { name, email, password, password2 } = formData;

  const onChangeHandler = e => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    if (password2 !== password) {
      setAlert("Password do not matched", "danger");
    } else {
      register({ name, email, password });
    }
  };
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Fragment>
      <div className="login">
        <div className="login-triangle"></div>

        <h2 className="login-header">Register</h2>

        <form className="login-container" onSubmit={e => onSubmit(e)}>
          <p>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={e => onChangeHandler(e)}
              required
            />
          </p>
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
              required
            />
          </p>
          <p>
            <input
              type="password"
              value={password2}
              onChange={e => onChangeHandler(e)}
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
              required
            />
          </p>
          <p>
            <input type="submit" value="Register" />
          </p>
          <p>
            Already have an acoount?<Link to="/login">{"  "}Login</Link>
          </p>
        </form>
      </div>
    </Fragment>
  );
};
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
