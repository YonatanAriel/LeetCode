/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
export const decrypt = function (code, k) {
  if (k == 0) return code.fill(0, 0, code.length);

  if (k > 0) {
    let firstKElements = code.slice(0, k);
    code.push(...firstKElements);

    let currentSum = 0;
    for (let i = 0; i < k; i++) {
      currentSum += code[i];
    }

    for (let i = 0; i < code.length - k; i++) {
      currentSum += -code[i] + code[i + k];
      code[i] = currentSum;
    }
    return code.slice(0, code.length - k);
  }

  let lastKElements = code.slice(k);
  code.unshift(...lastKElements);
  let currentSum = 0;
  const positiveK = Math.abs(k);
  for (let i = code.length - 1; i >= code.length - positiveK; i--) {
    currentSum += code[i];
  }

  for (let i = code.length - 1; i >= positiveK; i--) {
    currentSum += -code[i] + code[i - positiveK];
    code[i] = currentSum;
  }

  return code.slice(positiveK);
};
