export const minimumDifference = function (nums, k) {
  const sortedArr = nums.sort((a, b) => a - b);

  let minDiff = sortedArr[k - 1] - sortedArr[0];
  for (let i = 1; i <= sortedArr.length - k; i++) {
    minDiff = Math.min(minDiff, sortedArr[i + k - 1] - sortedArr[i]);
  }

  return minDiff;
};
