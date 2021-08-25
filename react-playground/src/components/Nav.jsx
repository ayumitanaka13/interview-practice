import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/member">
            <li>Member</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
