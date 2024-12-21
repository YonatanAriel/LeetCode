export const findWords = function (words) {
  const map1 = new Map(Array.from("qwertyuiop").map((key) => [key, true]));
  const map2 = new Map(Array.from("asdfghjkl").map((key) => [key, true]));
  const map3 = new Map(Array.from("zxcvbnm").map((key) => [key, true]));
  const maps = [map1, map2, map3];

  let result = [];
  const isInKeyboardRow = (word) => {
    for (let i = 0; i < 3; i++) {
      let isInRow = true;
      for (let j = 0; j < word.length; j++) {
        if (!maps[i].get(word[j].toLowerCase())) {
          isInRow = false;
          break;
        }
      }
      if (isInRow) return true;
    }
    return false;
  };

  for (let i = 0; i < words.length; i++) {
    if (isInKeyboardRow(words[i])) result.push(words[i]);
  }

  return result;
};
