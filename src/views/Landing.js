import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../routes/routes";
import "../assets/css/landing.css";

const Landing = () => {
  return (
    <div className="landing_background">
      <image src="../assets/images/landing2.png" />
      <div className="landing_container">
        <div className="flex_row landing_nav">
          <h1 className="landing_text">LOGO</h1>
          <h1 className="landing_text">COVENANT UNIVERSITY - CLASS OF 2021</h1>
        </div>
        <div className="landing_contents">
          <div>
            <p className="landing_text landing_text_1">Welcome To</p>
            <p className="landing_text landing_text_2">
              Covenant University - Class of 2021 Yearbook
            </p>
            <p className="landing_text landing_text_3">The Reckoning Set</p>
            <p className="landing_text landing_text_4">
              Please enter your email address:
            </p>
            <div className="flex_row landing_input_container">
              <input
                className="landing_input"
                type="email"
                placeholder="Email"
              />
              <Link to={ROUTES.SEARCH}>
                <button className="landing_input landing_button">Submit</button>
              </Link>
            </div>
            <p className="landing_text landing_text_3 no_underline">
              We will send you a link to open the book
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
