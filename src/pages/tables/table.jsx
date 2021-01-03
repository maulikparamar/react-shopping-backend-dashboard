import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const Table = ({ tablehead, tablevalue, name }) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [place, setPlace] = useState("");
  const [id, setId] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addButton = () => {
    setId();
    setPlace();
    setShow(true);
  };
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const submit = () => {
    console.log(value);
    console.log(id);
    setShow(false);
  };

  const update = (e) => {
    const name = tablevalue.find((t) => t.id === e);
    setShow(true);
    setId(e);
    setPlace(name.name);
  };
  const deletetable = (t) => {
    const table = tablevalue.filter((e) => e.id != t);
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
                <th scope="row">{e.id}</th>
                <td>{e.name}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => update(e.id)}
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
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
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
