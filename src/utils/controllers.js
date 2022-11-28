import axios from "axios";
import { LIMIT } from "./consts";

const url_base = "https://dummyjson.com/";

export const getProducts = async ( skip, setData, setLoading) => {
  await axios
    .get(url_base+'products', {
      params: {
        limit: LIMIT,
        skip: skip,
      },
    })
    .then(function (response) {
      setData((prev)=>prev.concat(response.data.products));
      console.log(response)
     // setLoading((prev)=> !prev)
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});
};

export const getUsers=async(skip,setData)=>{
    await axios
    .get(url_base+'users', {
      params: {
        limit: LIMIT,
        skip: skip,
      },
    })
    .then(function (response) {
      console.log(response)
      setData(response.data.users);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});

}