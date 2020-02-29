import React from "react";
import Page from "./Page";
import Moment from "react-moment";
import "./bar.css";
const SinglePage = ({ id, resume, loading }) => {
  return (
    <Page singleMode={true} id={id}>
      {loading || resume === null ? (
        <h1>Loading</h1>
      ) : (
        <div
          className="container"
          style={{
            marginTop: "0",
            marginLeft: "0",
            paddingRight: "120px",
            paddingLeft: "0"
          }}
        >
          <div className="header">
            {resume && resume.name && (
              <div className="full-name">
                <span className="first-name">{resume.name}</span>
              </div>
            )}
            {resume && resume.email && (
              <div className="contact-info">
                <span className="email">Email: </span>
                <span className="email-val">{resume && resume.email}</span>
                <span className="separator"></span>
                <span className="phone">Phone:+91 </span>
                <span className="phone-val">{resume && resume.phone}</span>
              </div>
            )}

            <div className="about">
              <span className="position">Description </span>
              <span className="desc">{resume && resume.description}</span>
            </div>
          </div>
          <div className="details">
            <div className="section">
              <div className="section__title">Experience</div>
              <div className="section__list">
                <div className="section__list-item">
                  <div className="left">
                    <div className="name">
                      {resume && resume.experience.company}
                    </div>
                    <div className="addr">
                      {resume && resume.experience.wrlocation}
                    </div>
                    <div className="duration">
                      <Moment format="DD/MM/YYYY">
                        {resume.experience.wrfrom}
                      </Moment>{" "}
                      {"-"}
                      <Moment format="DD/MM/YYYY">
                        {resume && resume.experience.wrto}
                      </Moment>
                    </div>
                  </div>
                  <div className="right">
                    <div className="name">
                      {resume && resume.experience.position}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="section__title">Education</div>
              <div className="section__list">
                <div className="section__list-item">
                  <div className="left">
                    <div className="name">
                      {resume && resume.education.school}
                    </div>
                    <div className="addr">
                      {resume && resume.education.sclocation}
                    </div>
                    <div className="duration">
                      <Moment format="DD/MM/YYYY">
                        {resume && resume && resume.education.scfrom}
                      </Moment>{" "}
                      {"-"}
                      <Moment format="DD/MM/YYYY">
                        {resume && resume && resume.education.scto}
                      </Moment>
                    </div>
                  </div>
                  <div className="right">
                    <div className="name">
                      {resume && resume.education.degree}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="section__title">Projects</div>
              <div className="section__list">
                <div className="section__list-item">
                  <div className="name">{resume && resume.project.title}</div>
                  <div className="text">
                    {resume && resume.project.pdescription}
                  </div>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="section__title">Skills</div>
              <div className="skills">
                {resume &&
                  resume.skills.map((skill, index) => (
                    <div className="skills__item">
                      <div className="left">
                        <div className="name">{skill}</div>
                      </div>
                      <div className="right">
                        <input id={`ck1/${skill}`} type="checkbox" checked />

                        <label htmlFor={`ck1/${skill}`}></label>
                        <input id={`ck2/${skill}`} type="checkbox" checked />

                        <label htmlFor={`ck2/${skill}`}></label>
                        <input id={`ck3/${skill}`} type="checkbox" />

                        <label htmlFor={`ck3/${skill}`}></label>
                        <input id={`ck4/${skill}`} type="checkbox" />
                        <label htmlFor={`ck4/${skill}`}></label>
                        <input id={`ck5/${skill}`} type="checkbox" />
                        <label htmlFor={`ck5/${skill}`}></label>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </Page>
  );
};

export default SinglePage;
