import React from "react";
import { Link } from "react-router-dom";
import { RoutesNav } from "../../utils/consts";
import "./styles.css";

const Nav = ({ routes }) => {
  return (
    <div className="navbar_container">
      <ul className="navbar">
        {RoutesNav.map((route) => {
          return (
            <li>
              <Link className="link" to={route.path}><span>{route.name}</span></Link>
              <br />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
