import React from "react";

const TableHead = ({ tablehead }) => {
  return (
    <thead>
      <tr>
        {tablehead.map((e) => {
          <th key={e} scope="col">
            {e}
          </th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
