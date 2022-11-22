import React from 'react';

const Card = ({url,title,brand}) => {
    return ( 
        <div>
            <img src={url} alt="" />
            <div>
                <h3>{title}</h3>
                <p>{brand}</p>
            </div>
        </div>
     );
}
 
export default Card;