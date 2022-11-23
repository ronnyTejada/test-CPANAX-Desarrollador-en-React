import React from 'react';
import "./styles.css";

const Card = ({url,title,brand}) => {
    return ( 
        <div className='card'>
            <img src={url} alt="" />
            <div>
                <h3>{title}</h3>
                <p>{brand}</p>
            </div>
        </div>
     );
}
 
export default Card;