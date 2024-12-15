export const moveZeroes = function (nums) {
  let i = 0;
  let last = nums.length;
  while (i < last) {
    if (!(nums[i] === 0)) i++;
    else {
      last--;
      for (let j = i; j < last; j++) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
};
