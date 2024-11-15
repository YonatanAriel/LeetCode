import { useEffect } from "react";
import { decrypt } from "./src/solutions/sliding-window/1652";

function Test() {
  useEffect(() => {
    // const result = decrypt([2, 4, 9, 3], -2);
    const result = decrypt([5, 7, 1, 4], 3);
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
