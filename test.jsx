import { useEffect } from "react";
import { pivotIndex } from "./src/solutions/array/724";

function Test() {
  useEffect(() => {
    //
    const result = pivotIndex([1, 7, 3, 6, 5, 6]);
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
