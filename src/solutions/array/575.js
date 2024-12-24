export const distributeCandies = function (candyType) {
  const map = new Map();
  let counter = 0;
  for (let i in candyType) {
    if (!map.get(candyType[i])) {
      map.set(candyType[i], true);
      counter++;
    }
  }
  return counter > candyType.length / 2 ? candyType.length / 2 : counter;
};
