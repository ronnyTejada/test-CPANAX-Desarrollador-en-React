import React from "react";
import "./style.css";

const Pagination = ({ setSkip, limit, skip, scroll }) => {
  
  return (
    <div className="pagination">
      {scroll ? (
        <button
          className="btn"
          onClick={() => setSkip((prev) => (prev += limit))}
        >
          Load More
        </button>
      ) : (
        <div className="pagination__btnWrapper">
          <button
            className="btn"
            onClick={() => setSkip((prev) => (prev -= limit))}
            disabled={skip === 0}
          >
            Prev
          </button>
          <button
            className="btn"
            onClick={() => setSkip((prev) => (prev += limit))}
          >
            next
          </button>
        </div>
      )}
    </div>
  );
};

export default Pagination;
