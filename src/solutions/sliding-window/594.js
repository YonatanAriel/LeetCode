/**
 * @param {number[]} nums
 * @return {number}
 */
//unsolved
export const findLHS = function (nums) {
  let result = 0;
  let counter = 0;
  let currentNums = [nums[0], nums[1]];

  for (let i = 0; i < nums.length; i++) {
    debugger;
    if (
      nums[i] - nums[i + 1] === 1 ||
      nums[i + 1] - nums[i] === 1 ||
      nums[i] === nums[i + 1]
    ) {
      counter++;
      if()
        currentNums = [nums[i], nums[i + 1]];
      }
    } else {
      result = Math.max(result, counter);
      counter = 0;
    }
  }

  return result;
};
