import React from 'react';
import "../App.css";

const Nav = () => {
    return (
        <nav>
            <h3>Welcome to my portfolio</h3>
            <ul className="nav-links">
                <li>About</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;