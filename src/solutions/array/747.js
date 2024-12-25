export const dominantIndex = function (nums) {
    let largest = { num: nums[0], index: 0 }
    let secondLargest = 0;
    for(let i = 1; i < nums.length; i++){
        if(!(nums[i] > largest.num)) continue
        secondLargest = largest.num
        largest.num = nums[i]
        largest.index = i
    }
    return largest.num >= secondLargest * 2? largest.index : -1
};