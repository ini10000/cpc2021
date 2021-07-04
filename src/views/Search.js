import React, { useState } from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../routes/routes";

import { ReactComponent as Caret } from "../assets/svg/caret-down.svg";
import { ReactComponent as SearchIcon } from "../assets/svg/search-icon.svg";
import { ReactComponent as SearchButton } from "../assets/svg/search.svg";

import "../assets/css/search.css";

const Search = () => {
  // Set the date we're counting down to
  const countDownDate = new Date("Oct 21, 2021 00:00:00").getTime();
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [clicked, setClicked] = useState(false);
  const [name, setName] = useState();

  setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

    // if (distance < 0) {
    //   clearInterval(x);
    //   document.getElementById("demo").innerHTML = "EXPIRED";
    // }
  }, 1000);

  const counters = [
    { name: "DAYS", value: days },
    { name: "HOURS", value: hours },
    { name: "MINUTES", value: minutes },
    { name: "SECONDS", value: seconds },
  ];

  return (
    <div className="landing_background">
      <image src="../assets/images/landing2.png" />
      <div className="search_container">
        <div className="flex_row search_nav">
          <Link to={ROUTES.HOME}>
            <h1 className="landing_text">CPC 2021</h1>
          </Link>
          <div className="flex_row">
            <h1 className="landing_text">Reels</h1>
            <div className="flex_row">
              <h1 className="landing_text navCollege">Colleges</h1>
              <Caret />
            </div>
            <h1 className="landing_text navHall">Hall of Fame</h1>
            <SearchIcon />
          </div>
        </div>
        <div
          className="search_contents"
          style={{
            margin: name && 15,
          }}
        >
          <div className="flex_row justified" style={{ margin: 15 }}>
            {counters.map((item, index) => (
              <div className="flex_row ">
                <div className="counter_container">
                  <div
                    className="numberContainer"
                    style={{
                      height: name ? 173 * 0.3681 : 173,
                      padding: name ? 20 * 0.3681 : 20,
                      borderRadius: name
                        ? "3.681px 3.681px 0px 0px"
                        : "10px 10px 0 0",
                    }}
                  >
                    <h1
                      className="counter"
                      style={{ fontSize: name ? 118 * 0.3681 : 118 }}
                    >
                      {item.value}
                    </h1>
                  </div>
                  <div
                    className="labelContainer"
                    style={{
                      height: name ? 54 * 0.3681 : 54,
                      padding: name ? 20 * 0.3681 : 20,
                      borderRadius: name
                        ? "0px 0px 3.681px 3.681px"
                        : "0 0 10px 10px",
                    }}
                  >
                    <h1
                      className="counter"
                      style={{ fontSize: name ? 21 * 0.3681 : 21 }}
                    >
                      {item.name}
                    </h1>
                  </div>
                </div>
                {index !== 3 && <h1 className="counter">:</h1>}
              </div>
            ))}
          </div>
          {clicked ? (
            <div className="form-horizontal">
              <div className="input-group">
                <input
                  type="text"
                  className="search_bar"
                  placeholder="Search for your setmates"
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="input-group-btn">
                  <button className="search_button" type="button">
                    ENTER
                  </button>
                </span>
              </div>
            </div>
          ) : (
            <div className="searched">
              <SearchButton onClick={() => setClicked(true)} />
            </div>
          )}

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Search;
