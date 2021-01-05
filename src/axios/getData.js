require("dotenv").config({ path: "../../.env" });
const axios = require("axios").default;

async function Data(tablename) {
  return await axios.get(`${process.env.REACT_APP_URl}/${tablename}`);
}

module.exports = { Data };
