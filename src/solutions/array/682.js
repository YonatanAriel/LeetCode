export const calPoints = function (operations) {
  let recordArr = [];
  let sum = 0;

  for (let i = 0; i < operations.length; i++) {
    const op = operations[i];

    if (op === "C") {
      const prevScore = recordArr.pop();
      sum -= prevScore;
    } else if (op === "D") {
      const lastScore = recordArr[recordArr.length - 1];
      const newScore = lastScore * 2;
      recordArr.push(newScore);
      sum += newScore;
    } else if (op === "+") {
      const lastScore = recordArr[recordArr.length - 1];
      const secondLastScore = recordArr[recordArr.length - 2];
      const newScore = lastScore + secondLastScore;
      recordArr.push(newScore);
      sum += newScore;
    } else {
      const newScore = parseInt(op, 10);
      recordArr.push(newScore);
      sum += newScore;
    }
  }

  return sum;
};
