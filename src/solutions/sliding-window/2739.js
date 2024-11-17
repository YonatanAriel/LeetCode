/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
//"WBBWWBBWBW", k =7
//"WBWBBBW", k = 2
export const minimumRecolors = function (blocks, k) {
  const blocksArr = blocks.split("");

  let minimumOpr = 0;
  for (let i = 0; i < k; i++) {
    if (blocksArr[i] === "W") minimumOpr++;
  }

  debugger;
  let operations = minimumOpr;
  for (let i = 1; i <= blocksArr.length - k; i++) {
    if (minimumOpr === 0) return 0;

    if (blocksArr[i - 1] === "W") operations--;
    if (blocksArr[i + k - 1] === "W") operations++;

    minimumOpr = Math.min(minimumOpr, operations);
  }
  return minimumOpr;
};
