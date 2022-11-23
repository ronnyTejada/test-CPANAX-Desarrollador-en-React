import React from "react";
import "./style.css";

const Pagination = ({ setSkip, limit, skip }) => {
  const setPage = (type) => {
    if (type === "prev") {
      setSkip((prev) => (prev -= limit));
    } else {
      setSkip(4);
    }
  };
  return (
    <div className="pagination">
      <button className="btn" onClick={() => setSkip((prev) => (prev -= limit))} disabled={skip === 0}>Prev</button>
      <button className="btn" onClick={() => setSkip((prev) => (prev += limit))}>Next</button>
    </div>
  );
};

export default Pagination;
