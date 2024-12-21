export const arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length; i += 2) {
    const currentSum = Math.min(nums[i], nums[i + 1]);
    sum += currentSum;
  }
  return sum;
};
