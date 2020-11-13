import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./Landing.pages.css";

const Landing = (props) => {
  return (
    <div className="landing-page">
      <img
        className="landing-logo"
        src="https://static.wixstatic.com/media/da8ec6_582a9203cf5845cf80c545302acdc6ec~mv2.png/v1/fill/w_1261,h_252,al_c,lg_1,q_85/Blue%2520Anchor%2520Logo_edited.webp"
      />
      <button
        onClick={() => {
          props.history.push("/login");
        }}
        className="landing-auth-button"
      >
        Login
      </button>
      <button
        onClick={() => {
          props.history.push("/register");
        }}
        className="landing-auth-button-r"
      >
        Register
      </button>
    </div>
  );
};

export default withRouter(Landing);
