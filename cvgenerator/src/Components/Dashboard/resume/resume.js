import React, { useEffect } from "react";
import SinglePage from "../../SinglePage";
import PrintButton from "../../PrintButton";
import { getAResume } from "../../../actions/resume";
import { connect } from "react-redux";
import PropTypes from "prop-types";
function Resume({ match, getAResume, resume: { loading, resume } }) {
  useEffect(() => {
    getAResume(match.params.id);
  }, [getAResume, match]);

  return (
    <div className="bg-black-80 w-100 pv5">
      <PrintButton id={"singlePage"} label={"Save as PDF"} />
      <SinglePage resume={resume} loading={loading} id={"singlePage"} />
    </div>
  );
}

Resume.protoType = {
  getAResume: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  resume: state.resume
});

export default connect(mapStateToProps, { getAResume })(Resume);
