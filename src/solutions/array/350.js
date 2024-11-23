/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export const intersect = function (nums1, nums2) {
  const hashmap = new Map();

  for (let i = 0; i < nums1.length; i++) {
    const hashmapValue = hashmap.get(nums1[i]);
    if (!hashmapValue) hashmap.set(nums1[i], { nums1Count: 1 });
    else hashmap.set(nums1[i], { nums1Count: hashmapValue.nums1Count + 1 });
  }

  for (let i = 0; i < nums2.length; i++) {
    const hashmapValue = hashmap.get(nums2[i]);
    if (!hashmapValue?.nums1Count) continue;

    if (!hashmapValue.nums2Count) {
      hashmap.set(nums2[i], { nums2Count: 1 });
      continue;
    }

    hashmap.set(nums2[i], { nums2Count: hashmapValue.nums2Count + 1 });
  }

  const intersectionArr = [];
  for (const [key, value] of hashmap) {
    const intersectionNumCount = Math.min(value.nums1Count, value.nums2Count);
    for (let i = 0; i < intersectionNumCount; i++) {
      intersectionArr.push(key);
    }
  }

  return intersectionArr;
};
