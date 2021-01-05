require("dotenv").config({ path: "../../.env" });
const axios = require("axios").default;

async function categoryUpdate(id, category) {
  return axios
    .put(`${process.env.REACT_APP_URl}/category_table`, { id, category })
    .then((e) => e.data);
}

module.exports = { categoryUpdate };
