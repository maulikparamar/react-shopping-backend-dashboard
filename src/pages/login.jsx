import cart from "../image/cart1.png";
import { Link, Redirect } from "react-router-dom";
import { useState } from "react";
import { login } from "../axios";
import React from "react";
import tokenCheck from "../utility/tokenCheck";

function Login() {
  const [loginFrom, setloginFrom] = useState({
    inputEmail: "",
    inputPassword: "",
  });
  function changeHandel(e) {
    setloginFrom({ ...loginFrom, [e.target.name]: e.target.value });
  }
  const [show, setShow] = useState({ display: "none", msg: "hello" });

  async function onSubmit() {
    var t = await login(loginFrom.inputEmail, loginFrom.inputPassword);
    console.log(t);
    if (t.status === "pass") {
      localStorage.setItem("json-t", t.token);
      window.location.href = "/dashboard";
    } else {
      console.log(t);
      setShow({ ...show, display: "block", msg: t });
      setTimeout(() => {
        setShow({ display: "none" });
      }, 3000);
    }
  }

  if (tokenCheck()) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="text-center newbody" style={{ height: "100vh" }}>
      <div className="form-signin">
        <img className="mb-4" src={cart} alt="" width="72" height="72" />
        <h1 className="h3 mb-3 font-weight-normal">Login page Shopping</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="inputEmail"
          value={loginFrom.inputEmail}
          className="form-control"
          placeholder="Email address"
          onChange={changeHandel}
          required
          autoFocus
        />
        <br></br>

        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          name="inputPassword"
          value={loginFrom.inputPassword}
          placeholder="Password"
          onChange={changeHandel}
          required
        />

        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>

        <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
          onClick={onSubmit}
        >
          Sign in
        </button>

        <label style={{ marginTop: "10px" }}>
          <Link to="/register">Register Page</Link>
        </label>
        <p className="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
      </div>
      <div style={{ position: "absolute", top: "0" }}>
        <div className="alert alert-danger fadeIn" style={show}>
          <div>{show.msg}</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
