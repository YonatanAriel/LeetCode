/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
export const longestAlternatingSubarray = function (nums, threshold) {
  let isPrevOdd;
  let current = 0;
  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > threshold) {
      longest = Math.max(longest, current);
      current = 0;
    }
    if (nums[i] % 2 === 0) {
      if (isPrevOdd) current++;
      else {
        longest = Math.max(longest, current);
        current = 0;
      }
      isPrevOdd = false;
    } else {
      if (isPrevOdd) {
        longest = Math.max(longest, current);
        current = 0;
      } else current++;
    }
  }
  return longest;
};
