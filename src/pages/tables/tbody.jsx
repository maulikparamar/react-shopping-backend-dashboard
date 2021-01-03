import React, { useState } from "react";
import ModelTable from "../component/model";

const TableBody = ({ tablevalue }) => {
  const [lgShow, setLgShow] = useState(false);
  const [myItem, setmyItem] = useState();
  const updateid = (id) => {
    const value = tablevalue.find((e) => e.id === id);
    setmyItem(value);
    setLgShow(true);
  };
  const deleteid = (id) => {
    console.log(id);
  };

  const getValue = (nameValue) => {
    console.log(nameValue);
  };

  if (tablevalue)
    return (
      <React.Fragment>
        <tbody>
          {tablevalue.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i}</th>
                <td>{e.name}</td>
                <td>
                  <button
                    id={i}
                    className="btn btn-warning"
                    onClick={() => updateid(i)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    id={i}
                    className="btn btn-danger"
                    onClick={() => deleteid(i)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <ModelTable
          modelName="User"
          name={myItem}
          getValue={getValue}
          lgShow={lgShow}
          setLgShow={setLgShow}
        />
      </React.Fragment>
    );

  return <h1>Loading...</h1>;
};

export default TableBody;
