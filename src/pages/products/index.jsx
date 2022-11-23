import "./styles.css";
import { useEffect, useState } from "react";
import Card from "../../components/card/card";
import Pagination from "../../components/pagination/pagination";
import { LIMIT } from "../../utils/consts";
import { getProducts } from "../../utils/controllers";

function Products() {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);

  useEffect(() => {
    getProducts(skip, setData);
  }, [skip]);

  return (
    <div>
      <div className="products">
        {data.map((item) => {
          return (
            <Card url={item.thumbnail} title={item.title} brand={item.brand} />
          );
        })}
      </div>
      <Pagination setSkip={setSkip} skip={skip} limit={LIMIT} />
    </div>
  );
}

export default Products;
