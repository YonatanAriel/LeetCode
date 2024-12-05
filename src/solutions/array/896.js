export const isMonotonic = function (nums) {
  let increasing = true;
  let decreasing = true;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) continue;
    if (nums[i] - nums[i + 1] > 0) increasing = false;
    else decreasing = false;
  }

  return increasing || decreasing ? true : false;
};
