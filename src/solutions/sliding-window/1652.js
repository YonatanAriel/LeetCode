/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
export const decrypt = function (code, k) {
  if (k == 0) return code.fill(0, 0, code.length);

  const isKPositive = k > 0;
  let addedKElements = isKPositive ? code.slice(0, k) : code.slice(k);
  isKPositive ? code.push(...addedKElements) : code.unshift(...addedKElements);

  const absoluteK = Math.abs(k);
  let currentSum = 0;

  if (isKPositive) {
    for (let i = 0; i < k; i++) {
      currentSum += code[i];
    }

    for (let i = 0; i < code.length - k; i++) {
      currentSum += -code[i] + code[i + k];
      code[i] = currentSum;
    }
  } else {
    for (let i = code.length - 1; i >= code.length - absoluteK; i--) {
      currentSum += code[i];
    }

    for (let i = code.length - 1; i >= absoluteK; i--) {
      currentSum += -code[i] + code[i - absoluteK];
      code[i] = currentSum;
    }
  }

  return isKPositive ? code.slice(0, code.length - k) : code.slice(absoluteK);
};
