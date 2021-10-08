import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div class="nav">
        <nav>
          <ul>
            <li>
              <Link to="/home">HOME</Link>
            </li>
            <li>
            <Link to="/contact">CONTACT</Link>
              
            </li>
            <li>
            <Link to="/profile">PROFILE</Link>
            </li>
            <li>
            <Link to="/news">News</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;