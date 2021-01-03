import jwt from "jsonwebtoken";

export default function () {
  try {
    if (localStorage.getItem("json-t")) {
      jwt.verify(
        localStorage.getItem("json-t"),
        process.env.REACT_APP_JWTSECRET
      );
      return true;
    }
  } catch (e) {
    if (e.message === "jwt malformed") localStorage.removeItem("json-t");
    else {
      throw e;
    }
  }
}
