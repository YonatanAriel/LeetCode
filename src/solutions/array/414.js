/**
 * @param {number[]} nums
 * @return {number}
 */
export const thirdMax = function (nums) {
  const distinct = [...new Set(nums)].sort((a, b) => a - b);

  if (distinct.length < 3) return distinct[distinct.length - 1];

  return distinct[distinct.length - 4];
};
