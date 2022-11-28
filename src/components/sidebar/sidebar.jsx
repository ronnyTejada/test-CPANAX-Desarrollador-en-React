import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RoutesNav } from '../../utils/consts';
import { useSpring, animated } from "react-spring";
import {GrClose} from 'react-icons/gr'

import './style.css'

const SideBar = ({visible, setVisible}) => {

    const springWidth = useSpring({
        from: { left: "-100%"},
        left: visible ? "0" : "-100%",
        // config: config.molasses,
        // delay: 200,
      });
    
   
    return (
        <animated.div className='sidebar' style={springWidth}>
         <h1  onClick={()=>setVisible((prev)=>!prev)}><GrClose /></h1>

            {RoutesNav.map(item=>{
                return(
                    <h2 className='sidebar__icon'><Link className='sidebar__link' to={item.path}>{ item.icon}</Link></h2>
                )
            })

            }
                
        </animated.div>
     );
}
 
export default SideBar;