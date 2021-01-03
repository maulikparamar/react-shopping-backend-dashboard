import React from "react";
import TableHead from "./thaed";
import TableBody from "./tbody";
const Tables = ({ tablehead, tablevalue }) => {
  return (
    <React.Fragment>
      <div>
        <div className="form-group col-md-2" style={{ float: "right" }}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <div className="form-group col-md-1">
          <select id="inputState" className="form-control">
            <option>10</option>
            <option>11</option>
          </select>
        </div>
      </div>
      <table className="table table-striped">
        <TableHead tablehead={tablehead} />
        <TableBody tablevalue={tablevalue} />
      </table>
    </React.Fragment>
  );
};

export default Tables;
