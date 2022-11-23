import React from "react";
import { Link } from "react-router-dom";
import { RoutesNav } from "../../utils/consts";

const Nav = ({ routes }) => {
  return (
    <div>
      <ul>
        {RoutesNav.map((route) => {
          return (
            <>
              <Link to={route.path}>{route.name}</Link>
              <br />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
