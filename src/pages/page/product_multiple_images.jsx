import React from "react";
//import { Redirect } from "react-router-dom";
import Tables from "../tables";
import ModelTable from "../component/model";
//import tokenCheck from "../utility/tokenCheck";
function Product_multiple_images() {
  // if (!tokenCheck()) {
  //   return <Redirect to="/" />;
  // }

  const getValue = (nameValue) => {
    console.log(nameValue);
  };

  const myItem = [{ id: 1, name: "category" }];
  return (
    <div>
      <div className="main">
        <Tables />
        <ModelTable modelName="Category" name={myItem} getValue={getValue} />
      </div>
    </div>
  );
}
export default Product_multiple_images;
