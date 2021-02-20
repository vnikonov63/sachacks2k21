import React from "react";
import { useState } from "react";
import GardenContext from "../contexts/gardenBasicContext";
import Garden from "../garden";

// This is the wrapper for the garden part

function GardenBuilder() {
  let stateRandom = {};

  const [field, setField] = useState(stateRandom);
  return (
    <>
      <GardenContext.Provider
        value={{
          field,
          setField,
        }}
      >
        <Garden />
      </GardenContext.Provider>
      <div></div>
    </>
  );
}

export default GardenBuilder;
