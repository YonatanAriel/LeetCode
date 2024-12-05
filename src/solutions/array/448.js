// export const findDisappearedNumbers = function (nums) {
//   const distinct = [...new Set(nums)].sort((a, b) => a - b);

//   const allNums = Array.from({ length: nums.length }, (v, k) => k + 1);
//   let result = [];
//   for (let i in allNums) {
//     if (!distinct.includes(allNums[i])) {
//       result.push(allNums[i]);
//     }
//   }
//   return result;
// };
export const findDisappearedNumbers = function (nums) {
  const map = new Map();
  for (let num of nums) {
    map.set(num, true);
  }
  let result = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!map.get(i)) {
      result.push(i);
    }
  }
  return result;
};
