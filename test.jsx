import { useEffect } from "react";
import { minSubArrayLen } from "./src/solutions/209";

function Test() {
  useEffect(() => {
    const result = minSubArrayLen(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]);
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
