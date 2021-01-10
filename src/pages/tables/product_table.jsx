import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { product_brand } from "../../axios";
import { product_brandUpdate } from "../../axios/updateData";
import { product_brandDelete } from "../../axios/deleteData";
import { Data } from "../../axios/getData";
const Table = ({ tablehead, tablevalue, name, setUpdate }) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [place, setPlace] = useState("");
  const [sele, setSelect] = useState(0);
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const handleClose = () => setShow(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await Data("product_brand");
      setData(result.data.recordset);
    };
    fetchData();
  }, []);
  const addButton = () => {
    setSelect();
    setId();
    setPlace();
    setShow(true);
  };
  const handleChange = (e) => {
    setSelect();
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const submit = async () => {
    if (
      value.category === "Select Category" ||
      value === "" ||
      value.brand === ""
    ) {
      alert("Places Select");
      setShow(true);
    } else {
      if (id !== undefined) {
        await product_brandUpdate(
          id,
          value.category,
          value.productbrand,
          value.productname
        );
        setUpdate((t) => !t);
      } else {
        await product_brand(
          value.category,
          value.productbrand,
          value.productname
        );
        setUpdate((t) => !t);
      }
      setShow(false);
    }
  };

  const update = (e, category, brand) => {
    setShow(true);
    const check = data.filter((e) => e.category === category);
    setSelect(check[0].id);
    setValue({ ...value, category: check[0].id });
    setId(e);
    setPlace(brand);
  };
  const deletetable = async (id) => {
    await product_brandDelete(id);
    setUpdate((t) => !t);
  };
  return (
    <React.Fragment>
      <h2>{name}</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            {tablehead.map((e) => {
              return (
                <th key={e} scope="col">
                  {e}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tablevalue.map((e, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{e.category}</td>
                <td>{e.brand}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => update(e.id, e.category, e.brand)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deletetable(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button variant="primary" onClick={addButton}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Category</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={handleChange}
                name="category"
                value={sele}
              >
                <option defaultValue value="men">
                  Select Category
                </option>
                {data.map((e) => {
                  return (
                    <option key={e.id} value={e.id}>
                      {e.category}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Brand</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={handleChange}
                name="brand"
                value={sele}
              >
                <option defaultValue value="men">
                  Select Brand
                </option>
                {data.map((e) => {
                  return (
                    <option key={e.id} value={e.id}>
                      {e.brand}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Product Name</label>
              <input
                autoFocus
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder={place || "Enter Product Name"}
                onChange={handleChange}
                name="productname"
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" id={id || null} onClick={submit}>
            Submit
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default Table;
