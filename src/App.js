import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/card/card";
import Pagination from "./components/pagination";


let url = "https://dummyjson.com/products";
const limit = 4

function App() {
  const [data, setdata] = useState([]);
  const [skip,setSkip] = useState(0)


  const getData = async() => {
    await axios
      .get(url,{
        params:{
          limit:limit,
          skip:skip
        }
      })
      .then(function (response) {
        console.log(response)
        setdata(response.data.products);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };

 useEffect(()=>{
   getData()
 },[skip])

  return(
    <div className="app">
      {data.map(item=>{
        return(
          <Card url={item.thumbnail} title={item.title} brand={item.brand} />
        )
      })

      }

      <Pagination setSkip={setSkip} skip={skip} limit={limit}/>
    
    </div>
  )
}

export default App;
