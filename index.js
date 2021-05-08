const express = require("express");
const extractUrlfromBody = require("./methods/extractUrlFromBody");
const fetchTableData = require("./methods/fetchTableData");
const preprocessTableData = require("./methods/preprocessTableData");
const fetchChartUrl = require("./methods/fetchChartUrl");

const axios = require("axios");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post("/", async (req, res) => {
  const { url, requestedAxes } = req.body;
  const filteredUrl = extractUrlfromBody(url);

  if (!filteredUrl || !requestedAxes) {
    return res
      .status(400)
      .json({ error: "There is one or more missing fields" });
  }

  const data = await fetchTableData(filteredUrl);
  const preprocessData = preprocessTableData(
    data.tables[0].rows,
    requestedAxes
  );
  const chart = await fetchChartUrl(preprocessData, requestedAxes[0]);
  res.status(200).send(chart.url);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
