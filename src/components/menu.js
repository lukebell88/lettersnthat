import React from "react";
import { Link } from 'gatsby'


export default ({ close }) => (
  <div className="menu">
    <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/about">About</Link>
      </li>
      <li>
      <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
);

