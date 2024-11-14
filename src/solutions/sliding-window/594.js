/**
 * @param {number[]} nums
 * @return {number}
 */
export const findLHS = function (nums) {
  let result = 0;
  let counter = 0;
  let currentNums = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - nums[i + 1] === 1 || nums[i + 1] - nums[i] === 1) {
      counter++;
      if (!currentNums.num1) {
        currentNums.num1 = nums[i];
        currentNums.num2 = nums[i + 1];
      }
    } else {
      result = Math.max(result, counter);
      counter = 0;
    }
  }

  return result;
};
