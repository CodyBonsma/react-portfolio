import React from "react";
import image from "../Images/Bookish.png";
import image2 from "../Images/verdant-home.png";
import image3 from "../Images/burger.png";
import video2 from "../video/cafe.mp4";

const Portfolio = () => {
  return (
    <>
      <div className="fullscreen-video-wrap">
        <video
          className="background-video"
          src={video2}
          autoPlay={true}
          loop={true}
          //   playsinline={playsinline}
        ></video>
        <div className="container portfolio">
          <div className="row">
            {/* First card body */}
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <img className="card-img-top" src={image} alt="Bookish" />
                <div className="card-body">
                  <h5 className="card-title">Bookish</h5>
                  <p className="card-text">
                    A full stack app that brings readers together and allows
                    them to create and join online book clubs
                  </p>
                </div>
                <hr />
                <div className="card-body">
                  <ul className="card-list text-left">
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

            <div className="col-sm-1" />
            {/*  second card body */}
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <img className="card-img-top" src={image2} alt="Weather App" />
                <div className="card-body">
                  <h5 className="card-title">Verdant</h5>
                  <p className="card-text">
                    A full-stack application that gives green thumbs a place to connect online
                  </p>
                </div>
                <hr />
                <div className="card-body">
                  <ul className="card-list text-left">
                    <li>
                      <a
                        href="https://verdant-thumbs.herokuapp.com/"
                        className="card-list"
                      >
                        deployed application
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/CodyBonsma/verdant"
                        className="card-list"
                      >
                        GitHub repository
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-sm-1" />
            {/*  third card body */}
            <div className="col-lg-3 col-md-6">
              <div className="card">
                <img
                  className="card-img-top"
                  src={image3}
                  alt="Eat the burger app"
                />
                <div className="card-body">
                  <h5 className="card-title">Eat Da Burger</h5>
                  <p className="card-text">
                    A fun app where users can create their own burgers and
                    devour them
                  </p>
                </div>
                <hr />
                <div className="card-body">
                  <ul className="card-list text-left">
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
      </div>
      </>
  );
};

export default Portfolio;
