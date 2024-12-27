export const findRestaurant = function (list1, list2) {
  const map = new Map();
  list1.forEach((item, i) => {
    map.set(item, { index1: i });
  });

  list2.forEach((item, i) => {
    const value = map.get(item);
    if (value) {
      value.index2 = i;
      map.set(item, value);
    }
  });

  let duplicateArr = [];
  for (const [key, value] of map) {
    if (!value.hasOwnProperty("index2")) continue;
    duplicateArr.push([key, value.index1 + value.index2]);
  }

  const sortedDuplicates = duplicateArr.sort((a, b) => a[1] - b[1]);
  console.log(sortedDuplicates);

  let result = [sortedDuplicates[0]];
  for (let i = 1; i < sortedDuplicates.length; i++) {
    if (sortedDuplicates[i][1] !== result[0][1]) break;
    result.push(sortedDuplicates[i]);
  }
  return result.map((subArray) => subArray[0]);
};