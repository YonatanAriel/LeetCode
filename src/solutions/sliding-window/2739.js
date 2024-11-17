export const minimumRecolors = function (blocks, k) {
  let minimumOpr = 0;
  for (let i = 0; i < k; i++) {
    if (blocks[i] === "W") minimumOpr++;
  }

  let currentWhites = minimumOpr;
  for (let i = 1; i <= blocks.length - k; i++) {
    if (minimumOpr === 0) return 0;

    if (blocks[i - 1] === "W") currentWhites--;
    if (blocks[i + k - 1] === "W") currentWhites++;

    minimumOpr = Math.min(minimumOpr, currentWhites);
  }
  return minimumOpr;
};
