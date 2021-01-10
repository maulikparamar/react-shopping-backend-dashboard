import React, { useState, useEffect } from "react";
//import { Redirect } from "react-router-dom";
import Table from "../tables/product_table";
import { Data } from "../../axios/getData";
//import tokenCheck from "../utility/tokenCheck";
function ProductBrand() {
  // if (!tokenCheck()) {
  //   return <Redirect to="/" />;
  // }
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await Data("product_brand");
      setData(result.data.recordset);
    };
    fetchData();
  }, [update]);
  const Head = [
    "id",
    "Category",
    "Product Brand",
    "Product Name",
    "update",
    "delete",
  ];
  return (
    <div>
      <div className="main">
        <Table
          tablehead={Head}
          tablevalue={data}
          setUpdate={setUpdate}
          name="Product Table"
        />
        {data.length === 0 ? (
          <div>
            <h2>No data</h2>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProductBrand;
