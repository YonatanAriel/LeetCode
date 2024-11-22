/**
 * @param {number[]} nums
 * @return {number}
 */
export const missingNumber = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  if (sortedNums[0] !== 0) return 0;
  for (let i = 0; i < sortedNums.length - 1; i++) {
    if (sortedNums[i + 1] !== sortedNums[i] + 1) return sortedNums[i] + 1;
  }
  return sortedNums.length;
};
