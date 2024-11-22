/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

export const intersection = function (nums1, nums2) {
  const hashmap = new Map();

  for (let i = 0; i < nums1.length; i++) {
    hashmap.set(nums1[i], 1);
  }

  const intersectionArr = [];
  for (let i = 0; i < nums2.length; i++) {
    if (hashmap.get(nums2[i]) === 1) {
      hashmap.set(nums2[i], 2);
      intersectionArr.push(nums2[i]);
    }
  }

  return intersectionArr;
};
