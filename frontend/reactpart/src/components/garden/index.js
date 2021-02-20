import React from "react";
import { useState, useEffect, useContext } from "react";
import PlotOfLand from "../plotOfLand";
import { uuid } from "uuidv4";

import GardenContext from "../contexts/gardenBasicContext";
import GardenContextFinal from "../contexts/gardenSavedContext";

import PartNode from "../../schemas/GardenNodeClass";

const Garden = () => {
  let { field, setField } = useContext(GardenContext);
  const { gardenState, setGardenState } = useContext(GardenContextFinal);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "15px",
          marginTop: "10px",
        }}
      >
        <button
          onClick={() => {
            let obj = {};
            obj[uuid()] = new PartNode();
            setField({ ...field, ...obj });
          }}
        >
          Create a new block
        </button>
        <button
          onClick={() => {
            setGardenState(field);
          }}
        >
          Save the model
        </button>
      </div>
      <div
        id="gardenLimits"
        style={{ height: "900px", width: "700px", border: "2px solid black" }}
      >
        {Object.entries(field).map((value) => {
          return <PlotOfLand key={uuid()} props={value[0]} />;
        })}
      </div>
    </>
  );
};

export default Garden;
