import React from "react";
import { filterRows } from "../../utils/consts";
import "./style.css";

const Filter = ({setFilter}) => {

    const change=(event)=>{
        setFilter(event.target.value)
    }
  return (
    <select name="filter" onChange={change} className="filter" id="">
      {filterRows.map((item) => {
        return <option value={item} defaultValue={item === 4 ? true : false}>{item} per row</option>;
      })}
    </select>
  );
};

export default Filter;
