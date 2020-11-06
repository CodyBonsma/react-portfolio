import React from "react";
import image from "../Images/Bookish.png";
import image2 from "../Images/weather.png";
import image3 from "../Images/burger.png";

const Portfolio = () => {
  return (
    <div className="container portfolio">
      <div className="row">

        {/* First card body */}
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <img className="card-img-top" src={image} alt="Bookish" />
            <div className="card-body">
              <h5 className="card-title">Bookish</h5>
              <p className="card-text">
                A full stack app that brings readers together in online book clubs
              </p>
            </div>
            <hr />
            <div className="card-body">
              <ul className="btn btn-link btn-block">
                <li>
                  <a
                    href="http://gt-bookish.herokuapp.com/"
                    className="card-list"
                  >
                    deployed application
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/CodyBonsma/bookish"
                    className="card-list"
                  >
                    GitHub repository
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-sm-1"/>
        {/*  second card body */}
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <img className="card-img-top" src={image2} alt="Weather App" />
            <div className="card-body">
              <h5 className="card-title">City Weather Dashboard</h5>
              <p className="card-text">
                a dynamic weather dashboard that brings users updated weather forecasts for their searched city
              </p>
            </div>
            <hr />
            <div className="card-body">
              <ul className="btn btn-link btn-block">
                <li>
                  <a
                    href="https://codybonsma.github.io/dynamic-weather-dashboard/"
                    className="card-list"
                  >
                    deployed application
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/CodyBonsma/dynamic-weather-dashboard"
                    className="card-list"
                  >
                    GitHub repository
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-sm-1"/>
        {/*  third card body */}
        <div className="col-lg-3 col-md-6">
          <div className="card">
            <img className="card-img-top" src={image3} alt="Eat the burger app" />
            <div className="card-body">
              <h5 className="card-title">Eat Da Burger</h5>
              <p className="card-text">
                A fun app where users can create their own burgers and devour them
              </p>
            </div>
            <hr />
            <div className="card-body">
              <ul className="btn btn-link btn-block">
                <li>
                  <a
                    href="https://eat-a-fat-burger.herokuapp.com/"
                    className="card-list"
                  >
                    deployed application
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/CodyBonsma/Eat-Da-Burger"
                    className="card-list"
                  >
                    GitHub repository
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
