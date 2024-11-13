var generate = function (numRows) {
  let arr = [[1], [1, 1]];
  if (numRows === 1) {
    arr.pop();
    return arr;
  }

  for (i = 2; i < numRows; i++) {
    let valueInArr = [1];
    for (index in numRows[i - 1]) {
      if (index === 0) continue;
      if (index + 1 === numRows[i - 1].length) {
        valueInArr.push(1);
      }
      valueInArr.push(numRows[i - 2][index - 1] + numRows[i - 2][index]);

      // valueInArr.push(prevValueInArr[i] + prevValueInArr[i -1])
    }

    arr.push(valueInArr);
  }
  return arr;
};
