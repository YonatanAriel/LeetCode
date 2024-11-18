/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
export const longestAlternatingSubarray = function (nums, threshold) {
  let isPrevOdd;
  let current = 0;
  let longest = 0;
  let isFirstSubElement = true;
  for (let i = 0; i < nums.length; i++) {
    if (i == 4) debugger;
    if (nums[i] > threshold) {
      longest = Math.max(longest, current);
      current = 0;
      isFirstSubElement = true;
    } else if (nums[i] % 2 === 0) {
      if (
        // (isFirstSubElement && (nums[i + 1] % 2 !== 0 || i == 0)) ||
        isFirstSubElement ||
        (isPrevOdd && !isFirstSubElement)
      ) {
        current++;
        isPrevOdd = false;
        if (!(nums[i + 1] % 2 === 0)) {
          isFirstSubElement = false;
        } else {
          longest = Math.max(longest, current);
          current = 0;
        }
      } else {
        longest = Math.max(longest, current);
        current = 0;
        isFirstSubElement = true;
      }
    } else {
      if (isFirstSubElement) {
        current = 0;
        continue;
      }
      if (!isPrevOdd) {
        isFirstSubElement = false;
        current++;
        isPrevOdd = true;
      } else {
        longest = Math.max(longest, current);
        current = 0;
        isFirstSubElement = true;
      }
    }
  }
  return Math.max(longest, current);
};
