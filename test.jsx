import { useEffect } from "react";
import { findLengthOfLCIS } from "./src/solutions/array/674";

function Test() {
  useEffect(() => {
    //
    const result = findLengthOfLCIS([1, 3, 5, 4, 2, 3, 4, 5]);
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
