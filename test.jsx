import { useEffect } from "react";
import { findLHS } from "./src/solutions/sliding-window/594";

function Test() {
  useEffect(() => {
    const result = findLHS([1, 3, 2, 2, 5, 2, 3, 7]);
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
