import React from "react";
import { Link, useLocation } from "react-router-dom";
import {FaBars} from 'react-icons/fa'
import {GrClose} from 'react-icons/gr'


import { RoutesNav } from "../../utils/consts";
import "./styles.css";

const Nav = ({ routes, setVisible,visible }) => {
  const location = useLocation();

  


  return (
    <div className="navbar_container">
      <ul className="navbar">
        {!visible ?
         <li className="bars" onClick={()=>setVisible((prev)=>!prev)}><FaBars className="bars"/></li>
          :
          <li className="bars" onClick={()=>setVisible((prev)=>!prev)}></li>

        }
        {RoutesNav.map((route) => {
          return (
            <li>
              <Link className={`link ${location.pathname === '/' + route.path ? 'link--active':''} `} to={route.path}><h2>{route.name}</h2></Link>
              <br />
            </li>
          );
        })}
      </ul>

    </div>
  );
};

export default Nav;
