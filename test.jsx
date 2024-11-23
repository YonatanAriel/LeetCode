import { useEffect } from "react";
import { intersect } from "./src/solutions/array/350";

function Test() {
  useEffect(() => {
    //
    const result = intersect([1, 2, 2, 1], [2, 2]);
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
