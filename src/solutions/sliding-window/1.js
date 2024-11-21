/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = function (nums, target) {
  const sortArr = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] + sortArr[i + 1] === target) return [i, i + 1];
  }
};
