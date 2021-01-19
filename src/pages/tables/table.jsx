import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const Table = ({ tablehead, tablevalue, name }) => {
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
  const submit = () => {
    console.log(value);
    console.log(id);
    setShow(false);
  };

  const update = (e, user) => {
    setShow(true);
    setId(e);
    setPlace(user);
  };
  const deletetable = (t) => {
    const table = tablevalue.filter((e) => e.id !== t);
    console.log(table);
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
                <td>{e.username}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => update(e.id, e.username)}
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
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">{name}</label>
              <input
                autoFocus
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder={place || "Enter User"}
                onChange={handleChange}
                name="user"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Password</label>
              <input
                autoFocus
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder={"Enter Password"}
                onChange={handleChange}
                name="password"
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
