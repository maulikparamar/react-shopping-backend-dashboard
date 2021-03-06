require("dotenv").config({ path: "../../.env" });
const axios = require("axios").default;

async function categoryUpdate(id, category) {
  return axios
    .put(`${process.env.REACT_APP_URl}/category_table`, { id, category })
    .then((e) => e.data);
}
async function product_brandUpdate(id, category_id, brand) {
  return axios
    .put(`${process.env.REACT_APP_URl}/product_brand`, {
      id,
      category_id,
      brand,
    })
    .then((e) => e.data);
}
async function product_tableUpdate(id, category_id, productname, brand, price) {
  return axios
    .put(`${process.env.REACT_APP_URl}/product_table`, {
      id,
      productname,
      category_id,
      brand,
      price,
    })
    .then((e) => e.data);
}

module.exports = { categoryUpdate, product_brandUpdate, product_tableUpdate };
