import { useEffect } from "react";
import { findMaxAverage } from "./src/solutions/sliding-window/649";

function Test() {
  useEffect(() => {
    const result = findMaxAverage([0, 1, 1, 3, 3], 4);
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
