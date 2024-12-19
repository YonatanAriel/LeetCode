export const findLengthOfLCIS = function (nums) {
  if (nums.length === 1) return 1;
  let result = 0;
  let subarr = [nums[0]];
  for (let i = 0; i < nums.length - 1; i++) {
    // if (nums[i] === 4) debugger;
    if (nums[i + 1] > nums[i]) {
      subarr.push(nums[i + 1]);
      if (i != nums.length - 2) continue;
    }
    if (nums[i] > nums[i - 1]) {
      result = Math.max(result, subarr.length);
      subarr = [nums[i]];
      continue;
    }
    if (i == nums.length - 2) result = Math.max(result, subarr.length);
  }
  return result;
};
