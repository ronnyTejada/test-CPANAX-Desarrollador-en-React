import React, { useEffect, useState } from "react";
import { getUsers } from "../../utils/controllers";
import BaseTable from "react-base-table";
import "react-base-table/styles.css";
import { colums, LIMIT } from "../../utils/consts";
import Pagination from "../../components/pagination";
import "./styles.css";

const Users = () => {
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  useEffect(() => {
    getUsers(skip, setData);
  }, [skip]);

  return (
    <div className="users">
      <BaseTable
        data={data}
        columns={colums}
        width={600}
        rowKey={"id"}
        height={400}
      />
      <Pagination setSkip={setSkip} skip={skip} limit={LIMIT} />
    </div>
  );
};

export default Users;
