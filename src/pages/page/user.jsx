import React, { useState, useEffect } from "react";
//import { Redirect } from "react-router-dom";
import Table from "../tables/table";
import { Data } from "../../axios/getData";
//import tokenCheck from "../utility/tokenCheck";
function User() {
  // if (!tokenCheck()) {
  //   return <Redirect to="/" />;
  // }
  const [data, setData] = useState([{ id: 1, username: "maulik" }]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await Data("login");
      setData(result.data.recordset);
    };
    fetchData();
  }, []);
  const Head = ["id", "username", "update", "delete"];

  return (
    <div>
      <div className="main">
        <Table
          tablehead={Head}
          tablevalue={data}
          name="User"
          getData={useEffect}
        />
      </div>
    </div>
  );
}

export default User;
