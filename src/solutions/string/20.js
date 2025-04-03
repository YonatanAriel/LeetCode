export const isValid = function (s) {
  const stack = [];
  const obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    if (["(", "{", "["].includes(s[i])) {
      stack.push(s[i]);
      continue;
    } else if (obj[s[i]] === stack[stack.length - 1]) stack.pop();
    else return false;
  }
  return true;
};
