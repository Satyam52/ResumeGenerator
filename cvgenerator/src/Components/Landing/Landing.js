import React from "react";
import "./dash.css";
import { Link } from "react-router-dom";
function Dash() {
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex"
      }}
    >
      <div className="webpage">
        <h1 className="title">
          Resume <br /> Generator
        </h1>
        <Link to="/register">
          <button className="cta-button">GET YOUR RESUME</button>
        </Link>
        <div className="right-triangle"></div>
      </div>
    </div>
  );
}

export default Dash;
