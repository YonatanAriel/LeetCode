import { useEffect } from "react";
import { findRelativeRanks } from "./src/solutions/array/506";
import { isValid } from "./src/solutions/string/20";
import ViewersContainer from "./src/viewer/viewersContainer";

function Test() {
  useEffect(() => {
    //
    const result = isValid("()");
    console.log("result = ", result);
  }, []);

  return (
    <ViewersContainer />
    // <div
    //   style={{
    //     background: "black",
    //     position: "absolute",
    //     inset: 0,
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   <h1 style={{ color: "white" }}>TEST</h1>
    // </div>
  );
}

export default Test;
