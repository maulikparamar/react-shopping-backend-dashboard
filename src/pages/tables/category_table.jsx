import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { category } from "../../axios";
import { categoryUpdate } from "../../axios/updateData";
import { categoryDelete } from "../../axios/deleteData";
const Table = ({ tablehead, tablevalue, name, setUpdate }) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [place, setPlace] = useState("");
  const [id, setId] = useState();
  const handleClose = () => setShow(false);
  const addButton = () => {
    setId();
    setPlace();
    setShow(true);
  };

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const submit = async () => {
    if (id !== undefined) {
      await categoryUpdate(id, value.category);
      setUpdate((t) => !t);
    } else {
      await category(value.category, value.productbrand);
      setUpdate((t) => !t);
    }
    setShow(false);
  };

  const update = (e, user) => {
    setShow(true);
    setId(e);
    setPlace(user);
  };
  const deletetable = async (id) => {
    await categoryDelete(id);
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
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => update(e.id, e.category)}
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
              <label htmlFor="exampleInputEmail1">Category</label>
              <input
                autoFocus
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder={place || "Enter Category"}
                onChange={handleChange}
                name="category"
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
