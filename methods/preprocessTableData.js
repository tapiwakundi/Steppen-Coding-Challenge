const preprocessTableData = (data, requestedAxes) => {
  let labels = [];
  let values = [];

  let valuesIndex = getColumnIndex(data[0].columns, requestedAxes[0]);
  let labelsIndex = getColumnIndex(data[0].columns, requestedAxes[1]);
  console.log(labelsIndex, valuesIndex);

  for (let i = 2; i < 3; i++) {
    labels.push(data[i].columns[labelsIndex]);
  }

  for (let i = 2; i < 3; i++) {
    let currentValue = data[i].columns[valuesIndex];
    let convertValuetoDouble = convertStringDataToNumber(currentValue);
    values.push(convertValuetoDouble);
  }

  console.log([labels, values]);
  return [labels, values];
};

const convertStringDataToNumber = (string) => {
  let cleanString = parseFloat(string);
  return cleanString;
};

const getColumnIndex = (data, value) => {
  let key = Object.keys(data).find((key) => data[key] == value);
  return key;
};

module.exports = preprocessTableData;
