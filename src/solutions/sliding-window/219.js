/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
//solved
export const containsNearbyDuplicate = function (nums, k) {
  let distinctObj = {};

  for (let i = 0; i < nums.length; i++) {
    if (typeof distinctObj[nums[i]] === "number") {
      if (i - distinctObj[nums[i]] <= k) return true;
    }
    distinctObj[nums[i]] = i;
  }
  return false;
};
