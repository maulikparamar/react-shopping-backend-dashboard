import React from "react";
//import { Redirect } from "react-router-dom";
import Table from "../tables/table";
//import tokenCheck from "../utility/tokenCheck";
function User() {
  // if (!tokenCheck()) {
  //   return <Redirect to="/" />;
  // }

  const Head = ["id", "username", "update", "delete"];
  const value = [
    { id: 1, name: "maulik" },
    { id: 2, name: "aman" },
    { id: 3, name: "aman" },
    { id: 4, name: "aman" },
    { id: 5, name: "aman" },
    { id: 6, name: "aman" },
    { id: 7, name: "aman" },
    { id: 8, name: "aman" },
    { id: 9, name: "aman" },
    { id: 10, name: "aman" },
    { id: 11, name: "aman" },
    { id: 12, name: "aman" },
    { id: 13, name: "aman" },
    { id: 14, name: "aman" },
  ];
  return (
    <div>
      <div className="main">
        <Table tablehead={Head} tablevalue={value} name="Category" />
      </div>
    </div>
  );
}

export default User;
