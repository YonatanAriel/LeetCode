import { useEffect } from "react";
import { longestAlternatingSubarray } from "./src/solutions/sliding-window/2760";

function Test() {
  useEffect(() => {
    // const result = longestAlternatingSubarray([3, 6, 10], 6);
    const result = longestAlternatingSubarray([4, 10, 3, 8, 4, 5, 4, 1], 16);
    console.log("result = ", result); //2
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
