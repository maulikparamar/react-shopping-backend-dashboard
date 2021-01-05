require("dotenv").config({ path: "../../.env" });
const axios = require("axios").default;

async function categoryDelete(id) {
  return axios.post(`${process.env.REACT_APP_URl}/dcategory_table`, { id });
}

module.exports = { categoryDelete };
