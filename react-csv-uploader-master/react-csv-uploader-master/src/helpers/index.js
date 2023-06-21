import clone from "clone";
const uniqueArray = (arr1, arr2) => {
  const arr = clone(arr1);
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      arr.push(arr2[i]);
    }
  }
  return arr;
};
const getcolumnRow = (data, prevColumns) => {
  const columns = data[0];
  const newData = [];
  for (let i = 1; i < data.length; i++) {
    const singleData = {};
    columns.forEach((column, index) => {
      singleData[column] = data[i][index];
    });
    if (data[i].join("")) {
      newData.push(singleData);
    }
  }
  return { columns: uniqueArray(prevColumns, columns), newData };
};

export { uniqueArray, getcolumnRow };
