const preprocessTableData = require("../preprocessTableData");
const data = require("../__testData__/rawData.json");

const requestedAxes = ["Top speed of production car", "Make and model"];

it("Returns an array of labels and values", () => {
  const processedData = preprocessTableData(data, requestedAxes);

  let check = [["Jaguar XK120"], [200.5]];

  let isEqual = checkArrays(processedData, data);

  if (!isEqual) {
    throw new Error(`Should have returned ${check} but got ${processedData}`);
  }
});

const checkArrays = (arr1, arr2) => {
  for (var i = 0; arr1.length < i; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};
