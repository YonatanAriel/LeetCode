export const pivotIndex = function (nums) {
  let leftSum = 0;
  let leftArr = [0];
  for (let i = 1; i < nums; i++) {
    leftSum += nums[i - 1];
    leftArr.push(leftSum);
  }

  let rightSum = 0;
  let rightArr = [0];
  for (let i = nums.length - 1; i > 0; i--) {
    rightSum += nums[i + 1];
    rightArr.unshift(rightSum);
  }

  for (let i in leftArr) {
    if (leftArr[i] === rightArr[i]) return i + 1;
  }

  return -1;
};
