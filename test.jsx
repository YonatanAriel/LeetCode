import { useEffect } from "react";
import { thirdMax } from "./src/solutions/array/414";

function Test() {
  useEffect(() => {
    //
    const result = thirdMax([3, 2, 1]);
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
