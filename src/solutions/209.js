export const minSubArrayLen = function (target, nums) {
  let result = 0;
  let subArrSum = 0;
  let subArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) {
      result = 1;
      break;
    }
    subArrSum += nums[i];
    subArr.push(nums[i]);
    if (target > subArrSum) continue;
    let startIndex = 0;
    for (let j = 0; j < subArr.length; j++) {
      if (subArrSum - subArr[j] < target) break;
      subArrSum -= subArr[j];
      startIndex++;
    }
    subArr = subArr.slice(startIndex);

    if (result === 0) result = subArr.length;
    else result = Math.min(result, subArr.length);

    subArrSum -= subArr[0];
    subArr.shift();
  }
  return result;
};
