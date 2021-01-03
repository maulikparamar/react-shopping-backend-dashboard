import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import cart from "../image/cart1.png";
import { register } from "../axios";
function Register() {
  const [infoForm, setInfoform] = useState({
    Email: "",
    password: "",
    Repassword: "",
  });
  const [show, setShow] = useState({
    display: "none",
    className: "alert alert-danger fadeIn",
    msg: "hello",
  });

  function setForm(e) {
    setInfoform({ ...infoForm, [e.target.name]: e.target.value });
  }
  let history = useHistory();
  async function onSubmit() {
    if (infoForm.password === infoForm.Repassword) {
      var t = await register(infoForm.Email, infoForm.password);
      if (t === 0) {
        setShow({
          ...show,
          display: "block",
          className: "alert alert-success fadeIn",
          msg: "Successfully Registered",
        });
        setTimeout(() => {
          setShow({ display: "none" });
          history.push("/");
        }, 1000);
      } else {
        setShow({ ...show, display: "block", msg: t });
        setTimeout(() => {
          setShow({ display: "none" });
        }, 3000);
      }
    } else {
      setShow({ ...show, display: "block", msg: "Not Match Password" });
      setTimeout(() => {
        setShow({ display: "none" });
      }, 3000);
    }
  }

  return (
    <React.Fragment>
      <div className="text-center newbody" style={{ height: "100vh" }}>
        <div className="form-signin">
          <img className="mb-4" src={cart} alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">
            Please Register in to shopping website
          </h1>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            value={infoForm.Email}
            name="Email"
            className="form-control"
            placeholder="Email address"
            onChange={setForm}
            required
            autoFocus
          />

          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            value={infoForm.password}
            className="form-control"
            name="password"
            placeholder="Password"
            onChange={setForm}
            required
          />
          <label htmlFor="inputPassword" className="sr-only">
            Re-Password
          </label>
          <input
            type="password"
            className="form-control"
            name="Repassword"
            value={infoForm.Repassword}
            placeholder="Re-Password"
            onChange={setForm}
            required
          />

          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            onClick={onSubmit}
          >
            Register
          </button>

          <label style={{ marginTop: "10px" }}>
            <Link to="/">Login Page</Link>
          </label>
          <p className="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
        </div>
        <div style={{ position: "absolute", top: "0" }}>
          <div className={show.className} style={show}>
            <div>{show.msg}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register;
