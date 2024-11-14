/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
export const containsNearbyDuplicate = function (nums, k) {
  let distinctObj = { number: index };

  for (let i = 0; i < nums.length; i++) {
    if (distinctObj[i]) {
      if (i - index < k) return true;
    }
    distinctObj[i] = index;
  }
  return false;
};
