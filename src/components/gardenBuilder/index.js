import React from "react";
import { useState } from "react";
import GardenContext from "../contexts/gardenBasicContext";
import Garden from "../garden";

// This is the wrapper for the garden part

function GardenBuilder({ props }) {
  let stateRandom = {};

  console.log("Props is", props);

  const [field, setField] = useState(stateRandom);
  return (
    <>
      <GardenContext.Provider
        value={{
          field,
          setField,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Garden props={props} />
        </div>
      </GardenContext.Provider>
      <div></div>
    </>
  );
}

export default GardenBuilder;
