import React, { useEffect } from "react";
import "./dash.css";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { getResume } from "../../actions/resume";

function Dash({ getResume, resumes: { resumes, loading }, isAuthenticated }) {
  useEffect(() => {
    getResume();
  }, [getResume]);

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      {loading ? (
        <div
          style={{
            justifyContent: "center",
            display: "flex"
          }}
        >
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div>
          <section className="wrapper">
            <div className="container-fostrap">
              <div>
                <h1 className="heading">Your Resumes</h1>
              </div>
              <div className="content">
                <div className="container">
                  <div className="row">
                    {resumes &&
                      resumes.map(resume => (
                        <div key={resume._id} className="col-xs-12 col-sm-4">
                          <div className="card">
                            <div className="card-content">
                              <h4 className="card-title">
                                <Link to={`/resume/${resume._id}`}>
                                  {" "}
                                  {resume.name}
                                </Link>
                              </h4>
                              <p className="">{resume.description}</p>
                            </div>
                            <div className="card-read-more">
                              <Link
                                to={`/resume/${resume._id}`}
                                className="btn btn-link btn-block"
                              >
                                Read More
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                  <Link to="/add-resume" className="btn btn-primary">
                    Add New Resume
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}

Dash.propTypes = {
  getResume: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
  resumes: state.resume,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getResume })(Dash);
