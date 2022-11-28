import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './style.css'

const MyCaurousel = ({ url, data, itemSelected }) => {
  return (
    <Carousel
      showArrows={true}
      
      className='slider-container '
      //   onChange={onChange}
      //   onClickItem={onClickItem}
      //   onClickThumb={onClickThumb}
    >
      
     
        {data.slice(0,data.length).map((item) => {
          return (
            <div>
              <img src={item.thumbnail} />
              <p className="legend">{item.title}</p>
            </div>
          );
        })}
     
    </Carousel>
  );
};

export default MyCaurousel;
