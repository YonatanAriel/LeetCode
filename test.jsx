import { useEffect } from "react";
import { minimumRecolors } from "./src/solutions/sliding-window/2739";

function Test() {
  useEffect(() => {
    const result = minimumRecolors("WBBWWBBWBW", 7);
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
