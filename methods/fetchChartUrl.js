const axios = require("axios");

const fetchChartUrl = async (data, label) => {
  const BASE_URL = "https://quickchart.io/chart/create";

  try {
    let res = await axios.post(BASE_URL, {
      chart: {
        type: "bar",
        data: {
          labels: data[0],
          datasets: [
            {
              label,
              data: data[1],
            },
          ],
        },
      },
    });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchChartUrl;
