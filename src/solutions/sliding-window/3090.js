/**
 * @param {string} s
 * @return {number}
 */
export const maximumLengthSubstring = function (s) {
  let maxLength = 0;
  let substringObj = {};
  let substringLength = 0;

  for (let i = 0; i < s.length; i++) {
    // debugger;
    if (!substringObj[s[i]]) {
      substringObj[s[i]] = 1;
      substringLength++;
    } else {
      substringObj[s[i]]++;
      substringLength++;

      if (substringObj[s[i]] === 3) {
        maxLength = Math.max(maxLength, substringLength - 1);

        let innerLoopCounter = 0;
        for (let j = i - maxLength; j < i; j++) {
          innerLoopCounter++;
          if (s[j] === s[i]) {
            substringLength = substringLength - innerLoopCounter;
            substringObj[s[i]]--;
            break;
          }
        }
      }
    }
  }
  return maxLength;
};
