import React, { useEffect, useState } from "react";
import { filterRows } from "../../utils/consts";
import MyModal from "../modal/modal";
import "./styles.css";

const Card = ({id, url, title, brand, filter,setIsOpen,setItemSelected }) => {

  const selectedItem=(id)=>{
    setItemSelected(id)
    setIsOpen((prev) => (prev = true))
  }

  return (
    <div
      className={`card card--filter-${filter}`}
      onClick={() => selectedItem(id)}
    >
      <img src={url} alt="" />
      <div>
        {title.length > 27 ? (
          <h3>{title.slice(0, 27)}...</h3>
        ) : (
          <h3>{title}</h3>
        )}
        <p>{brand}</p>
      </div>
    </div>
  );
};

export default Card;
