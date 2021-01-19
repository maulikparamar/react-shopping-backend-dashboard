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

async function category(category) {
  return axios
    .post(`${process.env.REACT_APP_URl}/category`, { category })
    .then((e) => e.data);
}
async function product_brand(category_id, brand) {
  return axios
    .post(`${process.env.REACT_APP_URl}/product_brand`, { category_id, brand })
    .then((e) => e.data);
}
async function product_table(
  category_id,
  product_name,
  product_brand_id,
  price,
  image
) {
  return axios
    .post(
      `${process.env.REACT_APP_URl}/product_table`,
      { category_id, product_name, product_brand_id, price, image },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((e) => e.data);
}

module.exports = { login, register, category, product_brand, product_table };
