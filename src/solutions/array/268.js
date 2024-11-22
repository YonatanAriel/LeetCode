/**
 * @param {number[]} nums
 * @return {number}
 */
export const missingNumber = function (nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  if (sortedNums[0] !== 0) return 0;
  if (sortedNums[sortedNums.length - 1] !== sortedNums.length)
    return sortedNums.length;

  for (let i = 1; i < sortedNums.length; i++) {
    if (sortedNums[i] != i) return i;
  }
};
