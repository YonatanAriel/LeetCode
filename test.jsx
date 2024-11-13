import { useEffect } from "react";

function Test() {
  var flat = function (arr, n, resultArr = arr) {
    console.log("yes");
    if (n === 0) return resultArr;
    let currentArr = [...resultArr];
    for (let i = 0; i < currentArr.length; i++) {
      if (Array.isArray(currentArr[i])) {
        resultArr.splice(i, 1);
        for (let j = 0; j < currentArr[i].length; j++) {
          resultArr.push(currentArr[i][j]);
        }
      } else resultArr.push(currentArr[i]);
    }
    n--;
    return flat(arr, n, resultArr);
  };

  useEffect(() => {
    flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2);
  }, []);

  /**
   *  const result = [];
   *
   *  const fn = (x) => x * 5;
   *  const args = [2], t = 20, cancelTimeMs = 50;
   *
   *  const start = performance.now();
   *
   *  const log = (...argsArr) => {
   *      const diff = Math.floor(performance.now() - start);
   *      result.push({"time": diff, "returned": fn(...argsArr)});
   *  }
   *
   *  const cancel = cancellable(log, args, t);
   *
   *  const maxT = Math.max(t, cancelTimeMs);
   *
   *  setTimeout(cancel, cancelTimeMs);
   *
   *  setTimeout(() => {
   *      console.log(result); // [{"time":20,"returned":10}]
   *  }, maxT + 15)
   */

  return (
    <div
      style={{
        background: "black",
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ color: "white" }}>TEST</h1>
    </div>
  );
}

export default Test;
