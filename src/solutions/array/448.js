export const findDisappearedNumbers = function (nums) {
  const distinctSortedNums = [...new Set(nums)].sort((a, b) => a - b);

  const resultArr = [];
  for (let i in distinctSortedNums) {
    if (nums[i + 1] - nums[i] > 1) resultArr.push(nums[i + 1]);
  }
  return resultArr;
};
