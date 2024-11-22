/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export const intersection = function (nums1, nums2) {
  const hashmap = new Map();

  for (let i = 0; i < nums1.length; i++) {
    hashmap.set(nums1[i], true);
  }

  const intersectionArr = [];
  const arr2Hashmap = new Map();
  for (let i = 0; i < nums2.length; i++) {
    if (hashmap.has(nums2[i]) && !arr2Hashmap.has(nums2[i])) {
      arr2Hashmap.set(nums2[i], true);
      intersectionArr.push(nums2[i]);
    }
  }

  return intersectionArr;
};
