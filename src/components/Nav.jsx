import React from 'react';
import "../App.css";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <h3>Welcome to my portfolio</h3>
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
        </nav>
    );
};

export default Nav;