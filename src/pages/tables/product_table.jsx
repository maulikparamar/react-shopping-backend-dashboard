import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { product_table } from "../../axios";
import { product_tableUpdate } from "../../axios/updateData";
import { product_tableDelete } from "../../axios/deleteData";
import { Data } from "../../axios/getData";
import base64 from "../../utility/base64";
const Table = ({ tablehead, tablevalue, name, setUpdate }) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");
  const [place, setPlace] = useState(0);
  const [productName, setProductName] = useState("");
  const [priceName, setPriceName] = useState("");
  const [sele, setSelect] = useState(0);
  const [data, setData] = useState([]);
  const [brandselect, setBrandSelect] = useState([]);
  const [selectviewcategory, setSelectViewcategory] = useState([]);
  const [id, setId] = useState();
  const handleClose = () => setShow(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await Data("product_brand");
      const selectresult = await Data("product_brandselect");
      setData(result.data.recordset);
      setSelectViewcategory(selectresult.data.recordset);
    };
    fetchData();
  }, []);
  const addButton = () => {
    selectbrandchange();
    setSelect();
    setId();
    setPlace();
    setProductName();
    setPriceName();
    setShow(true);
  };
  const handleChange = (e) => {
    setPlace();
    setSelect();
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleChangeImage = async (e) => {
    if (e.target.files[0].size > 1000000) {
      alert("File Size too big!");
      return;
    }
    const image = await base64(e.target.files[0]);
    setValue({ ...value, image: image });
  };
  const selectbrandchange = (t) => {
    const selectBranditem = data.filter((e) => e.category_id === parseInt(t));
    setBrandSelect(selectBranditem);
  };
  const submit = async () => {
    if (
      value.category === "Select Category" ||
      value === "" ||
      value.brand === "Select Brand"
    ) {
      alert("Places Select");
      setShow(true);
    } else {
      if (id !== undefined) {
        await product_tableUpdate(
          id,
          value.category,
          value.productname,
          value.brand,
          value.price,
          value.image
        );
        setUpdate((t) => !t);
      } else {
        await product_table(
          value.category,
          value.productname,
          value.brand,
          value.price,
          value.image
        );
        setUpdate((t) => !t);
      }
      setShow(false);
    }
  };

  const update = (e, category, brand, product_name, price) => {
    setShow(true);

    const check = data.filter((e) => e.category === category);
    selectbrandchange(check[0].category_id);
    const checkBrand = data.filter((e) => e.brand === brand);
    setSelect(check[0].category_id);
    setValue({
      ...value,
      category: check[0].category_id,
      brand: checkBrand[0].id,
      productname: product_name,
      price: price,
    });
    setId(e);
    setPriceName(price);
    setProductName(product_name);
    setPlace(checkBrand[0].id);
  };
  const deletetable = async (id) => {
    await product_tableDelete(id);
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
          {tablevalue &&
            tablevalue.map((e, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{e.category}</td>
                  <td>{e.brand}</td>
                  <td>{e.product_name}</td>
                  <td>${e.price}</td>
                  <td>
                    <img
                      width="100px"
                      height="100px"
                      src={e.image}
                      alt="not image"
                      aria-hidden="true"
                    ></img>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() =>
                        update(
                          e.id,
                          e.category,
                          e.brand,
                          e.product_name,
                          e.price
                        )
                      }
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
          <form encType="multipart/form-data">
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Category</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                onClick={(e) => selectbrandchange(e.target.value)}
                onChange={handleChange}
                name="category"
                value={sele}
              >
                <option defaultValue value="0">
                  Select Category
                </option>
                {selectviewcategory.map((e) => {
                  return (
                    <option key={e.category_id} value={e.category_id}>
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
                value={place}
                disabled={
                  brandselect.length === 0 && place == null ? true : false
                }
              >
                <option defaultValue value="0">
                  Select Brand
                </option>
                {brandselect.map((e, i) => {
                  return (
                    <option key={i} value={e.id}>
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
                placeholder={productName || "Enter Product Name"}
                onChange={handleChange}
                name="productname"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">price</label>
              <input
                autoFocus
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder={priceName || "Enter price"}
                onChange={handleChange}
                name="price"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Image</label>
              <input
                className="form-control-file"
                name="image"
                type="file"
                id="image"
                onChange={handleChangeImage}
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
