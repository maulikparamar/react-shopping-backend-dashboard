import React, { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = (props) => {
  const [show, setShow] = useState({ width: "0px" });
  const [divShow, setDivShow] = useState({ marginLeft: "0px" });
  const [drop, setDrop] = useState({ display: "none" });
  function openNav() {
    setShow({ ...show, width: "250px" });
    setDivShow({ ...divShow, marginLeft: "250px" });
  }
  function closeNav() {
    setShow({ ...show, width: "0px" });
    setDivShow({ ...divShow, marginLeft: "0px" });
    setDrop({ ...drop, display: "none" });
  }

  function dropDown() {
    if (drop.display === "none") {
      setDrop({ ...drop, display: "block" });
    } else {
      setDrop({ ...drop, display: "none" });
    }
  }

  return (
    <div>
      <div className="navbar navbar-dark bg-dark">
        <span
          style={{ fontSize: "30px", cursor: "pointer", color: "white" }}
          onClick={openNav}
        >
          &#9776;
        </span>
        <Link className="navbar-brand" to="/home" style={{ margin: "0 auto" }}>
          Shopping-Shopkeeper Managment
        </Link>
      </div>
      <div id="mySidenav" className="sidenav" style={show}>
        <label className="closebtn" onClick={closeNav}>
          &times;
        </label>
        <Link className="atag" to="/dashboard" onClick={closeNav}>
          DashBoard
        </Link>
        <Link className="atag" to="/user" onClick={closeNav}>
          User Details
        </Link>
        <Link className="atag" to="/user" onClick={closeNav}>
          Shopping user Details
        </Link>
        <button className="dropdown-btn atag" onClick={dropDown}>
          Product Details
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-container" style={drop}>
          <Link
            className="atag"
            style={{ fontSize: "20px " }}
            to="/category"
            onClick={closeNav}
          >
            Category
          </Link>
          <Link
            className="atag"
            style={{ fontSize: "20px " }}
            to="/product_brand"
            onClick={closeNav}
          >
            Product Brand
          </Link>
          <Link
            className="atag"
            style={{ fontSize: "20px " }}
            to="/product_table"
            onClick={closeNav}
          >
            Product Table
          </Link>
        </div>
        <Link className="atag" to="/product_feedback" onClick={closeNav}>
          Product FeedBack
        </Link>
        <Link className="atag" to="/contact" onClick={closeNav}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
