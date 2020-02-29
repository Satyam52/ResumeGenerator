import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { createResume } from "../../actions/resume";

function Login({ createResume, resume }) {
  let history = useHistory();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    sclocation: "",
    scfrom: "",
    scto: "",
    degree: "",
    company: "",
    wrlocation: "",
    wrfrom: "",
    wrto: "",
    position: "",
    title: "",
    pdescription: "",
    skills: "",
    school: ""
  });

  const {
    name,
    email,
    phone,
    description,
    sclocation,
    scfrom,
    scto,
    degree,
    company,
    wrlocation,
    wrfrom,
    wrto,
    position,
    title,
    pdescription,
    skills,
    school
  } = formData;

  const onChangeHandler = e => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    createResume({
      name,
      email,
      phone,
      description,
      sclocation,
      scfrom,
      scto,
      degree,
      company,
      wrlocation,
      wrfrom,
      wrto,
      position,
      title,
      pdescription,
      skills,
      school
    });

    history.push(`/dashboard`);
  };
  return (
    <>
      <div className="login">
        <div className="login-triangle"></div>

        <h2 className="login-header">Fill Out Your Resume</h2>

        <form onSubmit={e => onSubmit(e)} className="login-container">
          <p>
            <input
              onChange={e => onChangeHandler(e)}
              value={name}
              name="name"
              required
              type="text"
              placeholder="Name"
            />
          </p>
          <p>
            <input
              onChange={e => onChangeHandler(e)}
              value={email}
              name="email"
              required
              type="email"
              placeholder="Email"
            />
          </p>
          <p>
            <input
              onChange={e => onChangeHandler(e)}
              value={phone}
              name="phone"
              required
              type="text"
              placeholder="Phone"
            />
          </p>
          <p>
            <input
              onChange={e => onChangeHandler(e)}
              value={description}
              name="description"
              required
              type="text"
              placeholder="Your Description"
            />
          </p>
          <p>Education : </p>
          <p>
            <input
              onChange={e => onChangeHandler(e)}
              value={school}
              name="school"
              type="text"
              required
              placeholder="School"
            />
          </p>
          <p>
            <input
              required
              onChange={e => onChangeHandler(e)}
              value={sclocation}
              name="sclocation"
              type="text"
              placeholder="School Location"
            />
          </p>
          <p>
            <input
              required
              onChange={e => onChangeHandler(e)}
              value={degree}
              name="degree"
              type="text"
              placeholder="Degree"
            />
          </p>
          <p>
            <input
              required
              onChange={e => onChangeHandler(e)}
              value={scfrom}
              name="scfrom"
              type="date"
              placeholder="From"
            />
          </p>
          <p>
            <input
              required
              onChange={e => onChangeHandler(e)}
              value={scto}
              name="scto"
              type="date"
              placeholder="To"
            />
          </p>

          <p>Experience : </p>
          <p>
            <input
              required
              onChange={e => onChangeHandler(e)}
              value={company}
              name="company"
              type="text"
              placeholder="Company"
            />
          </p>
          <p>
            <input
              required
              onChange={e => onChangeHandler(e)}
              value={wrlocation}
              name="wrlocation"
              type="text"
              placeholder="Work Location"
            />
          </p>
          <p>
            <input
              required
              onChange={e => onChangeHandler(e)}
              value={position}
              name="position"
              type="text"
              placeholder="Position"
            />
          </p>
          <p>
            <input
              required
              onChange={e => onChangeHandler(e)}
              value={wrfrom}
              name="wrfrom"
              type="date"
              placeholder="From"
            />
          </p>
          <p>
            <input
              required
              onChange={e => onChangeHandler(e)}
              value={wrto}
              name="wrto"
              type="date"
              placeholder="To"
            />
          </p>
          <p>
            <input
              required
              onChange={e => onChangeHandler(e)}
              value={skills}
              name="skills"
              type="text"
              placeholder="Your Skills like Python , PHP , C++"
            />
          </p>
          <p>Projects : </p>
          <p>
            <input
              required
              onChange={e => onChangeHandler(e)}
              value={title}
              name="title"
              type="text"
              placeholder="Project Title"
            />
          </p>
          <p>
            <input
              required
              onChange={e => onChangeHandler(e)}
              value={pdescription}
              name="pdescription"
              type="text"
              placeholder="Project Description"
            />
          </p>

          <p>
            <input type="submit" value="Create Your Resume" />
          </p>
        </form>
      </div>
    </>
  );
}
Login.protoTypes = {
  createResume: PropTypes.func.isRequired,
  resume: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  resume: state.resume.resume
});
export default connect(mapStateToProps, { createResume })(Login);
