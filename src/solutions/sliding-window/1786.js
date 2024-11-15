/**
 * @param {string} s
 * @return {number}
 */
export const countGoodSubstrings = function (s) {
  if (s.length < 3) return 0;

  const arr = s.split("");
  let counter = 0;
  let subS = arr.slice(0, 3);

  for (let i = 1; i < arr.length - 1; i++) {
    debugger;
    if (new Set(subS).size === subS.length) counter++;
    subS.shift();
    subS.push(s[i + 2]);
  }

  return counter;
};
