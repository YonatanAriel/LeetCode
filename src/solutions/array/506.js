export const findRelativeRanks = function (score) {
  const sortedScores = score.sort((a, b) => a - b);
  const map = new Map();
  for (let i in sortedScores) {
    if (i == 0) {
      map.set(sortedScores[i], "Gold Medal");
      continue;
    } else if (i == 1) {
      map.set(sortedScores[i], "Silver Medal");
      continue;
    } else if (i == 2) {
      map.set(sortedScores[i], "Bronze Medal");
      continue;
    }
    map.set(sortedScores[i], Number(i) + 1);
  }

  let result = [];
  for (let v of score) {
    result.push(map.get(v));
  }
  return result;
};
