export const findDisappearedNumbers = function (nums) {
  const distinct = [...new Set(nums)].sort((a, b) => a - b);

  const allNums = Array.from({ length: nums.length }, (v, k) => k + 1);
  let result = [];
  for (let i in allNums) {
    if (!distinct.includes(allNums[i])) {
      result.push(allNums[i]);
    }
  }
  return result;
};
