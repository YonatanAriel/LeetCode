import { useEffect } from "react";
import { findRelativeRanks } from "./src/solutions/array/506";

function Test() {
  useEffect(() => {
    //
    const result = findRelativeRanks([
      "Gold Medal",
      "Silver Medal",
      "Bronze Medal",
      4,
      5,
    ]);
    console.log("result = ", result);
  }, []);

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
