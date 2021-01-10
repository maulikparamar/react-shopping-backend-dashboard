require("dotenv").config({ path: "../../.env" });
const axios = require("axios").default;

async function categoryDelete(id) {
  return axios.post(`${process.env.REACT_APP_URl}/dcategory_table`, { id });
}

async function product_brandDelete(id) {
  return axios.post(`${process.env.REACT_APP_URl}/dproduct_brandDelete`, {
    id,
  });
}

module.exports = { categoryDelete, product_brandDelete };
