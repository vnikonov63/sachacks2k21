import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav>
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <Link to="/edit">
              <h5>Edit</h5>
            </Link>
          </li>
          <li>
            <Link to="/saved">
              <h5>Saved</h5>
            </Link>
          </li>
          <li>
            <a>JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
