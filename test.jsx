import { useEffect } from "react";
import { thirdMax } from "./src/solutions/array/414";
import { findDisappearedNumbers } from "./src/solutions/array/448";

function Test() {
  useEffect(() => {
    //
    const result = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
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
