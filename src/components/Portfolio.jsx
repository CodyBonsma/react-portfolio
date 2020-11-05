import React from "react";
import image from "../Images/Bookish.png";

const Portfolio = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card">
          <img className="card-img-top" src={image} alt="Bookish" />
          <div className="card-body">
            <h5 className="card-title">Bookish</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="card-body">
            <ul className="card-list">
              <li>
                <a
                  href="http://gt-bookish.herokuapp.com/"
                  className="card-link"
                >
                  deployed application
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/CodyBonsma/bookish"
                  className="card-link"
                >
                  GitHub repository
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
