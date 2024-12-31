export const numberOfLines = function (widths, s) {
  let numOfRows = 0;
  let rowPixelsCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (rowPixelsCount + widths[i] > 100) {
      numOfRows++;
      rowPixelsCount = widths[i];
    } else rowPixelsCount += widths[i];
  }
  return [numOfRows + 1, rowPixelsCount];
};
