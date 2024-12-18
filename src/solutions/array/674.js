export const findLengthOfLCIS = function (nums) {
  const result = [nums[0]];
  let subarr = [];
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i + 1] > nums[i]) {
      subarr.push(nums[i + 1]);
      continue;
    }
    if (nums[i] > nums[i - 1]) {
      if (result.length > subarr.length) {
        result = subarr;
      }
      subarr = [];
    }
  }
  return result.length;
};
