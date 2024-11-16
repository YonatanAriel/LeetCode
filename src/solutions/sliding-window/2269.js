/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
export const divisorSubstrings = function (num, k) {
  const numsArr = num.toString().split("").map(Number);

  let subS = [];
  for (let i = 0; i < k; i++) {
    subS.push(numsArr[i]);
  }

  let KBeauty = 0;
  for (let i = 0; i <= numsArr.length - k; i++) {
    if (num % Number(subS.join("")) === 0) KBeauty++;
    subS.shift();
    subS.push(numsArr[i + k]);
  }

  return KBeauty;
};
