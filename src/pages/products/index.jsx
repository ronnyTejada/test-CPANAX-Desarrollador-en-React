import "./styles.css";
import { useEffect, useState } from "react";
import Card from "../../components/card/card";
import Pagination from "../../components/pagination/pagination";
import { LIMIT } from "../../utils/consts";
import { getProducts } from "../../utils/controllers";
import Filter from "../../components/cardsFilter/filter";
import MyModal from "../../components/modal/modal";

function Products() {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState(4)
  const [itemSelected, setItemSelected] = useState({})
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getProducts(skip, setData, setLoading);
  }, [skip]);

  return (
    <div>
      <Filter setFilter={setFilter}/>
      <div className="products">
        
        {data.map((item) => {
          return (
            <Card
              filter={filter}
              url={item.thumbnail}
              loading={loading}
              title={item.title}
              brand={item.brand}
              setItemSelected={setItemSelected}
              setIsOpen={setIsOpen}
              id={item.id}
            />
          );
        })}
      </div>
      <MyModal data={data} type={'slider'} setIsOpen={setIsOpen} itemSelected={itemSelected} modalIsOpen={modalIsOpen} />
      <Pagination setSkip={setSkip} skip={skip} limit={LIMIT} scroll={true} />
    </div>
  );
}

export default Products;
