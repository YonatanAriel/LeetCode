const getRow = (rowIndex) => {
  let row = [1];
  for (let i = 0; i < rowIndex; i++) {
    row = [1, ...row.map((_, j) => row[j] + (row[j + 1] || 0))];
  }
  return row;
};