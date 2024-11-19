import { useEffect } from "react";
import { maximumLengthSubstring } from "./src/solutions/sliding-window/3090";

function Test() {
  useEffect(() => {
    //
    const result = maximumLengthSubstring("bcbbbcba");
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
