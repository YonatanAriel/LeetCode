/**
 * @param {number[]} nums
 * @return {number}
 */
export const singleNumber = function (nums) {
  const sortedArr = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== sortedArr[i + 1]) return sortedArr[i];
    i++;
  }
};
