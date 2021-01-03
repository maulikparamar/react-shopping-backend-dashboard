import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Input from "./input";
const ModelTable = ({ modelName, name, getValue, lgShow, setLgShow }) => {
  const [nameValue, setNameValue] = useState("");
  const onChnageGet = (e) => {
    setNameValue({ ...nameValue, [e.target.name]: e.target.value });
  };

  return (
    <React.Fragment>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {modelName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {name && (
            <Input
              value={name.name}
              label={"User"}
              name={"user"}
              handleOnChange={onChnageGet}
            />
          )}
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => getValue(nameValue)}
          >
            Submit
          </button>
        </Modal.Body>
      </Modal>
      <Button onClick={() => setLgShow(true)}>Add</Button>
    </React.Fragment>
  );
};

export default ModelTable;
