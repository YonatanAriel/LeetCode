import { useEffect } from "react";
import { isMonotonic } from "./src/solutions/array/896";

function Test() {
  useEffect(() => {
    //
    const result = isMonotonic([6, 5, 4, 4]);
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
