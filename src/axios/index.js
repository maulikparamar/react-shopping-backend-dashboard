require("dotenv").config({ path: "../../.env" });
const axios = require("axios").default;
async function login(username, password) {
  return axios
    .post(`${process.env.REACT_APP_URl}/login`, { username, password })
    .then((e) => e.data);
}

async function register(username, password) {
  return axios
    .post(`${process.env.REACT_APP_URl}/register`, { username, password })
    .then((e) => e.data);
}

module.exports = { login, register };
