import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <i className="fas fa-terminal"></i>
      <br/>
        <a className="navbar-brand" href="#">
          CeudsCodes
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav-links">
            <Link className="navStyle" to="/about">
              <li>About</li>
            </Link>
            <Link className="navStyle" to="/portfolio">
              <li>Portfolio</li>
            </Link>
            <Link className="navStyle" to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
