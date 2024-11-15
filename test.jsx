import { useEffect } from "react";
import { countGoodSubstrings } from "./src/solutions/sliding-window/1786";

function Test() {
  useEffect(() => {
    const result = countGoodSubstrings("aababcabc");
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
