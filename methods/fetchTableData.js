const axios = require("axios");

const fetchTableData = async (endpoint) => {
  const BASE_URL = "https://wikitable2json.com/api";

  try {
    let res = await axios.get(`${BASE_URL}/${endpoint}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchTableData;
