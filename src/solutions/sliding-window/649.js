/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const findMaxAverage = function (nums, k) {
  let res = 0;
  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }
  res = currentSum / k;

  for (let i = 1; i <= nums.length - k; i++) {
    currentSum -= nums[i - 1];
    currentSum += nums[i + k - 1];
    let avg = currentSum / k;
    res = Math.max(res, avg);
  }
  return res;
};
